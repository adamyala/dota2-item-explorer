# Dota 2 Item Explorer

A static page for sorting and browsing Dota 2 items by their stats.

Item data is fetched live in the browser from
[odota/dotaconstants `build/items.json`](https://raw.githubusercontent.com/odota/dotaconstants/refs/heads/master/build/items.json),
so there is no build or scrape step. Item images come from Valve's CDN.

## Run locally

```sh
python3 -m http.server
```

Then open http://localhost:8000. It needs a server because `app.js` is an ES module.

## Features

- Pick stats to add a value column and a "gold per 1 stat" column for each one.
- Click any column header to sort. Items without that stat always sort last.
- Search matches item names and ability text (e.g. "silence", "dispel").
- Set a gold budget to see only items you can afford, or filter to items with an active, an aura, or that can be disassembled (`DISASSEMBLE_ITEMS` in `app.js`, a hand-maintained list).
- Gold efficiency: each stat is priced at the cheapest basic item that gives only that stat, and an item's stats are valued at those prices against its cost.
- Only items you can buy in the shop are shown: no consumables, recipes, neutrals or removed items. Removed items that still have a gold cost in the data are listed in `REMOVED_ITEMS` in `app.js`.
- The Cooldown column falls back to an ability value (for example Holy Locket's use cooldown) when an item has no main cooldown, and labels where the number came from.
- "Include attribute bonuses" adds what attributes grant (for example Strength → Health). The multipliers are in `ATTRIBUTE_BONUSES` in `app.js`.
- Click a row for abilities, components, what it builds into, and notes.
- Filters, selected stats and sort are kept in the URL hash, so you can share a link.
