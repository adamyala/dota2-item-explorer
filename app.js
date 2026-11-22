"use strict";

const DATA_URL = "https://raw.githubusercontent.com/odota/dotaconstants/refs/heads/master/build/items.json";
const IMAGE_HOST = "https://cdn.cloudflare.steamstatic.com";

// Stats granted per point of each attribute, used by the "Include attribute bonuses" toggle.
// Checked against patch 7.42 notes; update these when a patch changes attribute scaling.
const ATTRIBUTE_BONUSES = {
    "Strength": { "Health": 20, "Health Regeneration": 0.1 },
    "Agility": { "Armor": 1 / 6, "Attack Speed": 1 },
    "Intelligence": { "Mana": 12, "Mana Regeneration": 0.05, "Magic Resistance %": 0.125 },
};

// Attack damage per point of each attribute, by the hero's primary attribute.
// Universal heroes get damage from all three attributes (0.45 since patch 7.38). Update these when a patch changes them.
const PRIMARY_DAMAGE = {
    "Strength": { "Strength": 1 },
    "Agility": { "Agility": 1 },
    "Intelligence": { "Intelligence": 1 },
    "Universal": { "Strength": 0.45, "Agility": 0.45, "Intelligence": 0.45 },
};

const ALL_ATTRIBUTES = ["Strength", "Agility", "Intelligence"];

// Items the data still lists with a gold cost but that can't be bought in the current game.
// Neither odota nor Valve's item feed flags these, so add to this list as needed.
const REMOVED_ITEMS = new Set([
    "trident",
    "diffusal_blade_2",
    "stout_shield",
    "necronomicon",
    "necronomicon_2",
    "necronomicon_3",
    "pocket_roshan",
    "aghanims_shard_roshan",
    "ultimate_scepter_roshan",
    "starforge",
    "skypiercer",
    "berserkers_sabatons",
    "caduceus",
]);

// Items that can be disassembled. odota's data has no flag for this; the list is every item marked
// "DOTA_ITEM_DISASSEMBLE_ALWAYS" in the game's scripts/npc/items.txt (patch 7.42), so update it from there.
const DISASSEMBLE_ITEMS = new Set([
    "angels_demise",
    "echo_sabre",
    "kaya_and_sange",
    "mask_of_madness",
    "pers",
    "radiance",
    "ristuls_devotion",
    "sange_and_yasha",
    "vanguard",
    "vladmir",
    "yasha_and_kaya",
]);

// Ability values that hold a cooldown for items without a top-level one, with the note shown
// under the number ("" for none). Armlet's toggle_cooldown is an anti-spam delay, so it's left out.
const COOLDOWN_KEYS = {
    "cooldown": "",
    "use_cooldown": "",
    "chain_cooldown": "chain lightning",
    "block_cooldown": "block",
    "tp_cooldown": "TP scroll",
};

// Columns whose first click sorts ascending: lower is better.
const ASCENDING_FIRST = new Set(["name", "cd", "mc"]);

const state = {
    items: [],
    search: "",
    hasActive: false,
    hasAura: false,
    disassemble: false,
    maxCost: null,
    statPrices: {},
    computed: false,
    primary: "",
    stats: [],
    statSearch: "",
    statOrder: [],
    sort: "cost",
    dir: "desc",
    open: new Set(),
};

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

function formatNumber(value) {
    return Number.isInteger(value) ? String(value) : String(Math.round(value * 100) / 100);
}

function firstNumber(raw) {
    const match = String(raw).match(/-?\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : null;
}

function titleCase(text) {
    return text.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

// Stat names that don't make sense on their own.
const LABEL_RENAMES = { "Selected Attribute": "Selected Attribute (Power Treads)" };

// "+ {value}% Magic Resistance" -> { label: "Magic Resistance %", pct: true, negative: false, detail: false }
// All-caps lines like "COOLDOWN: {value}" describe an ability rather than a stat, so they're flagged as detail.
function parseDisplay(display) {
    const trimmed = display.trim();
    const negative = trimmed.startsWith("-");
    const pct = display.includes("{value}%") || /%\s*\{value\}/.test(display);
    let label = trimmed
        .replace("{value}", "")
        .replace(/%/g, "")
        .replace(/^[+-]/, "")
        .replace(/:\s*$/, "")
        .replace(/\s+/g, " ")
        .trim();
    const detail = /[A-Z]/.test(label) && label === label.toUpperCase();
    if (detail) {
        label = titleCase(label);
    }
    label = LABEL_RENAMES[label] ?? label;
    // Keep "+45 Movement Speed" and "+20% Movement Speed" in separate columns.
    if (pct) {
        label += " %";
    }
    return { label, pct, negative, detail };
}

function makeStat(raw, pct, negative) {
    let num = firstNumber(raw);
    if (num !== null && negative) {
        num = -Math.abs(num);
    }
    const text = String(raw).trim();
    const shown = negative && !text.startsWith("-") ? `-${text}` : text;
    return { num, raw: pct ? `${shown}%` : shown, pct, derived: false };
}

function addToStat(stats, label, amount) {
    const existing = stats[label];
    const num = (existing?.num ?? 0) + amount;
    stats[label] = {
        num,
        raw: formatNumber(num) + ((existing?.pct ?? label.endsWith(" %")) ? "%" : ""),
        pct: existing?.pct ?? label.endsWith(" %"),
        derived: true,
    };
}

// Adds what an item's attributes grant, plus attack damage when the hero's primary attribute is known.
function computeStats(baseStats, primary) {
    const stats = structuredClone(baseStats);
    const summary = [];
    const add = (label, amount, from) => {
        addToStat(stats, label, amount);
        const rounded = formatNumber(Math.round(amount * 100) / 100);
        summary.push({ label, text: `${amount > 0 ? "+" : ""}${rounded}`, from });
    };
    for (const [attribute, bonuses] of Object.entries(ATTRIBUTE_BONUSES)) {
        const points = baseStats[attribute]?.num;
        if (!points) {
            continue;
        }
        for (const [label, perPoint] of Object.entries(bonuses)) {
            add(label, points * perPoint, attribute);
        }
        const damagePerPoint = PRIMARY_DAMAGE[primary]?.[attribute];
        if (damagePerPoint) {
            add("Damage", points * damagePerPoint, `${attribute}, primary`);
        }
    }
    return { stats, summary };
}

function normalize(data) {
    const items = [];
    for (const [slug, entry] of Object.entries(data)) {
        if (!entry.dname) {
            continue;
        }

        const baseStats = {};
        const summary = [];
        for (const attrib of entry.attrib ?? []) {
            if (!attrib.display) {
                continue;
            }
            const { label, pct, negative, detail } = parseDisplay(attrib.display);
            if (detail) {
                continue;
            }
            baseStats[label] = makeStat(attrib.value, pct, negative);
            summary.push(attrib.display.replace("{value}", attrib.value).trim());
        }

        const allAttributes = baseStats["All Attributes"];
        if (allAttributes?.num) {
            for (const attribute of ALL_ATTRIBUTES) {
                addToStat(baseStats, attribute, allAttributes.num);
            }
        }

        const computed = {};
        for (const primary of ["", ...Object.keys(PRIMARY_DAMAGE)]) {
            computed[primary] = computeStats(baseStats, primary);
        }

        const cost = entry.cost || 0;
        const isConsumable = (entry.qual || "").startsWith("consumable");
        const attribCooldown = (entry.attrib ?? []).find((attrib) => attrib.key in COOLDOWN_KEYS);
        const hasCooldown = typeof entry.cd === "number" && entry.cd > 0;
        items.push({
            slug,
            name: entry.dname,
            cost,
            img: entry.img ? IMAGE_HOST + entry.img : "",
            isShop: cost > 0 && !slug.startsWith("recipe_") && !isConsumable && !REMOVED_ITEMS.has(slug),
            cd: hasCooldown ? entry.cd : attribCooldown ? firstNumber(attribCooldown.value) : null,
            cdNote: !hasCooldown && attribCooldown ? COOLDOWN_KEYS[attribCooldown.key] : "",
            mc: typeof entry.mc === "number" && entry.mc > 0 ? entry.mc : null,
            baseStats,
            computed,
            summary,
            abilities: entry.abilities ?? [],
            hasActive: (entry.abilities ?? []).some((ability) => ability.type === "active"),
            // No aura flag in the data: an ability named "... Aura" or aura ability values (aura_radius, armor_aura).
            hasAura: (entry.abilities ?? []).some((ability) => /\baura\b/i.test(ability.title))
                || (entry.attrib ?? []).some((attrib) => /(^|_)aura(_|$)/.test(attrib.key)),
            canDisassemble: DISASSEMBLE_ITEMS.has(slug),
            abilityText: (entry.abilities ?? [])
                .map((ability) => `${ability.title} ${ability.description}`)
                .join(" ")
                .toLowerCase(),
            components: (entry.components ?? []).filter(Boolean),
            lore: entry.lore || "",
            notes: entry.notes || "",
            hints: entry.hint ?? [],
        });
    }
    return items;
}

function statsOf(item) {
    return state.computed ? item.computed[state.primary].stats : item.baseStats;
}

function goldPerStat(item, label) {
    const num = statsOf(item)[label]?.num;
    return item.cost > 0 && num > 0 ? item.cost / num : null;
}

// Gold per point of each stat, priced from the cheapest basic item (no components, no active)
// whose only stat it is: e.g. Gauntlets of Strength prices Strength at 140 / 3.
function computeStatPrices() {
    const prices = {};
    for (const item of state.items) {
        if (!item.isShop || item.components.length || item.hasActive) continue;
        const own = Object.entries(item.baseStats).filter(([, stat]) => !stat.derived);
        if (own.length !== 1) continue;
        const [label, stat] = own[0];
        if (!(stat.num > 0)) continue;
        const perPoint = item.cost / stat.num;
        if (!prices[label] || perPoint < prices[label].perPoint) {
            prices[label] = { perPoint, source: item.name };
        }
    }
    state.statPrices = prices;
    for (const item of state.items) {
        item.efficiency = goldEfficiency(item);
    }
}

// Stats with no basic item of their own, priced like a single attribute.
const STAT_PRICE_ALIASES = { "Selected Attribute (Power Treads)": "Strength", "Primary Attribute": "Strength" };

// Value of an item's own stats at those prices, as a share of its cost.
// Stats with no basic item to price them (cast range, lifesteal…) are left out.
function goldEfficiency(item) {
    if (!item.isShop) return null;
    const parts = [];
    for (const [label, stat] of Object.entries(item.baseStats)) {
        const price = state.statPrices[label] ?? state.statPrices[STAT_PRICE_ALIASES[label]];
        if (stat.derived || !price || stat.num === null) continue;
        parts.push({ label, num: stat.num, gold: stat.num * price.perPoint });
    }
    if (!parts.length) return null;
    const value = parts.reduce((sum, part) => sum + part.gold, 0);
    return { value, ratio: value / item.cost, parts };
}

function baseItems() {
    return state.items.filter((item) => {
        if (!item.isShop) return false;
        if (state.hasActive && !item.hasActive) return false;
        if (state.hasAura && !item.hasAura) return false;
        if (state.disassemble && !item.canDisassemble) return false;
        if (state.maxCost !== null && item.cost > state.maxCost) return false;
        return true;
    });
}

function visibleItems() {
    const query = state.search.trim().toLowerCase();
    return baseItems().filter((item) => {
        if (query && !item.name.toLowerCase().includes(query)
            && !item.abilityText.includes(query)) return false;
        const stats = statsOf(item);
        return state.stats.every((label) => stats[label]);
    });
}

function sortValue(item, key) {
    if (key === "name") return item.name.toLowerCase();
    if (key === "cost") return item.cost;
    if (key === "cd") return item.cd;
    if (key === "mc") return item.mc;
    if (key === "eff") return item.efficiency?.ratio ?? null;
    if (key.startsWith("stat:")) return statsOf(item)[key.slice(5)]?.num ?? null;
    if (key.startsWith("gps:")) return goldPerStat(item, key.slice(4));
    return null;
}

function sortItems(items) {
    const direction = state.dir === "asc" ? 1 : -1;
    return items.sort((a, b) => {
        const aValue = sortValue(a, state.sort);
        const bValue = sortValue(b, state.sort);
        // Missing values always sink to the bottom, whatever the direction.
        if (aValue === null && bValue === null) return a.name.localeCompare(b.name);
        if (aValue === null) return 1;
        if (bValue === null) return -1;
        if (aValue < bValue) return -direction;
        if (aValue > bValue) return direction;
        return a.name.localeCompare(b.name);
    });
}

function columns() {
    const cols = [
        { key: null, label: "", className: "no-sort" },
        { key: "name", label: "Name" },
        { key: "cost", label: "Cost", className: "num" },
        { key: "cd", label: "Cooldown", className: "num" },
        { key: "mc", label: "Mana cost", className: "num" },
        { key: "eff", label: "Gold efficiency", className: "num" },
    ];
    for (const label of state.stats) {
        cols.push({ key: `stat:${label}`, label, className: "num stat-col" });
    }
    for (const label of state.stats) {
        cols.push({ key: `gps:${label}`, label: label.endsWith(" %") ? `Gold per 1% ${label.slice(0, -2)}` : `Gold per ${label}`, className: "num gps-col" });
    }
    cols.push({ key: null, label: state.computed ? "Stats (with attribute bonuses)" : "Stats", className: "no-sort" });
    cols.push({ key: null, label: "Abilities", className: "no-sort" });
    return cols;
}

function renderHead() {
    const cells = columns().map((col) => {
        const sorted = col.key && col.key === state.sort;
        const arrow = sorted ? (state.dir === "asc" ? " ▲" : " ▼") : "";
        const classes = [col.className, sorted ? "sorted" : ""].filter(Boolean).join(" ");
        const dataKey = col.key ? ` data-sort="${escapeHtml(col.key)}"` : "";
        return `<th class="${classes}"${dataKey}>${escapeHtml(col.label)}${arrow}</th>`;
    });
    $("#items thead").innerHTML = `<tr>${cells.join("")}</tr>`;
}

// The * after a total that attributes changed; hovering it lists what was added.
function derivedBadge(item, label) {
    const stat = statsOf(item)[label];
    if (!stat?.derived) {
        return "";
    }
    const sources = state.computed
        ? item.computed[state.primary].summary
            .filter((source) => source.label === label)
            .map(({ text, from }) => `${text} from ${from}`)
        : [];
    if (ALL_ATTRIBUTES.includes(label) && item.baseStats["All Attributes"]) {
        sources.unshift(`+${item.baseStats["All Attributes"].raw} from All Attributes`);
    }
    return `<span class="derived" title="${escapeHtml(sources.join("\n"))}">*</span>`;
}

function statCell(item, label) {
    const stat = statsOf(item)[label];
    if (!stat) {
        return `<td class="num missing">–</td>`;
    }
    return `<td class="num">${escapeHtml(stat.raw)}${derivedBadge(item, label)}</td>`;
}

function gpsCell(item, label) {
    const value = goldPerStat(item, label);
    return value === null
        ? `<td class="num missing">–</td>`
        : `<td class="num">${escapeHtml(formatNumber(Math.round(value * 10) / 10))}</td>`;
}

function efficiencyCell(item) {
    const efficiency = item.efficiency;
    if (!efficiency) {
        return `<td class="num missing">–</td>`;
    }
    const breakdown = efficiency.parts
        .map(({ label, num, gold }) => `${formatNumber(num)} ${label} = ${Math.round(gold)} gold`)
        .concat(`Total ${Math.round(efficiency.value)} of ${item.cost} gold`)
        .join("\n");
    const percent = Math.round(efficiency.ratio * 100);
    const level = percent >= 100 ? " good" : "";
    return `<td class="num eff${level}" title="${escapeHtml(breakdown)}">${percent}%</td>`;
}

function cooldownCell(item) {
    if (item.cd === null) {
        return `<td class="num missing">–</td>`;
    }
    const note = item.cdNote ? `<span class="cd-note">${escapeHtml(item.cdNote)}</span>` : "";
    return `<td class="num">${escapeHtml(formatNumber(item.cd))}${note}</td>`;
}

// Without attribute bonuses this is the item's own tooltip text; with them it lists the totals,
// and hovering the * on a changed total shows what was added to it.
function statsSummaryCell(item) {
    if (!state.computed) {
        return `<td class="summary">${item.summary.map(escapeHtml).join("<br>")}</td>`;
    }
    const lines = Object.entries(item.computed[state.primary].stats).map(([label, stat]) => {
        const sign = stat.raw.startsWith("-") ? "" : "+";
        return `${sign}${escapeHtml(stat.raw)} ${escapeHtml(label.replace(/ %$/, ""))}${derivedBadge(item, label)}`;
    });
    return `<td class="summary">${lines.join("<br>")}</td>`;
}

function abilitiesCell(item) {
    const abilities = item.abilities.map((ability) => `<p>
        <strong>${escapeHtml(ability.title)}</strong><span class="ability-type">${escapeHtml(ability.type)}</span><br>
        ${escapeHtml(ability.description)}
    </p>`);
    return `<td class="abilities">${abilities.join("")}</td>`;
}

function componentButton(slug) {
    const component = state.items.find((item) => item.slug === slug && item.isShop);
    if (!component) {
        return "";
    }
    return `<button type="button" data-goto="${escapeHtml(slug)}">
        <img src="${escapeHtml(component.img)}" alt="" loading="lazy">${escapeHtml(component.name)}
    </button>`;
}

function renderDetail(item, colspan) {
    const abilities = item.abilities.map((ability) => `
        <div class="ability">
            <h4>${escapeHtml(ability.title)}<span class="ability-type">${escapeHtml(ability.type)}</span></h4>
            <p>${escapeHtml(ability.description)}</p>
        </div>`).join("");
    const components = item.components.map(componentButton).join("");
    const buildsInto = state.items
        .filter((other) => other.isShop && other.components.includes(item.slug))
        .sort((a, b) => a.cost - b.cost)
        .map((other) => componentButton(other.slug))
        .join("");
    const hints = item.hints.map((hint) => `<p>${escapeHtml(hint)}</p>`).join("");

    return `<tr class="detail-row"><td colspan="${colspan}"><div class="detail">
        <div>
            ${abilities || "<p>No abilities.</p>"}
            ${item.lore ? `<p class="lore">${escapeHtml(item.lore)}</p>` : ""}
        </div>
        <div>
            ${components ? `<h4>Components</h4><div class="components">${components}</div>` : ""}
            ${buildsInto ? `<h4>Builds into</h4><div class="components">${buildsInto}</div>` : ""}
            ${item.notes ? `<h4>Notes</h4><p>${escapeHtml(item.notes)}</p>` : ""}
            ${hints ? `<h4>Hints</h4>${hints}` : ""}
        </div>
    </div></td></tr>`;
}

function renderBody() {
    const items = sortItems(visibleItems());
    const colspan = columns().length;
    const rows = items.map((item) => {
        const open = state.open.has(item.slug);
        const row = `<tr class="item-row${open ? " open" : ""}" data-slug="${escapeHtml(item.slug)}">
            <td class="icon"><img src="${escapeHtml(item.img)}" alt="" loading="lazy"></td>
            <td class="name">${escapeHtml(item.name)}</td>
            <td class="num">${item.cost}</td>
            ${cooldownCell(item)}
            <td class="num${item.mc === null ? " missing" : ""}">${item.mc ?? "–"}</td>
            ${efficiencyCell(item)}
            ${state.stats.map((label) => statCell(item, label)).join("")}
            ${state.stats.map((label) => gpsCell(item, label)).join("")}
            ${statsSummaryCell(item)}
            ${abilitiesCell(item)}
        </tr>`;
        return open ? row + renderDetail(item, colspan) : row;
    });
    $("#items tbody").innerHTML = rows.join("");
    const count = `${items.length} item${items.length === 1 ? "" : "s"}`;
    $("#status").textContent = state.computed
        ? `${count} · * includes attribute bonuses (hover it to see what was added)`
        : count;
}

// Chip order is fixed once at load (alphabetical) so chips never move when clicked or toggled.
function computeStatOrder() {
    const labels = new Set();
    for (const item of state.items.filter((item) => item.isShop)) {
        for (const label of [...Object.keys(item.baseStats), ...Object.keys(item.computed.Universal.stats)]) {
            labels.add(label);
        }
    }
    state.statOrder = [...labels].sort((a, b) => a.localeCompare(b));
}

function renderChips() {
    const counts = new Map();
    for (const item of baseItems()) {
        for (const label of Object.keys(statsOf(item))) {
            counts.set(label, (counts.get(label) ?? 0) + 1);
        }
    }
    const query = state.statSearch.trim().toLowerCase();
    const labels = state.statOrder
        .filter((label) => state.stats.includes(label) || !query || label.toLowerCase().includes(query));
    $("#stat-chips").innerHTML = labels.map((label) => {
        const selected = state.stats.includes(label) ? " selected" : "";
        const count = counts.get(label) ?? 0;
        const empty = count === 0 ? " empty" : "";
        return `<button type="button" class="chip${selected}${empty}" data-stat="${escapeHtml(label)}">
            ${escapeHtml(label)}<span class="count">${count}</span>
        </button>`;
    }).join("");
}

function render() {
    renderChips();
    renderHead();
    renderBody();
    writeHash();
}

function writeHash() {
    const params = new URLSearchParams();
    if (state.search) params.set("q", state.search);
    if (state.hasActive) params.set("active", "1");
    if (state.hasAura) params.set("aura", "1");
    if (state.disassemble) params.set("disassemble", "1");
    if (state.maxCost !== null) params.set("max", state.maxCost);
    if (state.computed) params.set("computed", "1");
    if (state.computed && state.primary) params.set("primary", state.primary);
    if (state.stats.length) params.set("stats", state.stats.join("|"));
    if (state.sort !== "cost" || state.dir !== "desc") {
        params.set("sort", state.sort);
        params.set("dir", state.dir);
    }
    const hash = params.toString();
    history.replaceState(null, "", hash ? `#${hash}` : location.pathname + location.search);
}

function readHash() {
    const params = new URLSearchParams(location.hash.slice(1));
    state.search = params.get("q") ?? "";
    state.hasActive = params.get("active") === "1";
    state.hasAura = params.get("aura") === "1";
    state.disassemble = params.get("disassemble") === "1";
    state.maxCost = parseCost(params.get("max"));
    state.computed = params.get("computed") === "1";
    state.primary = PRIMARY_DAMAGE[params.get("primary")] ? params.get("primary") : "";
    state.stats = params.get("stats") ? params.get("stats").split("|") : [];
    state.sort = params.get("sort") ?? "cost";
    state.dir = params.get("dir") === "asc" ? "asc" : "desc";
}

function syncControls() {
    $("#search").value = state.search;
    $("#has-active").checked = state.hasActive;
    $("#has-aura").checked = state.hasAura;
    $("#disassemble").checked = state.disassemble;
    $("#max-cost").value = state.maxCost ?? "";
    $("#computed").checked = state.computed;
    $("#primary").hidden = !state.computed;
    for (const input of document.querySelectorAll('input[name="primary"]')) {
        input.checked = input.value === state.primary;
    }
}

function parseCost(value) {
    const number = parseInt(value, 10);
    return Number.isFinite(number) && number >= 0 ? number : null;
}

function renderEfficiencyHelp() {
    const rows = Object.entries(state.statPrices)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([label, { perPoint, source }]) =>
            `<tr><td>${escapeHtml(label)}</td><td class="num">${escapeHtml(formatNumber(Math.round(perPoint * 100) / 100))}</td><td>${escapeHtml(source)}</td></tr>`)
        .join("");
    $("#efficiency-prices").innerHTML =
        `<table class="prices"><thead><tr><th>Stat</th><th class="num">Gold per point</th><th>Priced from</th></tr></thead><tbody>${rows}</tbody></table>`;
}

// Built from the constants so the explanation always matches the math.
function renderComputedHelp() {
    const perAttribute = Object.entries(ATTRIBUTE_BONUSES).map(([attribute, bonuses]) => {
        const gains = Object.entries(bonuses).map(([label, perPoint]) => {
            const amount = String(Math.round(perPoint * 1000) / 1000);
            return label.endsWith(" %") ? `${amount}% ${label.slice(0, -2)}` : `${amount} ${label}`;
        });
        return `each point of ${attribute} gives ${gains.slice(0, -1).join(", ")} and ${gains.at(-1)}`;
    });
    const universal = PRIMARY_DAMAGE.Universal.Strength;
    $("#computed-help").textContent =
        `Attribute bonuses are what an item's attributes give your hero: ${perAttribute.join("; ")}. ` +
        `Pick your hero's primary attribute to also count the attack damage it grants ` +
        `(1 per point of the primary attribute; Universal heroes get ${formatNumber(universal)} per point of every attribute). ` +
        `The stat columns and sorting use these totals, and changed numbers are marked with *.`;
}

function goToItem(slug) {
    const target = state.items.find((item) => item.slug === slug && item.isShop);
    if (!target) return;
    if (!visibleItems().includes(target)) {
        // Loosen filters just enough to show the component.
        state.search = target.name;
        state.hasActive = false;
        state.hasAura = false;
        state.disassemble = false;
        state.maxCost = null;
        state.stats = [];
        syncControls();
    }
    state.open.add(slug);
    render();
    const row = document.querySelector(`tr[data-slug="${CSS.escape(slug)}"]`);
    row?.scrollIntoView({ behavior: "smooth", block: "center" });
    row?.classList.add("flash");
}

function bindEvents() {
    $("#search").addEventListener("input", (event) => { state.search = event.target.value; renderBody(); writeHash(); });
    $("#stat-search").addEventListener("input", (event) => { state.statSearch = event.target.value; renderChips(); });
    $("#has-active").addEventListener("change", (event) => { state.hasActive = event.target.checked; render(); });
    $("#has-aura").addEventListener("change", (event) => { state.hasAura = event.target.checked; render(); });
    $("#disassemble").addEventListener("change", (event) => { state.disassemble = event.target.checked; render(); });
    $("#max-cost").addEventListener("input", (event) => { state.maxCost = parseCost(event.target.value); render(); });
    $("#computed").addEventListener("change", (event) => {
        state.computed = event.target.checked;
        $("#primary").hidden = !state.computed;
        render();
    });
    $("#primary").addEventListener("change", (event) => { state.primary = event.target.value; render(); });
    $("#clear-stats").addEventListener("click", () => {
        if (state.sort.includes(":")) state.sort = "cost";
        state.stats = [];
        render();
    });

    $("#stat-chips").addEventListener("click", (event) => {
        const chip = event.target.closest("[data-stat]");
        if (!chip) return;
        const label = chip.dataset.stat;
        if (state.stats.includes(label)) {
            state.stats = state.stats.filter((stat) => stat !== label);
            if (state.sort === `stat:${label}` || state.sort === `gps:${label}`) state.sort = "cost";
        } else {
            state.stats.push(label);
            state.sort = `stat:${label}`;
            state.dir = "desc";
        }
        render();
    });

    $("#items thead").addEventListener("click", (event) => {
        const header = event.target.closest("[data-sort]");
        if (!header) return;
        const key = header.dataset.sort;
        if (state.sort === key) {
            state.dir = state.dir === "asc" ? "desc" : "asc";
        } else {
            state.sort = key;
            state.dir = ASCENDING_FIRST.has(key) || key.startsWith("gps:") ? "asc" : "desc";
        }
        renderHead();
        renderBody();
        writeHash();
    });

    $("#items tbody").addEventListener("click", (event) => {
        const goto = event.target.closest("[data-goto]");
        if (goto) {
            goToItem(goto.dataset.goto);
            return;
        }
        const row = event.target.closest("tr.item-row");
        if (!row) return;
        const slug = row.dataset.slug;
        if (state.open.has(slug)) state.open.delete(slug);
        else state.open.add(slug);
        renderBody();
    });
}

async function load() {
    const status = $("#status");
    status.textContent = "Loading items…";
    try {
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        state.items = normalize(await response.json());
    } catch (error) {
        status.innerHTML = `Couldn't load item data (${escapeHtml(error.message)}). <button type="button" id="retry">Retry</button>`;
        $("#retry").addEventListener("click", load);
        return;
    }
    computeStatOrder();
    computeStatPrices();
    renderEfficiencyHelp();
    syncControls();
    render();
}

readHash();
renderComputedHelp();
bindEvents();
load();
