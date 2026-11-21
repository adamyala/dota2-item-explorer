"use strict";

const DATA_URL = "https://raw.githubusercontent.com/odota/dotaconstants/refs/heads/master/build/items.json";
const IMAGE_HOST = "https://cdn.cloudflare.steamstatic.com";

// Stats granted per point of each attribute, used by the "Computed stats" toggle.
// Update these when a patch changes attribute scaling.
const ATTRIBUTE_BONUSES = {
    "Strength": { "Health": 22, "Health Regeneration": 0.1 },
    "Agility": { "Armor": 1 / 6, "Attack Speed": 1 },
    "Intelligence": { "Mana": 12, "Mana Regeneration": 0.05 },
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

// Ability values that hold a cooldown for items without a top-level one (e.g. Armlet's toggle).
const COOLDOWN_KEYS = ["cooldown", "use_cooldown", "toggle_cooldown", "chain_cooldown", "block_cooldown", "tp_cooldown"];

// Columns whose first click sorts ascending: lower is better.
const ASCENDING_FIRST = new Set(["name", "cd", "mc"]);

const state = {
    items: [],
    search: "",
    hasActive: false,
    computed: false,
    stats: [],
    statSearch: "",
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

// "+ {value}% Magic Resistance" -> { label: "Magic Resistance %", pct: true, negative: false }
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
    if (/[A-Z]/.test(label) && label === label.toUpperCase()) {
        label = titleCase(label);
    }
    // Keep "+45 Movement Speed" and "+20% Movement Speed" in separate columns.
    if (pct) {
        label += " %";
    }
    return { label, pct, negative };
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
        raw: formatNumber(num) + (existing?.pct ? "%" : ""),
        pct: existing?.pct ?? false,
        derived: true,
    };
}

function normalize(data) {
    const items = [];
    for (const [slug, entry] of Object.entries(data)) {
        if (!entry.dname) {
            continue;
        }

        const baseStats = {};
        const summary = [];
        const extraAttribs = [];
        for (const attrib of entry.attrib ?? []) {
            if (attrib.display) {
                const { label, pct, negative } = parseDisplay(attrib.display);
                baseStats[label] = makeStat(attrib.value, pct, negative);
                summary.push(attrib.display.replace("{value}", attrib.value).trim());
            } else {
                extraAttribs.push([attrib.key, attrib.value]);
            }
        }

        const allAttributes = baseStats["All Attributes"];
        if (allAttributes?.num) {
            for (const attribute of ALL_ATTRIBUTES) {
                addToStat(baseStats, attribute, allAttributes.num);
            }
        }

        const computedStats = structuredClone(baseStats);
        for (const [attribute, bonuses] of Object.entries(ATTRIBUTE_BONUSES)) {
            const points = baseStats[attribute]?.num;
            if (!points) {
                continue;
            }
            for (const [label, perPoint] of Object.entries(bonuses)) {
                addToStat(computedStats, label, points * perPoint);
            }
        }

        const cost = entry.cost || 0;
        const isConsumable = (entry.qual || "").startsWith("consumable");
        const attribCooldown = (entry.attrib ?? []).find((attrib) => COOLDOWN_KEYS.includes(attrib.key));
        const hasCooldown = typeof entry.cd === "number" && entry.cd > 0;
        items.push({
            slug,
            name: entry.dname,
            cost,
            img: entry.img ? IMAGE_HOST + entry.img : "",
            isShop: cost > 0 && !slug.startsWith("recipe_") && !isConsumable && !REMOVED_ITEMS.has(slug),
            cd: hasCooldown ? entry.cd : attribCooldown ? firstNumber(attribCooldown.value) : null,
            cdNote: !hasCooldown && attribCooldown ? attribCooldown.key.replace(/_?cooldown$/, "").replaceAll("_", " ") : "",
            mc: typeof entry.mc === "number" && entry.mc > 0 ? entry.mc : null,
            baseStats,
            computedStats,
            summary,
            abilities: entry.abilities ?? [],
            hasActive: (entry.abilities ?? []).some((ability) => ability.type === "active"),
            components: entry.components ?? [],
            lore: entry.lore || "",
            notes: entry.notes || "",
            hints: entry.hint ?? [],
            extraAttribs,
        });
    }
    return items;
}

function statsOf(item) {
    return state.computed ? item.computedStats : item.baseStats;
}

function goldPerStat(item, label) {
    const num = statsOf(item)[label]?.num;
    return item.cost > 0 && num > 0 ? item.cost / num : null;
}

function baseItems() {
    return state.items.filter((item) => {
        if (!item.isShop) return false;
        if (state.hasActive && !item.hasActive) return false;
        return true;
    });
}

function visibleItems() {
    const query = state.search.trim().toLowerCase();
    return baseItems().filter((item) => {
        if (query && !item.name.toLowerCase().includes(query)) return false;
        const stats = statsOf(item);
        return state.stats.every((label) => stats[label]);
    });
}

function sortValue(item, key) {
    if (key === "name") return item.name.toLowerCase();
    if (key === "cost") return item.cost;
    if (key === "cd") return item.cd;
    if (key === "mc") return item.mc;
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
        { key: "mc", label: "Mana", className: "num" },
    ];
    for (const label of state.stats) {
        cols.push({ key: `stat:${label}`, label, className: "num stat-col" });
    }
    for (const label of state.stats) {
        cols.push({ key: `gps:${label}`, label: `Gold / ${label}`, className: "num gps-col" });
    }
    cols.push({ key: null, label: "Stats", className: "no-sort" });
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

function statCell(item, label) {
    const stat = statsOf(item)[label];
    if (!stat) {
        return `<td class="num missing">–</td>`;
    }
    const badge = stat.derived ? `<span class="derived" title="Derived from attributes">*</span>` : "";
    return `<td class="num">${escapeHtml(stat.raw)}${badge}</td>`;
}

function gpsCell(item, label) {
    const value = goldPerStat(item, label);
    return value === null
        ? `<td class="num missing">–</td>`
        : `<td class="num">${escapeHtml(formatNumber(Math.round(value * 10) / 10))}</td>`;
}

function cooldownCell(item) {
    if (item.cd === null) {
        return `<td class="num missing">–</td>`;
    }
    const note = item.cdNote ? `<span class="cd-note">${escapeHtml(item.cdNote)}</span>` : "";
    return `<td class="num">${escapeHtml(formatNumber(item.cd))}${note}</td>`;
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
    const attribs = item.extraAttribs
        .map(([key, value]) => `<dt>${escapeHtml(key)}</dt><dd>${escapeHtml(value)}</dd>`)
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
        ${attribs ? `<div><h4>Ability values</h4><dl class="attribs">${attribs}</dl></div>` : ""}
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
            ${state.stats.map((label) => statCell(item, label)).join("")}
            ${state.stats.map((label) => gpsCell(item, label)).join("")}
            <td class="summary">${item.summary.map(escapeHtml).join("<br>")}</td>
            ${abilitiesCell(item)}
        </tr>`;
        return open ? row + renderDetail(item, colspan) : row;
    });
    $("#items tbody").innerHTML = rows.join("");
    $("#status").textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
}

function renderChips() {
    const counts = new Map();
    for (const item of baseItems()) {
        for (const label of Object.keys(statsOf(item))) {
            counts.set(label, (counts.get(label) ?? 0) + 1);
        }
    }
    const query = state.statSearch.trim().toLowerCase();
    const labels = [...counts.keys()]
        .filter((label) => state.stats.includes(label) || !query || label.toLowerCase().includes(query))
        .sort((a, b) => {
            const aSelected = state.stats.includes(a);
            const bSelected = state.stats.includes(b);
            if (aSelected !== bSelected) return aSelected ? -1 : 1;
            return counts.get(b) - counts.get(a) || a.localeCompare(b);
        });
    $("#stat-chips").innerHTML = labels.map((label) => {
        const selected = state.stats.includes(label) ? " selected" : "";
        return `<button type="button" class="chip${selected}" data-stat="${escapeHtml(label)}">
            ${escapeHtml(label)}<span class="count">${counts.get(label)}</span>
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
    if (state.computed) params.set("computed", "1");
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
    state.computed = params.get("computed") === "1";
    state.stats = params.get("stats") ? params.get("stats").split("|") : [];
    state.sort = params.get("sort") ?? "cost";
    state.dir = params.get("dir") === "asc" ? "asc" : "desc";
}

function syncControls() {
    $("#search").value = state.search;
    $("#has-active").checked = state.hasActive;
    $("#computed").checked = state.computed;
}

function goToItem(slug) {
    const target = state.items.find((item) => item.slug === slug && item.isShop);
    if (!target) return;
    if (!visibleItems().includes(target)) {
        // Loosen filters just enough to show the component.
        state.search = target.name;
        state.hasActive = false;
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
    $("#computed").addEventListener("change", (event) => { state.computed = event.target.checked; render(); });
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
    syncControls();
    render();
}

readHash();
bindEvents();
load();
