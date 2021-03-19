let items = [{
    "name": "Magic Wand",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/magic-wand-7a4f7e78733470ac31dd40d01c85661493535044e799bc6676971fb90e2ed747.jpg",
    "description": "Active: Energy ChargeInstantly restores 15 health and mana per charge stored. Max 20 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.",
    "statsObject": {"All Attributes": "3"},
    "statsArray": ["All Attributes"],
    "buildsInto": ["holy-locket"],
    "buildsFrom": ["iron-branch", "iron-branch", "magic-stick", "recipe-magic-wand"]
}, {
    "name": "Power Treads",
    "price": 1400,
    "imageUrl": "https://www.dotabuff.com/assets/items/power-treads-ead692931ccfbcbb43f63b29d1282eb21a387e13eea6763a2b4117f8f3efc0cc.jpg",
    "description": "Active: Switch AttributeSwitches between +10 Strength, +10 Agility, or +10 Intelligence.",
    "statsObject": {
        "Movement Speed": "45",
        "Attack Speed": "25",
        "Intelligence": "10",
        "Strength": "10",
        "Agility": "10"
    },
    "statsArray": ["Movement Speed", "Attack Speed", "Intelligence", "Strength", "Agility"],
    "buildsFrom": ["belt-of-strength", "gloves-of-haste", "boots-of-speed"]
}, {
    "name": "Blink Dagger",
    "price": 2250,
    "imageUrl": "https://www.dotabuff.com/assets/items/blink-dagger-352d6fb207f49668bc8ba248b86b949143986017a7f960b3ac28165a135f601a.jpg",
    "description": "Active: Blink Teleport to a target point up to 1200 units away. Blink Dagger cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["overwhelming-blink", "swift-blink", "arcane-blink"]
}, {
    "name": "Black King Bar",
    "price": 4050,
    "imageUrl": "https://www.dotabuff.com/assets/items/black-king-bar-fdce6ae49e6393d04aa3e258c70d43ddae5a9eba4fae8d46b5594a69d8f0fe5c.jpg",
    "description": "Active: Avatar Grants Spell Immunity.  Duration decreases with each use. Duration: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0 Dispel Type: Basic Dispel",
    "statsObject": {"Strength": "10", "Damage": "24"},
    "statsArray": ["Strength", "Damage"],
    "buildsFrom": ["mithril-hammer", "ogre-axe", "recipe-black-king-bar"]
}, {
    "name": "Aghanim's Scepter",
    "price": 4200,
    "imageUrl": "https://www.dotabuff.com/assets/items/aghanims-scepter-72bdb9aee9187bc224f24985bf92100a34b1ba630991a240d7ccb26ba899079e.jpg",
    "description": "Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes.",
    "statsObject": {"All Attributes": "10", "Health": "175", "Mana": "175"},
    "statsArray": ["All Attributes", "Health", "Mana"],
    "buildsInto": ["aghanims-blessing"],
    "buildsFrom": ["ogre-axe", "blade-of-alacrity", "staff-of-wizardry", "point-booster"]
}, {
    "name": "Phase Boots",
    "price": 1500,
    "imageUrl": "https://www.dotabuff.com/assets/items/phase-boots-0ab5b4cd6fd735cda7c7b7682386efc101e2b464fddcfc707e23e734ffea7ecd.jpg",
    "description": "Active: Phase Gives 20% increased movement speed on melee heroes, and 10% on ranged heroes, and lets you move through units and turn more quickly for 3.0 seconds.",
    "statsObject": {"Movement Speed": "45", "Armor": "4", "Damage": "12/18"},
    "statsArray": ["Movement Speed", "Armor", "Damage"],
    "buildsFrom": ["blades-of-attack", "chainmail", "boots-of-speed"]
}, {
    "name": "Tranquil Boots",
    "price": 925,
    "imageUrl": "https://www.dotabuff.com/assets/items/tranquil-boots-76c5cdb0e48894bdccd475d3547a0ead656741461de4f06feaba182c30467aab.jpg",
    "description": "Passive: Break Whenever you attack a hero or are attacked by any unit, the bonus 14 HP regen is lost and the movement speed bonus is reduced to 45 for 13 seconds.",
    "statsObject": {"Movement Speed": "70", "HP Regeneration": "14"},
    "statsArray": ["Movement Speed", "HP Regeneration"],
    "buildsFrom": ["ring-of-regen", "boots-of-speed", "wind-lace"]
}, {
    "name": "Wraith Band",
    "price": 510,
    "imageUrl": "https://www.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg",
    "statsObject": {"Agility": "5", "Strength": "2", "Intelligence": "2", "Attack Speed": "5", "Armor": "1.5"},
    "statsArray": ["Agility", "Strength", "Intelligence", "Attack Speed", "Armor"],
    "buildsFrom": ["slippers-of-agility", "circlet", "recipe-wraith-band"]
}, {
    "name": "Null Talisman",
    "price": 510,
    "imageUrl": "https://www.dotabuff.com/assets/items/null-talisman-6c0884d6f50ef28de27bd936fde33e6829cd8b695073fad08084f65ab5837188.jpg",
    "statsObject": {
        "Intelligence": "5",
        "Strength": "2",
        "Agility": "2",
        "Spell Amplification": "3%",
        "Mana Regeneration": "0.6"
    },
    "statsArray": ["Intelligence", "Strength", "Agility", "Spell Amplification", "Mana Regeneration"],
    "buildsFrom": ["mantle-of-intelligence", "circlet", "recipe-null-talisman"]
}, {
    "name": "Arcane Boots",
    "price": 1400,
    "imageUrl": "https://www.dotabuff.com/assets/items/arcane-boots-d9f539b66d3cc7b66772e3fbba0c18d0572e64ba2d70bf17fc08627b07ef49fa.jpg",
    "description": "Active: Replenish ManaRestores 160 mana to all nearby allies.Radius: 1200",
    "statsObject": {"Movement Speed": "45", "Mana": "250"},
    "statsArray": ["Movement Speed", "Mana"],
    "buildsInto": ["guardian-greaves"],
    "buildsFrom": ["boots-of-speed", "energy-booster"]
}, {
    "name": "Boots of Travel",
    "price": 2500,
    "imageUrl": "https://www.dotabuff.com/assets/items/boots-of-travel-3da37632a51968545a0ee68bf7e644691f8f4b79fe06adf24bb10a5319f66ef0.jpg",
    "description": "Upgrade: Town Portal ScrollUpgrades your Town Portal Scroll, allowing it to target units, reduces cooldown and does not consume a charge on usage. ",
    "statsObject": {"Movement Speed": "110"},
    "statsArray": ["Movement Speed"],
    "buildsInto": ["boots-of-travel-level-2"],
    "buildsFrom": ["boots-of-speed", "recipe-boots-of-travel"]
}, {
    "name": "Aether Lens",
    "price": 2275,
    "imageUrl": "https://www.dotabuff.com/assets/items/aether-lens-6fd02713ff2d3d2803f73eee90ab135037f3354415d689b8a415c07c3c57c55b.jpg",
    "description": "Passive: Aethereal Focus Increases targeted spell and item cast range by 250.",
    "statsObject": {"Mana": "300", "Mana Regeneration": "3.0"},
    "statsArray": ["Mana", "Mana Regeneration"],
    "buildsInto": ["octarine-core"],
    "buildsFrom": ["void-stone", "energy-booster", "recipe-aether-lens"]
}, {
    "name": "Quelling Blade",
    "price": 130,
    "imageUrl": "https://www.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg",
    "description": "Active: Chop Tree Destroy a target tree. Cast Range: 350",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["battle-fury"]
}, {
    "name": "Dust of Appearance",
    "price": 80,
    "imageUrl": "https://www.dotabuff.com/assets/items/dust-of-appearance-c7e7963c3b00c980be1c3dea290e89ee177a0d09003a86cf0cd1afb539503fdc.jpg",
    "description": "Use: RevealReveals and slows invisible heroes by -20% in a 1050 radius around the caster for 12 seconds.",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Eul's Scepter of Divinity",
    "price": 2725,
    "imageUrl": "https://www.dotabuff.com/assets/items/euls-scepter-of-divinity-a918c5d71bdf0c63e6a1d5406bb460d1f317ae6d4a4ffed2980530327fe54d58.jpg",
    "description": "Active: Cyclone Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can only be cast on enemy units or yourself.Enemy units take 50 magical damage upon landing.Range: 575Dispel Type: Basic Dispel",
    "statsObject": {"Intelligence": "10", "Mana Regeneration": "3.5", "Movement Speed": "20"},
    "statsArray": ["Intelligence", "Mana Regeneration", "Movement Speed"],
    "buildsInto": ["wind-waker"],
    "buildsFrom": ["staff-of-wizardry", "void-stone", "recipe-euls-scepter-of-divinity", "wind-lace"]
}, {
    "name": "Bottle",
    "price": 625,
    "imageUrl": "https://www.dotabuff.com/assets/items/bottle-1b12b16add53d2a78bf81d2f8c63ac2ca027cb6f0f658e6a1b77e41526281e83.jpg",
    "description": "Active: RegenerateConsumes a charge to restore 125 health and 75 mana over 2.5 seconds. If the hero is attacked by an enemy hero or Roshan, the effect is lost.The Bottle automatically refills at the fountain.Hold Control to use on an allied hero.Range: 350",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Boots of Speed",
    "price": 500,
    "imageUrl": "https://www.dotabuff.com/assets/items/boots-of-speed-ef8d597b932f47378a608266f08441f8a32f13cc6d41025e2fd6cc9433f556c6.jpg",
    "description": "Movement speed bonuses from multiple pairs of boots do not stack.",
    "statsObject": {"Movement Speed": "45"},
    "statsArray": ["Movement Speed"],
    "buildsInto": ["boots-of-travel", "phase-boots", "power-treads", "arcane-boots", "tranquil-boots"]
}, {
    "name": "Observer and Sentry Wards",
    "price": 75,
    "imageUrl": "https://www.dotabuff.com/assets/items/observer-and-sentry-wards-194f6030d56220803dd7de9e0002b17c61322b1d3819dc7828acf35f6a97784d.jpg",
    "description": "Use: Plant Plant the currently active ward.  Double-Click to switch the currently active ward.Range: 500",
    "statsObject": {},
    "statsArray": [],
    "buildsFrom": ["observer-ward", "sentry-ward"]
}, {
    "name": "Blade Mail",
    "price": 2225,
    "imageUrl": "https://www.dotabuff.com/assets/items/blade-mail-0091777d950077fa252249f45e1092e2ee81b0564258b8af20e1c5c5cdffefe5.jpg",
    "description": "Active: Damage ReturnFor 4.5 seconds, the damage returned from all sources is increased by 80%.",
    "statsObject": {"Damage": "28", "Armor": "6"},
    "statsArray": ["Damage", "Armor"],
    "buildsFrom": ["broadsword", "chainmail", "recipe-blade-mail"]
}, {
    "name": "Bracer",
    "price": 510,
    "imageUrl": "https://www.dotabuff.com/assets/items/bracer-b85e634c2297939e6d7644371e7e0f7488d3883d92d6aa2862f56dcd37e88b99.jpg",
    "statsObject": {"Strength": "5", "Agility": "2", "Intelligence": "2", "Damage": "3", "HP Regeneration": "0.75"},
    "statsArray": ["Strength", "Agility", "Intelligence", "Damage", "HP Regeneration"],
    "buildsFrom": ["gauntlets-of-strength", "circlet", "recipe-bracer"]
}, {
    "name": "Abyssal Blade",
    "price": 6625,
    "imageUrl": "https://www.dotabuff.com/assets/items/abyssal-blade-7e5adf631e435735bb318686075441eec7e7f8776e4ebe9f72ce751bbca74d85.jpg",
    "description": "Active: Overwhelm Blinks to and stuns a target enemy unit for 2.0 seconds. Pierces Spell Immunity.Range: 550",
    "statsObject": {"Damage": "25", "Health": "250", "HP Regeneration": "10.0", "Strength": "10"},
    "statsArray": ["Damage", "Health", "HP Regeneration", "Strength"],
    "buildsFrom": ["vanguard", "skull-basher", "recipe-abyssal-blade"]
}, {
    "name": "Battle Fury",
    "price": 4130,
    "imageUrl": "https://www.dotabuff.com/assets/items/battle-fury-203bd771b2dac1bba198ceacc7431c4b75ddf6a742fad58a913545cc18a9328f.jpg",
    "description": "Active: Chop Tree Destroy a target tree.Cast Range: 350",
    "statsObject": {"Damage": "55", "HP Regeneration": "7.5", "Mana Regeneration": "3.25"},
    "statsArray": ["Damage", "HP Regeneration", "Mana Regeneration"],
    "buildsFrom": ["broadsword", "claymore", "quelling-blade", "perseverance"]
}, {
    "name": "Desolator",
    "price": 3500,
    "imageUrl": "https://www.dotabuff.com/assets/items/desolator-25436b0c48d6752369b4fae9a9db3e70de24b4e68fbd513da6d93054706c29ca.jpg",
    "description": "Passive: Corruption Your attacks reduce the target's armor by -6 for 7.0 seconds.",
    "statsObject": {"Damage": "55"},
    "statsArray": ["Damage"],
    "buildsFrom": ["mithril-hammer", "mithril-hammer", "blight-stone"]
}, {
    "name": "Force Staff",
    "price": 2175,
    "imageUrl": "https://www.dotabuff.com/assets/items/force-staff-86049f475a640e3220f20f4d6ddae33cfb392011844306eaa514255d9dbd4a9c.jpg",
    "description": "Active: ForcePushes any target unit 600 units in the direction it is facing.Range: 550",
    "statsObject": {"Intelligence": "10", "HP Regeneration": "2.5"},
    "statsArray": ["Intelligence", "HP Regeneration"],
    "buildsInto": ["hurricane-pike"],
    "buildsFrom": ["staff-of-wizardry", "ring-of-regen", "recipe-force-staff"]
}, {
    "name": "Glimmer Cape",
    "price": 1950,
    "imageUrl": "https://www.dotabuff.com/assets/items/glimmer-cape-c89bedc9cf83db402422086f307d52c0bec17218e7a0b94186673d011c9cf98a.jpg",
    "description": "Active: Glimmer After a 0.6 second delay, grants invisibility and 45% magic resistance to you or a target allied unit for 5.0 seconds.Range: 550Can be cast while channelling.",
    "statsObject": {"Magic Resistance": "15%"},
    "statsArray": ["Magic Resistance"],
    "buildsFrom": ["cloak", "shadow-amulet", "recipe-glimmer-cape"]
}, {
    "name": "Manta Style",
    "price": 4600,
    "imageUrl": "https://www.dotabuff.com/assets/items/manta-style-23dd1f7dc982b93e8b7b90ec76fc776fd22d88b94403aecfc4017d37625eea96.jpg",
    "description": "Active: Mirror ImageCreates 2 images of your hero that last 20 seconds. Melee images deal 33% damage and take 350% damage, while Ranged images deal 28% and take 400% damage. Cooldown increased by 15.0 seconds on ranged heroes.Dispel Type: Basic Dispel",
    "statsObject": {
        "Strength": "10",
        "Agility": "26",
        "Intelligence": "10",
        "Attack Speed": "12",
        "Movement Speed": "8%"
    },
    "statsArray": ["Strength", "Agility", "Intelligence", "Attack Speed", "Movement Speed"],
    "buildsFrom": ["ultimate-orb", "recipe-manta-style", "yasha"]
}, {
    "name": "Clarity",
    "price": 50,
    "imageUrl": "https://www.dotabuff.com/assets/items/clarity-3a6c35754f27ea276dd595e73326438d4bebe229f648cfc75b6fc4ec4fc942eb.jpg",
    "description": "Use: Replenish Grants 6.0 mana regeneration to the target for 30 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Range: 250",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Maelstrom",
    "price": 2700,
    "imageUrl": "https://www.dotabuff.com/assets/items/maelstrom-324a4325fe41951a56d1a8b8aae642cbc68975a32bf7963e13fbc10685b097cb.jpg",
    "description": "Passive: Chain LightningGrants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 140 magical damage to each. Lightning proc pierces evasion.",
    "statsObject": {"Damage": "24"},
    "statsArray": ["Damage"],
    "buildsInto": ["mjollnir", "gleipnir"],
    "buildsFrom": ["javelin", "mithril-hammer"]
}, {
    "name": "Monkey King Bar",
    "price": 4975,
    "imageUrl": "https://www.dotabuff.com/assets/items/monkey-king-bar-cab629aaa7a1b3a7253044b66d88e793f7164340435dd14be8306e342ca007f6.jpg",
    "description": "Passive: PierceGrants each attack a 75% chance to pierce through evasion and deal 70 bonus magical damage.",
    "statsObject": {"Damage": "40", "Attack Speed": "35"},
    "statsArray": ["Damage", "Attack Speed"],
    "buildsFrom": ["javelin", "demon-edge", "recipe-monkey-king-bar", "blitz-knuckles"]
}, {
    "name": "Smoke of Deceit",
    "price": 50,
    "imageUrl": "https://www.dotabuff.com/assets/items/smoke-of-deceit-acf97a5e73ad7bad7893ae13647e823e52bdbc630ba3d0ef0ad91b161744f711.jpg",
    "description": "Use: Disguise Turns the caster and all allied player-controlled units in a 1200 radius invisible, and grants 15% bonus movement speed for 35.0 seconds. Attacking, or moving within 1025 range of an enemy hero or tower, will break the invisibility. Disguise grants invisibility that is immune to True Sight.",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Wind Lace",
    "price": 250,
    "imageUrl": "https://www.dotabuff.com/assets/items/wind-lace-c8d6ebda867c5e5a56c5721575da561d9b845eb2f67ef697f027231586c7b245.jpg",
    "description": "Bonuses from multiple Wind Laces do not stack.",
    "statsObject": {"Movement Speed": "20"},
    "statsArray": ["Movement Speed"],
    "buildsInto": ["euls-scepter-of-divinity", "drum-of-endurance", "tranquil-boots", "solar-crest"]
}, {
    "name": "Magic Stick",
    "price": 200,
    "imageUrl": "https://www.dotabuff.com/assets/items/magic-stick-c4e00e3b2c0ee68b6e5e5d6014ede8b83ef87531a56169b675965f19a03d4dd6.jpg",
    "description": "Active: Energy Charge Instantly restores 15 health and mana per charge stored. Max 10 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["magic-wand"]
}, {
    "name": "Sentry Ward",
    "price": 75,
    "imageUrl": "https://www.dotabuff.com/assets/items/sentry-ward-3fc416e0b1a171923416e7c09a44d4f53fa11ee09d8861f715ea84aceec62122.jpg",
    "description": "Use: Plant Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a 1000 radius.Lasts 8 minutes.Does not grant ground vision.Hold Control to give one Sentry Ward to an allied hero.Range: 500",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["observer-and-sentry-wards"]
}, {
    "name": "Hand of Midas",
    "price": 2200,
    "imageUrl": "https://www.dotabuff.com/assets/items/hand-of-midas-19054292782cddc8844f4972cbbadd296c4495b5a44598e596f897de92208068.jpg",
    "description": "Active: Transmute Kills a non-hero target for 160 gold and 2.1x experience.  Cannot be used on Ancient Creeps.Range: 600",
    "statsObject": {"Attack Speed": "40"},
    "statsArray": ["Attack Speed"],
    "buildsFrom": ["gloves-of-haste", "recipe-hand-of-midas"]
}, {
    "name": "Ghost Scepter",
    "price": 1500,
    "imageUrl": "https://www.dotabuff.com/assets/items/ghost-scepter-d4f437521cdc455ffb04e4a934764d410ce78c8e240b29ea574114fe9a582ddf.jpg",
    "description": "Active: Ghost Form You enter ghost form for 4.0 seconds, becoming immune to physical damage, but are unable to attack and -40% more vulnerable to magic damage.",
    "statsObject": {"All Attributes": "5"},
    "statsArray": ["All Attributes"],
    "buildsInto": ["ethereal-blade"]
}, {
    "name": "Orb of Corrosion",
    "price": 925,
    "imageUrl": "https://www.dotabuff.com/assets/items/orb-of-corrosion-857ec798e0978e81f23121a0a2286aba79153267944b8dfc35838e8eba33f58a.jpg",
    "description": "Passive: CorrosionDealing 3 damage per second, reducing armor by 3, and slowing movement by 13% if the equipped hero is melee, or by 4% if they are ranged.Lasts for 3.0 seconds.",
    "statsObject": {"Health": "150"},
    "statsArray": ["Health"],
    "buildsFrom": ["orb-of-venom", "blight-stone", "fluffy-hat", "recipe-orb-of-corrosion"]
}, {
    "name": "Soul Ring",
    "price": 740,
    "imageUrl": "https://www.dotabuff.com/assets/items/soul-ring-496d71334ad18f5fa7d67b7cba97c9f881fbd599b4462fe945679930ce9217ce.jpg",
    "description": "Active: Sacrifice Consume 170 health to temporarily gain 150 mana.  Lasts 10 seconds.If the mana gained cannot fit in your mana pool, it creates a buffer of mana that will be used before your mana pool.",
    "statsObject": {"Strength": "6", "Armor": "2.0"},
    "statsArray": ["Strength", "Armor"],
    "buildsFrom": ["ring-of-protection", "gauntlets-of-strength", "gauntlets-of-strength", "recipe-soul-ring"]
}, {
    "name": "Observer Ward",
    "price": 0,
    "imageUrl": "https://www.dotabuff.com/assets/items/observer-ward-83cf10251bdc481b64577b1a22f793f26d736cada9f91b45b2c5b033c1e4f116.jpg",
    "description": "Use: PlantPlants an Observer Ward, an invisible watcher that gives ground vision in a 1400 radius to your team. Lasts 6 minutes.Hold Control to give one Observer Ward to an allied hero.Range: 500",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["observer-and-sentry-wards"]
}, {
    "name": "Ogre Axe",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/ogre-axe-90957ea8daa3d1b8fd794206f14e8836254993409a0af7a400b45305ea2675e9.jpg",
    "statsObject": {"Strength": "10"},
    "statsArray": ["Strength"],
    "buildsInto": ["aghanims-scepter", "black-king-bar", "sange", "dragon-lance", "echo-sabre"]
}, {
    "name": "Daedalus",
    "price": 5150,
    "imageUrl": "https://www.dotabuff.com/assets/items/daedalus-6650c41f60ba1d9f15c8e37cc122e9de260d5c86e6c220aaf1c86f26ad9b79c7.jpg",
    "description": "Passive: Critical StrikeGrants each attack a 30% chance to deal 225% damage.",
    "statsObject": {"Damage": "88"},
    "statsArray": ["Damage"],
    "buildsFrom": ["demon-edge", "recipe-daedalus", "crystalys"]
}, {
    "name": "Skull Basher",
    "price": 2950,
    "imageUrl": "https://www.dotabuff.com/assets/items/skull-basher-d61da321754816905fde47972c8bfacccd244cc4ce4d5c99e125c06f201edfca.jpg",
    "description": "Passive: Bash Grants melee heroes a 25% chance on hit to stun the target for 1.5 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%.",
    "statsObject": {"Damage": "25", "Strength": "10"},
    "statsArray": ["Damage", "Strength"],
    "buildsInto": ["abyssal-blade"],
    "buildsFrom": ["mithril-hammer", "belt-of-strength", "recipe-skull-basher"]
}, {
    "name": "Sange and Yasha",
    "price": 4100,
    "imageUrl": "https://www.dotabuff.com/assets/items/sange-and-yasha-73058ad52402e43fded8b4e943e63bbdfed5b506f5431f7f9b7abfd294af1633.jpg",
    "statsObject": {
        "Strength": "16",
        "Agility": "16",
        "Status Resistance": "25%",
        "Attack Speed": "16",
        "Movement Speed": "10%",
        "Self HP Regen and Lifesteal Amp": "30%"
    },
    "statsArray": ["Strength", "Agility", "Status Resistance", "Attack Speed", "Movement Speed", "Self HP Regen and Lifesteal Amp"],
    "buildsFrom": ["sange", "yasha"]
}, {
    "name": "Eye of Skadi",
    "price": 5300,
    "imageUrl": "https://www.dotabuff.com/assets/items/eye-of-skadi-16fa80822bd539e590bcf2d9444c57d217c84ced7451169b8c006aeff55247c3.jpg",
    "description": "Passive: Cold Attack Attacks lower enemy movement and attack speed and reduces heals, health regeneration, lifesteal and spell lifesteal by 40% for 3.0 seconds. Slows enemy ranged units by -50% movement speed and by -50 attack speed. Slows enemy melee units by -25% movement speed and by -25 attack speed. ",
    "statsObject": {"All Attributes": "25", "Health": "200", "Mana": "200"},
    "statsArray": ["All Attributes", "Health", "Mana"],
    "buildsFrom": ["ultimate-orb", "ultimate-orb", "point-booster"]
}, {
    "name": "Iron Branch",
    "price": 50,
    "imageUrl": "https://www.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg",
    "description": "Use: Plant Tree Targets the ground to plant a happy little tree that lasts for 20 seconds.Range: 400",
    "statsObject": {"All Attributes": "1"},
    "statsArray": ["All Attributes"],
    "buildsInto": ["magic-wand"]
}, {
    "name": "Orchid Malevolence",
    "price": 3475,
    "imageUrl": "https://www.dotabuff.com/assets/items/orchid-malevolence-b83d0927509c27bde54e0209e732c6a57198637ffcee94a5b1681989d70a5bb8.jpg",
    "description": "Active: Soul BurnSilences the target unit for 5.0 seconds. At the end of the silence, 30.0% of the damage received while silenced is inflicted as bonus magical damage.Range: 900",
    "statsObject": {"Intelligence": "20", "Attack Speed": "25", "Damage": "30", "Mana Regeneration": "4.0"},
    "statsArray": ["Intelligence", "Attack Speed", "Damage", "Mana Regeneration"],
    "buildsInto": ["bloodthorn"],
    "buildsFrom": ["oblivion-staff", "oblivion-staff", "recipe-orchid-malevolence"]
}, {
    "name": "Assault Cuirass",
    "price": 5075,
    "imageUrl": "https://www.dotabuff.com/assets/items/assault-cuirass-9240b214591338ae654a504703df02ab6ddbaf6e0b3020c0bca7ddd2e3de467e.jpg",
    "description": "Passive: Assault Aura Grants 30 attack speed and 5 armor to nearby allied units and structures, and decreases nearby enemy unit and structure armor by -5.Radius: 1200",
    "statsObject": {"Attack Speed": "30", "Armor": "10"},
    "statsArray": ["Attack Speed", "Armor"],
    "buildsFrom": ["platemail", "hyperstone", "buckler", "recipe-assault-cuirass"]
}, {
    "name": "Linken's Sphere",
    "price": 4600,
    "imageUrl": "https://www.dotabuff.com/assets/items/linkens-sphere-f02a0f5e610d90ffe5e3502bd63b72457d1060792be23999ecd2c84d0d273d50.jpg",
    "description": "Passive: SpellblockBlocks most targeted spells once every 12.0 seconds.",
    "statsObject": {"All Attributes": "14", "HP Regeneration": "7.0", "Mana Regeneration": "5.0"},
    "statsArray": ["All Attributes", "HP Regeneration", "Mana Regeneration"],
    "buildsFrom": ["ultimate-orb", "perseverance", "recipe-linkens-sphere"]
}, {
    "name": "Heart of Tarrasque",
    "price": 4800,
    "imageUrl": "https://www.dotabuff.com/assets/items/heart-of-tarrasque-f2836d6711d1f833e6c242782c30a94260ff19857e7ae4e56a8ba047bebdd7e9.jpg",
    "statsObject": {"Strength": "45", "Health": "250", "Max Health Regen": "1.6%"},
    "statsArray": ["Strength", "Health", "Max Health Regen"],
    "buildsFrom": ["reaver", "vitality-booster", "recipe-heart-of-tarrasque"]
}, {
    "name": "Shadow Blade",
    "price": 3000,
    "imageUrl": "https://www.dotabuff.com/assets/items/shadow-blade-06b2b46994817bba626219cb623637c7496a1dad1328bc4c681a6950338e9bf8.jpg",
    "description": "Active: Shadow WalkMakes you invisible for 14.0 seconds, or until you attack or cast a spell.  While Shadow Walk is active, you move 20% faster and can move through units.  If attacking to end the invisibility, you gain 175 bonus physical damage on that attack.",
    "statsObject": {"Damage": "25", "Attack Speed": "35"},
    "statsArray": ["Damage", "Attack Speed"],
    "buildsInto": ["silver-edge"],
    "buildsFrom": ["broadsword", "shadow-amulet", "blitz-knuckles"]
}, {
    "name": "Spirit Vessel",
    "price": 2940,
    "imageUrl": "https://www.dotabuff.com/assets/items/spirit-vessel-edc712713cab24a109922e7dda6335a822b65315199e4a08e35cf56b7b35e325.jpg",
    "description": "Active: Soul Release When used against enemies, it reduces health by 4.0% of current health per second, and reduces HP regeneration, healing, lifesteal and spell lifesteal by 45%. Deals 35 damage per second. When used on allies, it provides 40 health regeneration per second. Lasts 8.0 seconds.  Gains charges every time an enemy hero dies within 1400 units.  Only the closest Spirit Vessel to the dying hero will gain a charge.Cast Range: 950",
    "statsObject": {"Health": "250", "Mana Regeneration": "1.75", "All Attributes": "2", "Armor": "2.0"},
    "statsArray": ["Health", "Mana Regeneration", "All Attributes", "Armor"],
    "buildsFrom": ["vitality-booster", "urn-of-shadows", "recipe-spirit-vessel"]
}, {
    "name": "Morbid Mask",
    "price": 900,
    "imageUrl": "https://www.dotabuff.com/assets/items/morbid-mask-4c4259f53f6e1db9b272c3e2fd421916a4553aabfc46b801f4844f29ec2f24d5.jpg",
    "description": "Passive: LifestealHeals the attacker for 15% of attack damage dealt.",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["vladmirs-offering", "satanic", "mask-of-madness"]
}, {
    "name": "Pipe of Insight",
    "price": 3475,
    "imageUrl": "https://www.dotabuff.com/assets/items/pipe-of-insight-d9956adace54ad2dc44c2ae87bfa21f106e64a230882612220a35d750f84c1f8.jpg",
    "description": "Active: BarrierGives a shield that blocks 400 magic damage to all nearby allies. Lasts 12 seconds.Radius: 1200",
    "statsObject": {"HP Regeneration": "8.5", "Magic Resistance": "30%"},
    "statsArray": ["HP Regeneration", "Magic Resistance"],
    "buildsFrom": ["recipe-pipe-of-insight", "headdress", "hood-of-defiance"]
}, {
    "name": "Enchanted Mango",
    "price": 70,
    "imageUrl": "https://www.dotabuff.com/assets/items/enchanted-mango-4e423e0504c1827f556fb1f76f58d5af2f515aaa9837d7815908c139bf1391e4.jpg",
    "description": "Use: Eat Mango Instantly restores 100 mana.Range: 400",
    "statsObject": {"HP Regeneration": "0.6"},
    "statsArray": ["HP Regeneration"]
}, {
    "name": "Rod of Atos",
    "price": 2750,
    "imageUrl": "https://www.dotabuff.com/assets/items/rod-of-atos-73837d8fb3d5c9dae0d95c7b72222874fbb8f5b371b624a049cbd1b890b1ed17.jpg",
    "description": "Active: CrippleRoots the target for 2.0 seconds.Range: 1100",
    "statsObject": {"Intelligence": "20", "Strength": "10", "Agility": "10"},
    "statsArray": ["Intelligence", "Strength", "Agility"],
    "buildsInto": ["gleipnir"],
    "buildsFrom": ["staff-of-wizardry", "recipe-rod-of-atos", "crown", "crown"]
}, {
    "name": "Healing Salve",
    "price": 110,
    "imageUrl": "https://www.dotabuff.com/assets/items/healing-salve-4ea86318196b6fae92ffed8079638459a1dc5f2916b30e30e2a0ce958fbf974d.jpg",
    "description": "Use: Salve Grants 40 health regeneration to the target for 10 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Range: 250",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Echo Sabre",
    "price": 2500,
    "imageUrl": "https://www.dotabuff.com/assets/items/echo-sabre-fdd0aae647a58c856040bfd0adc482890035ad4a5a8961b6d16228d82a38c0a6.jpg",
    "description": "Passive: Echo Strike Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 0.8 seconds on each strike.",
    "statsObject": {
        "Damage": "15",
        "Strength": "12",
        "Intelligence": "10",
        "Attack Speed": "10",
        "Mana Regeneration": "2.25"
    },
    "statsArray": ["Damage", "Strength", "Intelligence", "Attack Speed", "Mana Regeneration"],
    "buildsFrom": ["ogre-axe", "oblivion-staff"]
}, {
    "name": "Urn of Shadows",
    "price": 840,
    "imageUrl": "https://www.dotabuff.com/assets/items/urn-of-shadows-fb337b5d3389e3676f60ca7618a7dd90bd8f880ee73349a6b9db7d62db3387e3.jpg",
    "description": "Active: Soul Release Provides 30 health regeneration when cast on allies, and deals 25 damage per second when cast on enemies. Lasts 8.0 seconds.  Gains charges every time an enemy hero dies within 1400 units.  Only the closest Urn to the dying hero will gain a charge.Cast Range: 950",
    "statsObject": {"Mana Regeneration": "1.5", "All Attributes": "2", "Armor": "2.0"},
    "statsArray": ["Mana Regeneration", "All Attributes", "Armor"],
    "buildsInto": ["spirit-vessel"],
    "buildsFrom": ["ring-of-protection", "circlet", "sages-mask", "recipe-urn-of-shadows"]
}, {
    "name": "Scythe of Vyse",
    "price": 5675,
    "imageUrl": "https://www.dotabuff.com/assets/items/scythe-of-vyse-315f3fc3e31aaf7d6adc764f60cdbaf865f4c531cd033013f6e1a5c432a8f42a.jpg",
    "description": "Active: HexTurns a target unit into a harmless critter for 3.5 seconds. The target has a base movement speed of 140.0 and will be silenced, muted, and disarmed.Instantly destroys illusions.Range: 800",
    "statsObject": {"Strength": "10", "Agility": "10", "Intelligence": "35", "Mana Regeneration": "9.0"},
    "statsArray": ["Strength", "Agility", "Intelligence", "Mana Regeneration"],
    "buildsFrom": ["ultimate-orb", "void-stone", "mystic-staff"]
}, {
    "name": "Diffusal Blade",
    "price": 3150,
    "imageUrl": "https://www.dotabuff.com/assets/items/diffusal-blade-dc851dd1f50c01f8994cf9d3a3677f9a26c0b7c08a9d07b40cfe328b4642688b.jpg",
    "description": "Active: Inhibit Targets an enemy, slowing it for 4.0 seconds.Range: 600",
    "statsObject": {"Agility": "20", "Intelligence": "10"},
    "statsArray": ["Agility", "Intelligence"],
    "buildsFrom": ["robe-of-the-magi", "blade-of-alacrity", "blade-of-alacrity", "recipe-diffusal-blade"]
}, {
    "name": "Guardian Greaves",
    "price": 5250,
    "imageUrl": "https://www.dotabuff.com/assets/items/guardian-greaves-9074138bd6e55fcba6d627022300ae1d497d26e860b8609f318606bb2623b530.jpg",
    "description": "Active: MendRestores 300 health and 200 mana to nearby allies, and removes most negative effects from the caster.Radius: 1200Dispel Type: Basic Dispel",
    "statsObject": {"Movement Speed": "50", "Mana": "250", "Armor": "4"},
    "statsArray": ["Movement Speed", "Mana", "Armor"],
    "buildsFrom": ["mekansm", "buckler", "arcane-boots", "recipe-guardian-greaves"]
}, {
    "name": "Orb of Venom",
    "price": 275,
    "imageUrl": "https://www.dotabuff.com/assets/items/orb-of-venom-eb625729f42952d92cff77fad6a6e046ca78e7b7f9fb93f3f3394c3e74e502fc.jpg",
    "description": "Passive: Poison AttackPoisons the target, dealing 2.0 magical damage per second and slowing movement by -13% if the equipped hero is melee, or by -4% if they are ranged. Lasts for 2.0 seconds.",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["orb-of-corrosion"]
}, {
    "name": "Staff of Wizardry",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/staff-of-wizardry-fcf0b880c4db89325ca2270886e3656a26798b2c6e0cac3fe2ded2752146a79c.jpg",
    "statsObject": {"Intelligence": "10"},
    "statsArray": ["Intelligence"],
    "buildsInto": ["euls-scepter-of-divinity", "force-staff", "dagon", "aghanims-scepter", "rod-of-atos", "kaya"]
}, {
    "name": "Mjollnir",
    "price": 5600,
    "imageUrl": "https://www.dotabuff.com/assets/items/mjollnir-01dfce8ac9e95f8971aa57a58361e85a106da5e2f3dac5b00ecc3e59747c897d.jpg",
    "description": "Active: Static ChargePlaces a charged shield on a target unit for 15.0 seconds which has a 20% chance to release a 200 magical damage shocking bolt at a nearby attacker and 4 additional enemies.Range: 800",
    "statsObject": {"Damage": "24", "Attack Speed": "65"},
    "statsArray": ["Damage", "Attack Speed"],
    "buildsFrom": ["hyperstone", "recipe-mjollnir", "maelstrom"]
}, {
    "name": "Octarine Core",
    "price": 5475,
    "imageUrl": "https://www.dotabuff.com/assets/items/octarine-core-50d9609e12bb70a8399fcae3c50f61c4b74aaa22d8e1f3e0aeaab93de352e2d6.jpg",
    "description": "Passive: Cooldown ReductionReduces the cooldown time of all spells and items by 25%.",
    "statsObject": {"Cast Range": "250", "Health": "425", "Mana": "725", "Mana Regeneration": "3.0"},
    "statsArray": ["Cast Range", "Health", "Mana", "Mana Regeneration"],
    "buildsFrom": ["soul-booster", "aether-lens"]
}, {
    "name": "Radiance",
    "price": 5150,
    "imageUrl": "https://www.dotabuff.com/assets/items/radiance-d474b0b33aaa6079a050c6e8bd22791dd2d6e2bd0968ce31c7818cf3328d0231.jpg",
    "description": "Toggle: Burn When active, scorches enemies for 60 magical damage per second, and causes them to miss 17% of their attacks. Illusions deal 35 magical damage per second.Radius: 700",
    "statsObject": {"Damage": "60"},
    "statsArray": ["Damage"],
    "buildsFrom": ["sacred-relic", "recipe-radiance"]
}, {
    "name": "Hurricane Pike",
    "price": 4525,
    "imageUrl": "https://www.dotabuff.com/assets/items/hurricane-pike-3af50aa5181d94db649e65729a3db1e7b43d8db111964a6b7012d91f468fdb28.jpg",
    "description": "Active: Hurricane Thrust Pushes you and target enemy 450 units away from each other, and for 5.0 seconds, allows you to make 4 attacks against the target without range restrictions and with +100 attack speed.Works like Force Staff when used on self or allies.Allied Range: 550Enemy Range: 400",
    "statsObject": {"Intelligence": "13", "HP Regeneration": "2.5", "Agility": "20", "Strength": "15"},
    "statsArray": ["Intelligence", "HP Regeneration", "Agility", "Strength"],
    "buildsFrom": ["force-staff", "dragon-lance", "recipe-hurricane-pike"]
}, {
    "name": "Mask of Madness",
    "price": 1775,
    "imageUrl": "https://www.dotabuff.com/assets/items/mask-of-madness-9f59e9e1136545770c30d43a6916f207adb48ea2aa2616403193f106ad7e1142.jpg",
    "description": "Active: BerserkGives 110 attack speed and 30 movement speed, but reduces your armor by 8 and silences you.  Lasts 6.0 seconds.",
    "statsObject": {"Damage": "10", "Attack Speed": "10"},
    "statsArray": ["Damage", "Attack Speed"],
    "buildsFrom": ["quarterstaff", "morbid-mask"]
}, {
    "name": "Butterfly",
    "price": 5075,
    "imageUrl": "https://www.dotabuff.com/assets/items/butterfly-3070714854aa75101fb88872524456b5d8b723f163207b7d1ae51092017f9068.jpg",
    "statsObject": {"Agility": "30", "Evasion": "35%", "Attack Speed": "30", "Damage": "25"},
    "statsArray": ["Agility", "Evasion", "Attack Speed", "Damage"],
    "buildsFrom": ["quarterstaff", "talisman-of-evasion", "eaglesong"]
}, {
    "name": "Lotus Orb",
    "price": 3950,
    "imageUrl": "https://www.dotabuff.com/assets/items/lotus-orb-eaf20c3f924ffc8d0949c4c6f08053b3acfcde2a409dd622306e1ef04a7bc957.jpg",
    "description": "Active: Echo ShellApplies a shield to the target unit for 6.0 seconds which re-casts most targeted spells back to their caster.The shielded unit will still take damage from the spell. Range: 900Dispel Type: Basic Dispel",
    "statsObject": {"Armor": "10", "HP Regeneration": "6.5", "Mana Regeneration": "4.0", "Mana": "250"},
    "statsArray": ["Armor", "HP Regeneration", "Mana Regeneration", "Mana"],
    "buildsFrom": ["platemail", "energy-booster", "perseverance"]
}, {
    "name": "Aeon Disk",
    "price": 3100,
    "imageUrl": "https://www.dotabuff.com/assets/items/aeon-disk-dd8d4b3d051396d3b789ca7296dda6b2d7ed9fd6f65bc66e9c6dfb0d4e405755.jpg",
    "description": "Passive: Combo Breaker When you take damage and your health falls below 70%, a strong dispel is applied and you gain a 2.5 second buff that provides +75% Status Resistance and causes all damage you deal and are dealt to be reduced to zero. Only triggers on player based damage.",
    "statsObject": {"Health": "300", "Mana": "300"},
    "statsArray": ["Health", "Mana"],
    "buildsFrom": ["energy-booster", "vitality-booster", "recipe-aeon-disk"]
}, {
    "name": "Silver Edge",
    "price": 5600,
    "imageUrl": "https://www.dotabuff.com/assets/items/silver-edge-60951533ab869a2cf4018376aa47e5a4419ad6cd53c3d120e092ec77b950222b.jpg",
    "description": "Active: Shadow WalkMakes you invisible for 14.0 seconds, or until you attack or cast a spell.  While invisible, you move 25% faster and can move through units.  Attacking to end the invisibility will deal 175 bonus physical damage to the target, and disable their passive abilities for 4.0 seconds.",
    "statsObject": {"Damage": "40", "Attack Speed": "45", "Intelligence": "10", "Mana Regeneration": "3.0"},
    "statsArray": ["Damage", "Attack Speed", "Intelligence", "Mana Regeneration"],
    "buildsFrom": ["oblivion-staff", "shadow-blade", "recipe-silver-edge"]
}, {
    "name": "Ethereal Blade",
    "price": 4300,
    "imageUrl": "https://www.dotabuff.com/assets/items/ethereal-blade-d70b20b6ded5b2dabdae9fb61f44d3a0ea22dd81eb4bcd792e442f2b35b5ae47.jpg",
    "description": "Active: Ether BlastConverts the target unit to ethereal form, rendering them immune to physical damage, but unable to attack and -40% more vulnerable to magic damage.  Lasts for 4.0 seconds on allies and 4.0 seconds on enemies.  Enemy targets are also slowed by -80%, and take 1.5x your primary attribute + 125 as magical damage.Range: 800",
    "statsObject": {"Agility": "40", "Strength": "10", "Intelligence": "10"},
    "statsArray": ["Agility", "Strength", "Intelligence"],
    "buildsFrom": ["ghost-scepter", "eaglesong"]
}, {
    "name": "Heaven's Halberd",
    "price": 3650,
    "imageUrl": "https://www.dotabuff.com/assets/items/heavens-halberd-a952b98b9cd926388cffad2049730a3682b84c87402f5116f33bb9bcbe0197da.jpg",
    "description": "Active: DisarmPrevents a target from attacking for 3.0 seconds on melee targets, and 5.0 seconds on ranged targets.Range: 600",
    "statsObject": {
        "Evasion": "20%",
        "Strength": "20",
        "Status Resistance": "16%",
        "Self HP Regen and Lifesteal Amp": "24%"
    },
    "statsArray": ["Evasion", "Strength", "Status Resistance", "Self HP Regen and Lifesteal Amp"],
    "buildsFrom": ["talisman-of-evasion", "sange", "recipe-heavens-halberd"]
}, {
    "name": "Mithril Hammer",
    "price": 1600,
    "imageUrl": "https://www.dotabuff.com/assets/items/mithril-hammer-287275ad714f34a963586301627530428ad85a592d6e8e23057a7a0c452fd421.jpg",
    "statsObject": {"Damage": "24"},
    "statsArray": ["Damage"],
    "buildsInto": ["black-king-bar", "skull-basher", "maelstrom", "desolator"]
}, {
    "name": "Tango",
    "price": 90,
    "imageUrl": "https://www.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg",
    "description": "Use: Devour Consumes a target tree to gain 7.0 health regeneration for 16.0 seconds. Consuming an Ironwood Tree doubles the heal amount.Comes with 3 charges.  Can be used on an allied hero to give them one Tango.Tree Range: 165",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Meteor Hammer",
    "price": 2350,
    "imageUrl": "https://www.dotabuff.com/assets/items/meteor-hammer-f8729d5bdf7840508782d31035fd43014510a5ead137e3aa2c3e88cdc90896f3.jpg",
    "description": "Active: Meteor Hammer CHANNELED - After a successful channel, summons a meteor that strikes a 315 AoE, stunning enemies for 1.75 seconds and dealing impact damage. Continues to deal damage over time to enemies units and buildings for 6 seconds.Building Impact Damage: 75 Building Over Time Damage: 50 Non-Building Impact Damage: 150 Non-Building Over Time Damage: 90 Channel Duration: 2.5 seconds.Landing Time: 0.5 seconds.",
    "statsObject": {"All Attributes": "8", "HP Regeneration": "6.5", "Mana Regeneration": "2.5"},
    "statsArray": ["All Attributes", "HP Regeneration", "Mana Regeneration"],
    "buildsFrom": ["perseverance", "recipe-meteor-hammer", "crown"]
}, {
    "name": "Point Booster",
    "price": 1200,
    "imageUrl": "https://www.dotabuff.com/assets/items/point-booster-6bddbe59ef7769109beebd8208444fb5191a1ee599e13a84d8e4afc955281efc.jpg",
    "statsObject": {"Mana": "175", "Health": "175"},
    "statsArray": ["Mana", "Health"],
    "buildsInto": ["aghanims-scepter", "soul-booster", "eye-of-skadi"]
}, {
    "name": "Crystalys",
    "price": 1950,
    "imageUrl": "https://www.dotabuff.com/assets/items/crystalys-68293d31b61a622dd57456c1939a7cde7783f7cae37aeebcd8168616b0bf3eaa.jpg",
    "description": "Passive: Critical StrikeGrants each attack a 30% chance to deal 160% damage.",
    "statsObject": {"Damage": "32"},
    "statsArray": ["Damage"],
    "buildsInto": ["daedalus"],
    "buildsFrom": ["blades-of-attack", "broadsword", "recipe-crystalys"]
}, {
    "name": "Gleipnir",
    "price": 6150,
    "imageUrl": "https://www.dotabuff.com/assets/items/gleipnir-1631d35f5afaec4d5fb541b6545f7e5b30952e8e0f2adfda2c4d3993dfe66c98.jpg",
    "description": "Active: Eternal ChainsRoots all enemies in a target 450 radius for 2.0 seconds and deals 220 damage.Range: 1100 ",
    "statsObject": {"Damage": "30", "Intelligence": "20", "Strength": "12", "Agility": "12"},
    "statsArray": ["Damage", "Intelligence", "Strength", "Agility"],
    "buildsFrom": ["maelstrom", "rod-of-atos", "recipe-gleipnir"]
}, {
    "name": "Dragon Lance",
    "price": 1900,
    "imageUrl": "https://www.dotabuff.com/assets/items/dragon-lance-3b24336e99e60f4e8471dc943bf967e6e17f6f5c5f73267cb27496e33252b1c9.jpg",
    "description": "Passive: Dragon's Reach Increases attack range of ranged heroes by 140.",
    "statsObject": {"Agility": "14", "Strength": "12"},
    "statsArray": ["Agility", "Strength"],
    "buildsInto": ["hurricane-pike"],
    "buildsFrom": ["band-of-elvenskin", "band-of-elvenskin", "ogre-axe"]
}, {
    "name": "Satanic",
    "price": 5050,
    "imageUrl": "https://www.dotabuff.com/assets/items/satanic-743fcc2064c4d3273c5e4821959110a9386624a5d50726410286011a902cc8a8.jpg",
    "description": "Active: Unholy RageIncreases Lifesteal percentage to 200% for 6.0 seconds. ",
    "statsObject": {"Strength": "25", "Damage": "55"},
    "statsArray": ["Strength", "Damage"],
    "buildsFrom": ["claymore", "morbid-mask", "reaver"]
}, {
    "name": "Blight Stone",
    "price": 300,
    "imageUrl": "https://www.dotabuff.com/assets/items/blight-stone-83b0cc76d95e60e3789aed5d228da91511cd95f1d46f51d37f9793b91248460d.jpg",
    "description": "Passive: Lesser Corruption Your attacks reduce the target's armor by -2 for 8.0 seconds.",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["desolator", "medallion-of-courage", "orb-of-corrosion"]
}, {
    "name": "Vanguard",
    "price": 1925,
    "imageUrl": "https://www.dotabuff.com/assets/items/vanguard-cac7be5116f8cefcea81f5662e511f61b07174cce51c911348c5d83c38c93ede.jpg",
    "description": "Passive: Damage Block Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged.",
    "statsObject": {"Health": "250", "HP Regeneration": "7.0"},
    "statsArray": ["Health", "HP Regeneration"],
    "buildsInto": ["abyssal-blade", "crimson-guard"],
    "buildsFrom": ["ring-of-health", "vitality-booster"]
}, {
    "name": "Witch Blade",
    "price": 2600,
    "imageUrl": "https://www.dotabuff.com/assets/items/witch-blade-5ff8609bd0c0e69e8d45e884dfd0414e929127ca358d4cfee3d7124d5eac5aab.jpg",
    "description": "Passive: Witch BladeCauses your next attack to apply a poison for 3.0 seconds, slowing by 25% and dealing 1.0x your intelligence as damage every second.",
    "statsObject": {"Attack Speed": "35", "Intelligence": "12", "Armor": "6", "Projectile Speed": "300"},
    "statsArray": ["Attack Speed", "Intelligence", "Armor", "Projectile Speed"],
    "buildsFrom": ["chainmail", "robe-of-the-magi", "blitz-knuckles", "recipe-witch-blade"]
}, {
    "name": "Shiva's Guard",
    "price": 4850,
    "imageUrl": "https://www.dotabuff.com/assets/items/shivas-guard-c5ca9a34428ba32ea0600cfdf9db58c92151629057f3a6ccce6016a27f7d6005.jpg",
    "description": "Active: Arctic Blast Emits a freezing wave that deals 200 magical damage to enemies and slows their movement by -40% for 4.0 seconds.Radius: 900",
    "statsObject": {"Intelligence": "30", "Armor": "15"},
    "statsArray": ["Intelligence", "Armor"],
    "buildsFrom": ["platemail", "mystic-staff", "recipe-shivas-guard"]
}, {
    "name": "Ring of Basilius",
    "price": 425,
    "imageUrl": "https://www.dotabuff.com/assets/items/ring-of-basilius-73a0661f20b91901a86b8ae4eec2d9c71152fab49d7e866d0ec50a6ea993c825.jpg",
    "description": "Passive: Basilius AuraGrants 1.4 mana regeneration to allies.  Radius: 1200",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["vladmirs-offering", "veil-of-discord"],
    "buildsFrom": ["sages-mask", "recipe-ring-of-basilius"]
}, {
    "name": "Eternal Shroud",
    "price": 3300,
    "imageUrl": "https://www.dotabuff.com/assets/items/eternal-shroud-9240886319493dbadb088bec46e5f0447dd8391fd275a5fd15f28a8150806424.jpg",
    "description": "Active: Shroud Creates a spell shield that absorbs up to 400 magical damage, converting damage taken into mana.  Lasts 12 seconds.",
    "statsObject": {
        "Magic Resistance": "20%",
        "HP Regeneration": "8.5",
        "Spell Lifesteal (Hero)": "20.0%",
        "Spell Lifesteal (Creep)": "4.0%"
    },
    "statsArray": ["Magic Resistance", "HP Regeneration", "Spell Lifesteal (Hero)", "Spell Lifesteal (Creep)"],
    "buildsFrom": ["hood-of-defiance", "voodoo-mask", "recipe-eternal-shroud"]
}, {
    "name": "Kaya",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/kaya-ecb3cde15d139eddb842c9ca5b6504372292253de74f1791d55fa6ccc3a5504d.jpg",
    "statsObject": {
        "Intelligence": "16",
        "Spell Amplification": "8%",
        "Mana Regen Amplification": "24%",
        "Spell Lifesteal Amplification": "24%"
    },
    "statsArray": ["Intelligence", "Spell Amplification", "Mana Regen Amplification", "Spell Lifesteal Amplification"],
    "buildsInto": ["bloodstone", "kaya-and-sange", "yasha-and-kaya", "trident"],
    "buildsFrom": ["robe-of-the-magi", "staff-of-wizardry", "recipe-kaya"]
}, {
    "name": "Bloodstone",
    "price": 5950,
    "imageUrl": "https://www.dotabuff.com/assets/items/bloodstone-f534ab7167b0f2d898e2f6405a053587fc9e8d344ec6c0f67e9d7f3ee137b997.jpg",
    "description": "Active: Bloodpact Converts 30% of your max mana to health regeneration over 2.0 seconds.",
    "statsObject": {
        "Health": "425",
        "Mana": "425",
        "Intelligence": "16",
        "Mana Regen Amplification": "100%",
        "Spell Amplification": "8%",
        "Spell Lifesteal Amplification": "30%",
        "Spell Lifesteal (Hero)": "15.0%",
        "Spell Lifesteal (Creep)": "3.0%"
    },
    "statsArray": ["Health", "Mana", "Intelligence", "Mana Regen Amplification", "Spell Amplification", "Spell Lifesteal Amplification", "Spell Lifesteal (Hero)", "Spell Lifesteal (Creep)"],
    "buildsFrom": ["soul-booster", "kaya", "voodoo-mask"]
}, {
    "name": "Hood of Defiance",
    "price": 1500,
    "imageUrl": "https://www.dotabuff.com/assets/items/hood-of-defiance-3a814870456588b26e5b9a964aec1303aea058968de986dc4220c3a2d4b29265.jpg",
    "description": "Active: Barrier Creates a spell shield that absorbs up to 325 magical damage.  Lasts 12 seconds.",
    "statsObject": {"HP Regeneration": "8.5", "Magic Resistance": "20%"},
    "statsArray": ["HP Regeneration", "Magic Resistance"],
    "buildsInto": ["pipe-of-insight", "eternal-shroud"],
    "buildsFrom": ["ring-of-regen", "cloak", "ring-of-health"]
}, {
    "name": "Refresher Orb",
    "price": 5000,
    "imageUrl": "https://www.dotabuff.com/assets/items/refresher-orb-0a1b1c68e6f6226054633c30ee221d8020800a6800089013781d517343061c9e.jpg",
    "description": "Active: Reset CooldownsResets the cooldowns of all your items and abilities.",
    "statsObject": {"HP Regeneration": "13", "Mana Regeneration": "12.0"},
    "statsArray": ["HP Regeneration", "Mana Regeneration"],
    "buildsFrom": ["perseverance", "perseverance", "recipe-refresher-orb"]
}, {
    "name": "Crimson Guard",
    "price": 3800,
    "imageUrl": "https://www.dotabuff.com/assets/items/crimson-guard-0f88ccd8ebd8fec45d2d02b723fcd294702a6588c13e8d5021d0429eb8140a66.jpg",
    "description": "Active: Guard For 12 seconds, grant nearby allied heroes and buildings a 100% chance to block 70 damage from each incoming attack.Units may only be affected by Guard once every 40.0 seconds.Radius: 1200",
    "statsObject": {"Health": "250", "HP Regeneration": "12.0", "Armor": "6.0"},
    "statsArray": ["Health", "HP Regeneration", "Armor"],
    "buildsFrom": ["helm-of-iron-will", "vanguard", "recipe-crimson-guard"]
}, {
    "name": "Bloodthorn",
    "price": 6475,
    "imageUrl": "https://www.dotabuff.com/assets/items/bloodthorn-33eeaa9b1d0254392cd196594a0a4069df692defa0453e17f44349e712bae909.jpg",
    "description": "Active: Soul Rend Silences a target for 5.0 seconds. At the end of the silence, an additional 30.0% of all damage taken during the silence will be dealt to the target as magical damage.All attacks on the silenced target will have True Strike and 100.0% chance to crit for 130.0% damage.Range: 900",
    "statsObject": {"Intelligence": "25", "Attack Speed": "90", "Damage": "30", "Mana Regeneration": "5.5"},
    "statsArray": ["Intelligence", "Attack Speed", "Damage", "Mana Regeneration"],
    "buildsFrom": ["hyperstone", "orchid-malevolence", "recipe-bloodthorn"]
}, {
    "name": "Armlet of Mordiggian",
    "price": 2475,
    "imageUrl": "https://www.dotabuff.com/assets/items/armlet-of-mordiggian-7d4331fc6f6e76dc526e50bbb7546ea874cfd375d2f05039b36d402c6514fe93.jpg",
    "description": "Toggle: Unholy StrengthWhen active, Unholy Strength grants +35 damage, +25 strength and +4 armor, but drains 50 health per second. You cannot die from the health drain when Unholy Strength is activated, nor from the strength loss when Unholy Strength is deactivated.",
    "statsObject": {"Damage": "15", "Attack Speed": "25", "Armor": "5", "HP Regeneration": "5"},
    "statsArray": ["Damage", "Attack Speed", "Armor", "HP Regeneration"],
    "buildsFrom": ["blades-of-attack", "helm-of-iron-will", "gloves-of-haste", "recipe-armlet-of-mordiggian"]
}, {
    "name": "Vladmir's Offering",
    "price": 2750,
    "imageUrl": "https://www.dotabuff.com/assets/items/vladmirs-offering-ddea35b0dbd908f33c5348e542d2a2cd2d66792d256f2473c6145724f4ac5dfa.jpg",
    "description": "Passive: Vladmir's AuraGrants 15% lifesteal, 18% bonus damage, 1.4 mana regeneration, and 3.0 armor to nearby allies. Radius: 1200",
    "statsObject": {},
    "statsArray": [],
    "buildsFrom": ["blades-of-attack", "morbid-mask", "recipe-vladmirs-offering", "buckler", "ring-of-basilius"]
}, {
    "name": "Circlet",
    "price": 155,
    "imageUrl": "https://www.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg",
    "statsObject": {"All Attributes": "2"},
    "statsArray": ["All Attributes"],
    "buildsInto": ["bracer", "wraith-band", "null-talisman", "urn-of-shadows"]
}, {
    "name": "Arcane Blink",
    "price": 6800,
    "imageUrl": "https://www.dotabuff.com/assets/items/arcane-blink-4883d729fdcfdd0763b8d26e0dd57a3769022a8a7fdd7b1b1f283bb4060de0a4.jpg",
    "description": "Active: Arcane Blink Teleport to a target point up to 1200 units away.After teleportation, you gain 25% Ability Cooldown Reduction and 50% Cast Point reduction for 6.0 seconds. Arcane Blink cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.",
    "statsObject": {"Intelligence": "25"},
    "statsArray": ["Intelligence"],
    "buildsFrom": ["blink-dagger", "mystic-staff", "recipe-arcane-blink"]
}, {
    "name": "Platemail",
    "price": 1400,
    "imageUrl": "https://www.dotabuff.com/assets/items/platemail-8838444e621fd6ed8f700d8b5c402ee1d1305d7b81573c464250e3fff3acc188.jpg",
    "statsObject": {"Armor": "10"},
    "statsArray": ["Armor"],
    "buildsInto": ["assault-cuirass", "shivas-guard", "lotus-orb"]
}, {
    "name": "Ultimate Orb",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/ultimate-orb-853c3ef97aca83c46ca91a3697df8d76975ea542e94f8248d7d6dfabace95f5c.jpg",
    "statsObject": {"All Attributes": "10"},
    "statsArray": ["All Attributes"],
    "buildsInto": ["scythe-of-vyse", "linkens-sphere", "manta-style", "eye-of-skadi", "solar-crest", "helm-of-the-dominator-2"]
}, {
    "name": "Yasha",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/yasha-c316c68a618d4959e34a821f2e2007263b5f0d0d2dfed29bbc4b540d31622187.jpg",
    "statsObject": {"Agility": "16", "Attack Speed": "12", "Movement Speed": "8%"},
    "statsArray": ["Agility", "Attack Speed", "Movement Speed"],
    "buildsInto": ["manta-style", "sange-and-yasha", "yasha-and-kaya", "trident"],
    "buildsFrom": ["band-of-elvenskin", "blade-of-alacrity", "recipe-yasha"]
}, {
    "name": "Ring of Regen",
    "price": 175,
    "imageUrl": "https://www.dotabuff.com/assets/items/ring-of-regen-9bb1625482597a8fa841983df494fe0eb494e9cba181a46f8baa4c2a807049fd.jpg",
    "statsObject": {"HP Regeneration": "1.25"},
    "statsArray": ["HP Regeneration"],
    "buildsInto": ["headdress", "force-staff", "hood-of-defiance", "tranquil-boots"]
}, {
    "name": "Falcon Blade",
    "price": 1100,
    "imageUrl": "https://www.dotabuff.com/assets/items/falcon-blade-8b808327f39f030cffa2fe9f21b82b3e237934e0e987e5728af9687a7a1331a5.jpg",
    "statsObject": {"Health": "175", "Mana Regeneration": "1.8", "Damage": "10"},
    "statsArray": ["Health", "Mana Regeneration", "Damage"],
    "buildsFrom": ["blades-of-attack", "sages-mask", "fluffy-hat", "recipe-falcon-blade"]
}, {
    "name": "Veil of Discord",
    "price": 1525,
    "imageUrl": "https://www.dotabuff.com/assets/items/veil-of-discord-d4c01d20607b62bbe04fe81544392e44398791284dc3863256a33fd2cc4b8710.jpg",
    "description": "Active: Magic Weakness Cast a 600 radius blast that causes enemy heroes to take 18% increased damage from spells.Range: 1000Duration: 16.0 seconds. ",
    "statsObject": {"All Attributes": "4"},
    "statsArray": ["All Attributes"],
    "buildsFrom": ["ring-of-basilius", "recipe-veil-of-discord", "crown"]
}, {
    "name": "Gem of True Sight",
    "price": 900,
    "imageUrl": "https://www.dotabuff.com/assets/items/gem-of-true-sight-46dcb7eea84104b702af971d4e548f6830e5db26d75ff93a99b3ee990c24b711.jpg",
    "description": "Passive: True Sight Grants the ability to see invisible units and wards to any allied vision within 900 range of its carrier. ",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Mekansm",
    "price": 1875,
    "imageUrl": "https://www.dotabuff.com/assets/items/mekansm-10e3fcf254783a98e33cfbb78833fded0f0ae35d2124e06c19df63b432c2614c.jpg",
    "description": "Active: RestoreHeals 275 health to allied units in a 1200 radius.",
    "statsObject": {"Armor": "4"},
    "statsArray": ["Armor"],
    "buildsInto": ["guardian-greaves"],
    "buildsFrom": ["chainmail", "recipe-mekansm", "headdress"]
}, {
    "name": "Aegis of the Immortal",
    "price": 0,
    "imageUrl": "https://www.dotabuff.com/assets/items/aegis-of-the-immortal-3e01a97e2ac07905244a48416186e79649b244a7acebebab71475c519008f918.jpg",
    "description": "Passive: Reincarnation Brings you to life with full health and mana 5.0 seconds after you die, at the location where you died. Reincarnation must be used within 5 minutes or Aegis of the Immortal disappears. If it expires, it will heal you over 5 seconds (dispels on damage).",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Blade of Alacrity",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/blade-of-alacrity-ea875997d61853ff0222dd65e8cf89c972c13937c3e363739ccc7cae620d6024.jpg",
    "statsObject": {"Agility": "10"},
    "statsArray": ["Agility"],
    "buildsInto": ["aghanims-scepter", "yasha", "diffusal-blade", "mage-slayer"]
}, {
    "name": "Perseverance",
    "price": 1650,
    "imageUrl": "https://www.dotabuff.com/assets/items/perseverance-41e0d14cf8450372c71324f822c8e777c82d6a2998e624851c6ab701a8981197.jpg",
    "statsObject": {"HP Regeneration": "6.5", "Mana Regeneration": "2.25"},
    "statsArray": ["HP Regeneration", "Mana Regeneration"],
    "buildsInto": ["refresher-orb", "linkens-sphere", "battle-fury", "meteor-hammer", "lotus-orb"],
    "buildsFrom": ["ring-of-health", "void-stone"]
}, {
    "name": "Buckler",
    "price": 375,
    "imageUrl": "https://www.dotabuff.com/assets/items/buckler-88c55ac729e5c3e17db10dba129887b01fc614d4f38dd283e5da8bf930ef2da2.jpg",
    "description": "Passive: Buckler Aura Grants 2.0 armor to allied player units.Radius: 1200",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["vladmirs-offering", "assault-cuirass", "guardian-greaves"],
    "buildsFrom": ["ring-of-protection", "recipe-buckler"]
}, {
    "name": "Swift Blink",
    "price": 6800,
    "imageUrl": "https://www.dotabuff.com/assets/items/swift-blink-fdedc2cb0af89da0f892d1b69e4a60771a3be84eeb594e3a4b84006118a71fe4.jpg",
    "description": "Active: Swift Blink Teleport to a target point up to 1200 units away.After teleportation, you gain 40% phased movement speed, +50 Attack Speed, and +50 Attack Damage for 6.0 seconds. Swift Blink cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.",
    "statsObject": {"Agility": "25"},
    "statsArray": ["Agility"],
    "buildsFrom": ["blink-dagger", "eaglesong", "recipe-swift-blink"]
}, {
    "name": "Shadow Amulet",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/shadow-amulet-a129a08525ee12ba6ce93f874391489409ddfa489f475819914906c625bd695d.jpg",
    "description": "Active: FadeGrants invisibility to you or a target allied hero as long as the target unit remains still.  Has a 1.25 second fade time, and breaks instantly upon moving. There is no cooldown when using this item on yourself.Range: 600",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["shadow-blade", "glimmer-cape"]
}, {
    "name": "Javelin",
    "price": 1100,
    "imageUrl": "https://www.dotabuff.com/assets/items/javelin-2cdc04ab0fff90bf435af12606c8cc301516dd0407cf0ceab2f16134f13652d3.jpg",
    "description": "Passive: PierceGrants each attack a 30% chance to pierce through evasion and deal 70 bonus magical damage.",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["monkey-king-bar", "maelstrom"]
}, {
    "name": "Cheese",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/cheese-0ad4ef80221348dc914649d24d6e1da279a48742ad691f72f589151d8342e096.jpg",
    "description": "Use: Fondue Instantly restores 2500 health and 1500 mana.",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Overwhelming Blink",
    "price": 6800,
    "imageUrl": "https://www.dotabuff.com/assets/items/overwhelming-blink-7b9633d28b826a98f5697b4b0e38ed6299facaca011314bb81f7094ee87ec11a.jpg",
    "description": "Active: Overwhelming Blink Teleport to a target point up to 1200 units away.After teleportation, all enemies in a 800 AoE have 50% movement speed slow and 50 attack speed slow for 6.0 seconds, and take damage equal to 200 + 100% of your strength. Overwhelming Blink cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.",
    "statsObject": {"Strength": "25"},
    "statsArray": ["Strength"],
    "buildsFrom": ["blink-dagger", "reaver", "recipe-overwhelming-blink"]
}, {
    "name": "Moon Shard",
    "price": 4000,
    "imageUrl": "https://www.dotabuff.com/assets/items/moon-shard-94150bdfe8acba92303e9dfdbf48731714026d7e791b4e7873cce5f288976c17.jpg",
    "description": "Use: Consume Consume the Moon Shard to permanently gain 60 attack speed and 200 bonus night vision. Max 1 use.",
    "statsObject": {"Attack Speed": "140"},
    "statsArray": ["Attack Speed"],
    "buildsFrom": ["hyperstone", "hyperstone"]
}, {
    "name": "Void Stone",
    "price": 825,
    "imageUrl": "https://www.dotabuff.com/assets/items/void-stone-50f7504d0c5f25d7fa5a8c1708e5ee65f7d49031a7ea518057758c343f65ecd1.jpg",
    "statsObject": {"Mana Regeneration": "2.25"},
    "statsArray": ["Mana Regeneration"],
    "buildsInto": ["perseverance", "scythe-of-vyse", "euls-scepter-of-divinity", "aether-lens"]
}, {
    "name": "Faerie Fire",
    "price": 70,
    "imageUrl": "https://www.dotabuff.com/assets/items/faerie-fire-5949939dff4d93cdd79213c780a35c6be0b86699b56751affea7aeeabb9e05b1.jpg",
    "description": "Use: Imbue Instantly restores 85 health.",
    "statsObject": {"Damage": "2"},
    "statsArray": ["Damage"]
}, {
    "name": "Hyperstone",
    "price": 2000,
    "imageUrl": "https://www.dotabuff.com/assets/items/hyperstone-2cb39b3d26b53c6e29ab8ffd243511cfc541a4260b989c18833f8441d40021ce.jpg",
    "statsObject": {"Attack Speed": "60"},
    "statsArray": ["Attack Speed"],
    "buildsInto": ["assault-cuirass", "mjollnir", "moon-shard", "bloodthorn"]
}, {
    "name": "Necronomicon (level 3)",
    "price": 4550,
    "imageUrl": "https://www.dotabuff.com/assets/items/necronomicon-level-3-dfa5c1374892068b0a67d26dd618b5c215104c59d6826e34fc68136b2eee07a7.jpg",
    "description": "Active: Demonic SummoningSummons a Warrior and an Archer to fight for you for 60 seconds.Warrior:Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.Health: 700 / 800 / 900Damage: 48 / 62 / 78Mana Break Damage: 30 / 40 / 50Last Will Damage: 600 / 700 / 800Archer:Has a passive movement and attack speed aura. Gains Purge at Level 3.Health: 700 / 800 / 900Damage: 37 / 57 / 75Aura Move Speed: 5 / 7 / 9Aura Radius: 1200",
    "statsObject": {"Strength": "18", "Mana Regeneration": "4.0"},
    "statsArray": ["Strength", "Mana Regeneration"],
    "buildsFrom": ["recipe-necronomicon", "necronomicon-level-2"]
}, {
    "name": "Vitality Booster",
    "price": 1100,
    "imageUrl": "https://www.dotabuff.com/assets/items/vitality-booster-756665a109b4144746d32d9249f14fbeed28895e8fa7c41668d7ea48387a03c8.jpg",
    "statsObject": {"Health": "250"},
    "statsArray": ["Health"],
    "buildsInto": ["heart-of-tarrasque", "vanguard", "soul-booster", "aeon-disk", "spirit-vessel"]
}, {
    "name": "Divine Rapier",
    "price": 6000,
    "imageUrl": "https://www.dotabuff.com/assets/items/divine-rapier-6dfcf66899dc4626c7410e9291f829932179d89be6ebcdca7e1961c290a56768.jpg",
    "description": "Passive: Everlasting Dropped on death, and cannot be destroyed. Becomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier.",
    "statsObject": {"Damage": "300"},
    "statsArray": ["Damage"],
    "buildsFrom": ["demon-edge", "sacred-relic"]
}, {
    "name": "Sage's Mask",
    "price": 175,
    "imageUrl": "https://www.dotabuff.com/assets/items/sages-mask-c950a39e7ab704c3d59685da32d485a52e74c0e656223c0947dd10bbcc85ccc3.jpg",
    "statsObject": {"Mana Regeneration": "0.7"},
    "statsArray": ["Mana Regeneration"],
    "buildsInto": ["oblivion-staff", "ring-of-basilius", "urn-of-shadows", "necronomicon", "medallion-of-courage", "falcon-blade"]
}, {
    "name": "Dagon (level 5)",
    "price": 7950,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-level-5-7f9e544159fd1e44c79a887c770d1b452415ff6cea325738015df2dcab89e48a.jpg",
    "description": "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit.Damage: 400 / 500 / 600 / 700 / 800Range: 600 / 650 / 700 / 750 / 800Mana Cost: 120.0 / 140.0 / 160.0 / 180.0 / 200.0",
    "statsObject": {"Intelligence": "22", "Strength": "14", "Agility": "14"},
    "statsArray": ["Intelligence", "Strength", "Agility"],
    "buildsFrom": ["recipe-dagon", "dagon-level-4"]
}, {
    "name": "Ring of Protection",
    "price": 175,
    "imageUrl": "https://www.dotabuff.com/assets/items/ring-of-protection-554d96b39d21faf8ae2449c8165c31775c4e6a27b1311f78ca9c9ee3d1e169cf.jpg",
    "statsObject": {"Armor": "2.0"},
    "statsArray": ["Armor"],
    "buildsInto": ["buckler", "urn-of-shadows", "soul-ring"]
}, {
    "name": "Headdress",
    "price": 425,
    "imageUrl": "https://www.dotabuff.com/assets/items/headdress-09ec0d163de6e189848512006339998b51a83bd48670be84be5ecc5996b9d97e.jpg",
    "description": "Passive: Regeneration AuraGrants 2.0 health regeneration to allies.Radius: 1200",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["mekansm", "pipe-of-insight", "holy-locket"],
    "buildsFrom": ["ring-of-regen", "recipe-headdress"]
}, {
    "name": "Cloak",
    "price": 500,
    "imageUrl": "https://www.dotabuff.com/assets/items/cloak-9b502ee7bc0489d6434e1962ad964fe1309d2f7242109091bfbbc8bae0ba5c76.jpg",
    "statsObject": {"Magic Resistance": "15%"},
    "statsArray": ["Magic Resistance"],
    "buildsInto": ["hood-of-defiance", "glimmer-cape", "mage-slayer"]
}, {
    "name": "Blitz Knuckles",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/blitz-knuckles-4c864b94b7ef7fb243613ac8646bae3db09704560186ff3adfdef6aebee48149.jpg",
    "statsObject": {"Attack Speed": "35"},
    "statsArray": ["Attack Speed"],
    "buildsInto": ["monkey-king-bar", "shadow-blade", "witch-blade"]
}, {
    "name": "Boots of Travel 2",
    "price": 4500,
    "imageUrl": "https://www.dotabuff.com/assets/items/boots-of-travel-level-2-4dfd97d4282b939c2ed5a3faa7f5c77ae9227c3dc2c2749c553713763260eb5c.jpg",
    "description": "Upgrade: Town Portal ScrollUpgrades your Town Portal Scroll, allowing it to target units and heroes, reduces cooldown and does not consume a charge on usage. ",
    "statsObject": {"Movement Speed": "130"},
    "statsArray": ["Movement Speed"],
    "buildsFrom": ["recipe-boots-of-travel", "boots-of-travel"]
}, {
    "name": "Infused Raindrops",
    "price": 225,
    "imageUrl": "https://www.dotabuff.com/assets/items/infused-raindrops-183c9fe8e60f5c91c8d68c50dbfaf953806cc248ea31336d8ac2c7f6d7560458.jpg",
    "description": "Passive: Magical Damage Block Consumes a charge to block 120 magic damage from damage instances over 50 damage. Comes with 6 charges. When the charges are gone, the item disappears.",
    "statsObject": {"Mana Regeneration": "0.8"},
    "statsArray": ["Mana Regeneration"]
}, {
    "name": "Medallion of Courage",
    "price": 1025,
    "imageUrl": "https://www.dotabuff.com/assets/items/medallion-of-courage-d1d39f61dacee097f4147ffbfc6d1126d5799a486ab0010b29ff03e689c2788c.jpg",
    "description": "Active: Valor If cast on an ally, grants them the 5 armor, and removing it from the caster. If cast on an enemy, reduces 5 armor on both the enemy and the caster. Cannot target spell immune enemies.Range: 1000",
    "statsObject": {"Armor": "5", "Mana Regeneration": "1.5"},
    "statsArray": ["Armor", "Mana Regeneration"],
    "buildsInto": ["solar-crest"],
    "buildsFrom": ["chainmail", "sages-mask", "blight-stone"]
}, {
    "name": "Drum of Endurance",
    "price": 1700,
    "imageUrl": "https://www.dotabuff.com/assets/items/drum-of-endurance-00442cbada26fb721c8bd111ac539ed2dc9a274c9d6cb11c6bbe4bdf212caf41.jpg",
    "description": "Active: Endurance Consumes a charge and gives +45 attack speed and +13% movement speed to nearby allies for 6 seconds. Comes with 8 charges.Radius: 1200 ",
    "statsObject": {"Strength": "6", "Intelligence": "6"},
    "statsArray": ["Strength", "Intelligence"],
    "buildsFrom": ["belt-of-strength", "robe-of-the-magi", "recipe-drum-of-endurance", "wind-lace"]
}, {
    "name": "Solar Crest",
    "price": 3775,
    "imageUrl": "https://www.dotabuff.com/assets/items/solar-crest-0d9a179ca20c2243e87609f4019f794fb537c1a168b602a52181e8f790cdba96.jpg",
    "description": "Active: ShineWhen cast on an ally, grants them 8 armor, 80 attack speed, and 10% movement speed. When cast on an enemy, removes 8 armor, 80 attack speed, and 10% movement speed.Removes the armor from the caster when used.  Cannot target spell immune enemies.Range: 1000",
    "statsObject": {"Armor": "8", "All Attributes": "10", "Movement Speed": "20", "Mana Regeneration": "1.75"},
    "statsArray": ["Armor", "All Attributes", "Movement Speed", "Mana Regeneration"],
    "buildsFrom": ["ultimate-orb", "medallion-of-courage", "recipe-solar-crest", "wind-lace"]
}, {
    "name": "Yasha and Kaya",
    "price": 4100,
    "imageUrl": "https://www.dotabuff.com/assets/items/yasha-and-kaya-08e2af54260cdbe40efebbd10561bdcba62686e9f1067a8f68a49ddcfe636dc7.jpg",
    "statsObject": {
        "Agility": "16",
        "Intelligence": "16",
        "Attack Speed": "16",
        "Mana Regen Amplification": "30%",
        "Movement Speed": "10%",
        "Spell Amplification": "16%",
        "Spell Lifesteal Amplification": "30%"
    },
    "statsArray": ["Agility", "Intelligence", "Attack Speed", "Mana Regen Amplification", "Movement Speed", "Spell Amplification", "Spell Lifesteal Amplification"],
    "buildsFrom": ["yasha", "kaya"]
}, {
    "name": "Sange",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/sange-72b90dfb9d8844f0c84e65a10a91945d6517fd44151bffb4c48361dd01ad8f68.jpg",
    "statsObject": {"Strength": "16", "Status Resistance": "16%", "Self HP Regen and Lifesteal Amp": "24%"},
    "statsArray": ["Strength", "Status Resistance", "Self HP Regen and Lifesteal Amp"],
    "buildsInto": ["sange-and-yasha", "heavens-halberd", "kaya-and-sange", "trident"],
    "buildsFrom": ["belt-of-strength", "ogre-axe", "recipe-sange"]
}, {
    "name": "Demon Edge",
    "price": 2200,
    "imageUrl": "https://www.dotabuff.com/assets/items/demon-edge-53e15c94cdebea9fa7ae7edea8944b226676df9c135ac39de4060bf34fc08e21.jpg",
    "statsObject": {"Damage": "40"},
    "statsArray": ["Damage"],
    "buildsInto": ["divine-rapier", "monkey-king-bar", "daedalus"]
}, {
    "name": "Crown",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/crown-d12b02deba688d1fa8a9a56da7e5d04bded6eb3ee6e08bac0174e20860d46e76.jpg",
    "statsObject": {"All Attributes": "4"},
    "statsArray": ["All Attributes"],
    "buildsInto": ["dagon", "helm-of-the-dominator", "veil-of-discord", "rod-of-atos", "meteor-hammer"]
}, {
    "name": "Energy Booster",
    "price": 900,
    "imageUrl": "https://www.dotabuff.com/assets/items/energy-booster-f0bbebc5bcdc9c5858d45ef54422ebd8776298671cc244e0d721d1f413ea018b.jpg",
    "statsObject": {"Mana": "250"},
    "statsArray": ["Mana"],
    "buildsInto": ["soul-booster", "arcane-boots", "lotus-orb", "aether-lens", "aeon-disk", "holy-locket"]
}, {
    "name": "Mystic Staff",
    "price": 2800,
    "imageUrl": "https://www.dotabuff.com/assets/items/mystic-staff-13ff200bb65c63a1bd8d4b880e273f3c66ff6610b79df179470e2d9acce91d07.jpg",
    "statsObject": {"Intelligence": "25"},
    "statsArray": ["Intelligence"],
    "buildsInto": ["scythe-of-vyse", "shivas-guard", "arcane-blink", "wind-waker"]
}, {
    "name": "Reaver",
    "price": 2800,
    "imageUrl": "https://www.dotabuff.com/assets/items/reaver-cd4fd935175c59b706f9d698860baa837592e2b0a102ede43a54dbb4faf9487c.jpg",
    "statsObject": {"Strength": "25"},
    "statsArray": ["Strength"],
    "buildsInto": ["heart-of-tarrasque", "satanic", "overwhelming-blink"]
}, {
    "name": "Belt of Strength",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/belt-of-strength-4c202fbc4b02bd37eab47572bb94a8481cbd1bafd8b1017cdd9412ae0dca0414.jpg",
    "statsObject": {"Strength": "6"},
    "statsArray": ["Strength"],
    "buildsInto": ["power-treads", "necronomicon", "skull-basher", "sange", "drum-of-endurance"]
}, {
    "name": "Gauntlets of Strength",
    "price": 145,
    "imageUrl": "https://www.dotabuff.com/assets/items/gauntlets-of-strength-7d792e5fd3e190af88034519b4f06d449f1766bb71b899e698687a1730c06d19.jpg",
    "statsObject": {"Strength": "3"},
    "statsArray": ["Strength"],
    "buildsInto": ["bracer", "soul-ring"]
}, {
    "name": "Voodoo Mask",
    "price": 700,
    "imageUrl": "https://www.dotabuff.com/assets/items/voodoo-mask-45999a0e29774f7933f62e7fbc58f54d13db4d33afd53b54a3dda1c0eb72d84d.jpg",
    "description": "Passive: Spell Lifesteal10.0% of spell damage dealt to enemy heroes is returned to the caster as health, regardless of spell damage type.  Lifesteal reduced to 2.0% against creeps.",
    "statsObject": {},
    "statsArray": [],
    "buildsInto": ["bloodstone", "eternal-shroud"]
}, {
    "name": "Slippers of Agility",
    "price": 145,
    "imageUrl": "https://www.dotabuff.com/assets/items/slippers-of-agility-b777e3cb2b462098b8471b10d533469c0cba43933e291fddaf83282b000f7149.jpg",
    "statsObject": {"Agility": "3"},
    "statsArray": ["Agility"],
    "buildsInto": ["wraith-band"]
}, {
    "name": "Nullifier",
    "price": 4725,
    "imageUrl": "https://www.dotabuff.com/assets/items/nullifier-b5e80742d48177a272ba01b5904eab361f0ef9b01dde72cf57abbd74589191b6.jpg",
    "description": "Active: Nullify Dispels the target and applies a debuff for 5.0 seconds. Continuously dispels the target. Anytime the target is attacked, it will be slowed by 80% for 0.5 seconds.Dispel Type: Basic Dispel",
    "statsObject": {"Damage": "80", "Armor": "8", "HP Regeneration": "6"},
    "statsArray": ["Damage", "Armor", "HP Regeneration"],
    "buildsFrom": ["helm-of-iron-will", "sacred-relic"]
}, {
    "name": "Chainmail",
    "price": 550,
    "imageUrl": "https://www.dotabuff.com/assets/items/chainmail-f67934ca6e235cc6aff18b8bb2cc2b19551892c0e2b1633cbb257bb7707062c5.jpg",
    "statsObject": {"Armor": "4"},
    "statsArray": ["Armor"],
    "buildsInto": ["phase-boots", "mekansm", "blade-mail", "medallion-of-courage", "witch-blade"]
}, {
    "name": "Ring of Health",
    "price": 825,
    "imageUrl": "https://www.dotabuff.com/assets/items/ring-of-health-92d9c8ca20f68ec650e73646f3608302102b490af6c205376ab8810cf2fa06f7.jpg",
    "statsObject": {"HP Regeneration": "6.5"},
    "statsArray": ["HP Regeneration"],
    "buildsInto": ["perseverance", "vanguard", "hood-of-defiance"]
}, {
    "name": "Broadsword",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/broadsword-d1f5dfa93808e55992e33e1679a1e8ffa9a6b3100d143a9e946e5f927f1d34c3.jpg",
    "statsObject": {"Damage": "15"},
    "statsArray": ["Damage"],
    "buildsInto": ["blade-mail", "battle-fury", "crystalys", "shadow-blade"]
}, {
    "name": "Kaya and Sange",
    "price": 4100,
    "imageUrl": "https://www.dotabuff.com/assets/items/kaya-and-sange-bb12ef88b3911e7da276b6ed5376bcc93aac19c6efd287bfae4706f626551740.jpg",
    "statsObject": {
        "Strength": "16",
        "Intelligence": "16",
        "Status Resistance": "25%",
        "Mana Regen Amplification": "30%",
        "Spell Amplification": "16%",
        "Self HP Regen and Lifesteal Amp": "30%",
        "Spell Lifesteal Amplification": "30%"
    },
    "statsArray": ["Strength", "Intelligence", "Status Resistance", "Mana Regen Amplification", "Spell Amplification", "Self HP Regen and Lifesteal Amp", "Spell Lifesteal Amplification"],
    "buildsFrom": ["sange", "kaya"]
}, {
    "name": "Tome of Knowledge",
    "price": 75,
    "imageUrl": "https://www.dotabuff.com/assets/items/tome-of-knowledge-56677621a91ea7a4652c309f2b14f05f26e11f509a4f08ccee8cb9de0a7c60cc.jpg",
    "description": "Use: EnlightenGrants you 700 experience plus 135 per tome consumed by your team after the first two.Tomes Used By Team: 0",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Mantle of Intelligence",
    "price": 145,
    "imageUrl": "https://www.dotabuff.com/assets/items/mantle-of-intelligence-34ec413360674e4471df7af1d5fdae33e9913f678bcf9c649d595d44d2cfd867.jpg",
    "statsObject": {"Intelligence": "3"},
    "statsArray": ["Intelligence"],
    "buildsInto": ["null-talisman"]
}, {
    "name": "Oblivion Staff",
    "price": 1500,
    "imageUrl": "https://www.dotabuff.com/assets/items/oblivion-staff-ac4a0ca8108adf37f46fb3fec62175bffa674081795b16dbeb2b92363f03d8d7.jpg",
    "statsObject": {"Damage": "15", "Intelligence": "10", "Attack Speed": "10", "Mana Regeneration": "1.25"},
    "statsArray": ["Damage", "Intelligence", "Attack Speed", "Mana Regeneration"],
    "buildsInto": ["orchid-malevolence", "silver-edge", "echo-sabre"],
    "buildsFrom": ["quarterstaff", "robe-of-the-magi", "sages-mask"]
}, {
    "name": "Tango (Shared)",
    "price": 30,
    "imageUrl": "https://www.dotabuff.com/assets/items/tango-shared-75d0f46f5e0a1167f0119a5a5ad10ca052e6aeae20c2b434b228490f12f70354.jpg",
    "description": "Use: Devour Consumes a target tree to gain 7.0 health regeneration for 16.0 seconds. Consuming an Ironwood Tree doubles the heal amount.Tree Range: 165",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Quarterstaff",
    "price": 875,
    "imageUrl": "https://www.dotabuff.com/assets/items/quarterstaff-851ecc4ebbf55e91c08e834e98abf8c9b4d09c50d4e97f0e57ae1222f3cd0f57.jpg",
    "statsObject": {"Attack Speed": "10", "Damage": "10"},
    "statsArray": ["Attack Speed", "Damage"],
    "buildsInto": ["oblivion-staff", "butterfly", "mask-of-madness"]
}, {
    "name": "Mage Slayer",
    "price": 3450,
    "imageUrl": "https://www.dotabuff.com/assets/items/mage-slayer-6ccdcff40834baffd734fc20ad7adaa9b52686ff75116886c7a3f9654227de7b.jpg",
    "description": "Passive: Mage SlayerPlaces a debuff when you attack enemies, causing them to do 35% less spell damage for 4.0 seconds.",
    "statsObject": {"Magic Resistance": "20%", "Agility": "20", "Damage": "20"},
    "statsArray": ["Magic Resistance", "Agility", "Damage"],
    "buildsFrom": ["claymore", "blade-of-alacrity", "cloak", "recipe-mage-slayer"]
}, {
    "name": "Claymore",
    "price": 1350,
    "imageUrl": "https://www.dotabuff.com/assets/items/claymore-30140b118954fbe1e60115d5d6d45f555fe461afa41b31514b96ba9fec9dfea7.jpg",
    "statsObject": {"Damage": "20"},
    "statsArray": ["Damage"],
    "buildsInto": ["battle-fury", "satanic", "mage-slayer"]
}, {
    "name": "Gloves of Haste",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/gloves-of-haste-2275479d95854d3b534e211f50bf84047ad2ff4a46de721089f0333a361545e0.jpg",
    "statsObject": {"Attack Speed": "20"},
    "statsArray": ["Attack Speed"],
    "buildsInto": ["power-treads", "hand-of-midas", "armlet-of-mordiggian"]
}, {
    "name": "Eaglesong",
    "price": 2800,
    "imageUrl": "https://www.dotabuff.com/assets/items/eaglesong-22bf957f62b61a5f9a67bbb08c1876bdd10ca9f9970fd9be5d4df8891b79f886.jpg",
    "statsObject": {"Agility": "25"},
    "statsArray": ["Agility"],
    "buildsInto": ["butterfly", "ethereal-blade", "swift-blink"]
}, {
    "name": "Fluffy Hat",
    "price": 250,
    "imageUrl": "https://www.dotabuff.com/assets/items/fluffy-hat-d2b952344c6529060aeb53a9fa4536456a5d7cf856a58fe40e5786d58afdad9d.jpg",
    "statsObject": {"Health": "125"},
    "statsArray": ["Health"],
    "buildsInto": ["holy-locket", "orb-of-corrosion", "falcon-blade"]
}, {
    "name": "Holy Locket",
    "price": 2500,
    "imageUrl": "https://www.dotabuff.com/assets/items/holy-locket-4b2e3dad266a1dee4f3b68b6847803a064fd7ebd164ba607ccd94c8d9209481b.jpg",
    "description": "Active: Energy ChargeTarget an allied unit to instantly restore 15 health and mana per charge stored. Max 20 charges. Automatically gains a charge every 15 seconds and whenever a visible enemy within 1200 range uses an ability.",
    "statsObject": {"Health": "250", "Mana": "325", "All Attributes": "3"},
    "statsArray": ["Health", "Mana", "All Attributes"],
    "buildsFrom": ["magic-wand", "energy-booster", "headdress", "recipe-holy-locket", "fluffy-hat"]
}, {
    "name": "Dagon",
    "price": 2750,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-89ffb37e39744f688d0c635088fab72b17b99d168092be67db7f333d55d7b921.jpg",
    "description": "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 / 500 / 600 / 700 / 800Range: 600 / 650 / 700 / 750 / 800Mana Cost: 120.0 / 140.0 / 160.0 / 180.0 / 200.0",
    "statsObject": {"Intelligence": "14", "Strength": "6", "Agility": "6"},
    "statsArray": ["Intelligence", "Strength", "Agility"],
    "buildsInto": ["dagon-level-2"],
    "buildsFrom": ["staff-of-wizardry", "recipe-dagon", "crown"]
}, {
    "name": "Band of Elvenskin",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/band-of-elvenskin-838543cea99be0587ea5d367f94635029d8226a1ae67903f672e3fcafd32cd1f.jpg",
    "statsObject": {"Agility": "6"},
    "statsArray": ["Agility"],
    "buildsInto": ["yasha", "dragon-lance"]
}, {
    "name": "Robe of the Magi",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/robe-of-the-magi-cfa439953be32f3591c0482f1ee9bad99358f237a5a4dadeef90e5c29551bd91.jpg",
    "statsObject": {"Intelligence": "6"},
    "statsArray": ["Intelligence"],
    "buildsInto": ["oblivion-staff", "diffusal-blade", "drum-of-endurance", "kaya", "witch-blade"]
}, {
    "name": "Wind Waker",
    "price": 7125,
    "imageUrl": "https://www.dotabuff.com/assets/items/wind-waker-afdd9801a1ec6fc56cb53602ad52d70922418d628e8a40b5d4f7c7681204ed83.jpg",
    "description": "Active: Cyclone Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can be cast on yourself, enemy units or allied units.Enemy units take 50 magical damage upon landing.Range: 575Dispel Type: Basic Dispel",
    "statsObject": {"Movement Speed": "50", "Mana Regeneration": "6.0", "Intelligence": "35"},
    "statsArray": ["Movement Speed", "Mana Regeneration", "Intelligence"],
    "buildsFrom": ["mystic-staff", "euls-scepter-of-divinity", "recipe-wind-waker"]
}, {
    "name": "Dagon (level 2)",
    "price": 4050,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-level-2-054e24764f6c927133ffb7d5ab347238403b6e0d3d0c2b0cc4ff912996b9f21f.jpg",
    "description": "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 / 500 / 600 / 700 / 800Range: 600 / 650 / 700 / 750 / 800Mana Cost: 120.0 / 140.0 / 160.0 / 180.0 / 200.0",
    "statsObject": {"Intelligence": "16", "Strength": "8", "Agility": "8"},
    "statsArray": ["Intelligence", "Strength", "Agility"],
    "buildsInto": ["dagon-level-3"],
    "buildsFrom": ["recipe-dagon", "dagon"]
}, {
    "name": "Dagon (level 3)",
    "price": 5350,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-level-3-809d14ec136bebeafbb265467c6a9eb0089c0fabb8853fca55c5cb7705a88807.jpg",
    "description": "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 / 500 / 600 / 700 / 800Range: 600 / 650 / 700 / 750 / 800Mana Cost: 120.0 / 140.0 / 160.0 / 180.0 / 200.0",
    "statsObject": {"Intelligence": "18", "Strength": "10", "Agility": "10"},
    "statsArray": ["Intelligence", "Strength", "Agility"],
    "buildsInto": ["dagon-level-4"],
    "buildsFrom": ["recipe-dagon", "dagon-level-2"]
}, {
    "name": "Helm of Iron Will",
    "price": 925,
    "imageUrl": "https://www.dotabuff.com/assets/items/helm-of-iron-will-1274a585ddcf9c5539f06c17abc4864505dc7f9a918603478e1bedf6feb5c6fd.jpg",
    "statsObject": {"Armor": "5", "HP Regeneration": "5.0"},
    "statsArray": ["Armor", "HP Regeneration"],
    "buildsInto": ["armlet-of-mordiggian", "helm-of-the-dominator", "nullifier", "crimson-guard"]
}, {
    "name": "Talisman of Evasion",
    "price": 1400,
    "imageUrl": "https://www.dotabuff.com/assets/items/talisman-of-evasion-5c289716a220b0d7da669d8e875ff2598a37073fad89875be087117f55e867ed.jpg",
    "statsObject": {"Evasion": "15%"},
    "statsArray": ["Evasion"],
    "buildsInto": ["butterfly", "heavens-halberd"]
}, {
    "name": "Blades of Attack",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/blades-of-attack-8f79b4f8bdd62d1a5b2d50cc852526575932591015314818715536c590dd40f0.jpg",
    "statsObject": {"Damage": "9"},
    "statsArray": ["Damage"],
    "buildsInto": ["phase-boots", "vladmirs-offering", "crystalys", "armlet-of-mordiggian", "falcon-blade"]
}, {
    "name": "Dagon (level 4)",
    "price": 6650,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-level-4-3a388d74186cb726afb289914f55ecc8774941605e89fe5be587b320c8def28f.jpg",
    "description": "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 / 500 / 600 / 700 / 800Range: 600 / 650 / 700 / 750 / 800Mana Cost: 120.0 / 140.0 / 160.0 / 180.0 / 200.0",
    "statsObject": {"Intelligence": "20", "Strength": "12", "Agility": "12"},
    "statsArray": ["Intelligence", "Strength", "Agility"],
    "buildsInto": ["dagon-level-5"],
    "buildsFrom": ["recipe-dagon", "dagon-level-3"]
}, {
    "name": "Helm of the Dominator",
    "price": 2350,
    "imageUrl": "https://www.dotabuff.com/assets/items/helm-of-the-dominator-87c8e4adbbbc71f1732893ed5ee0429c76ef8b01b2adcb9fc6d291a37d02211b.jpg",
    "description": "Active: DominateTakes control of one neutral, non-ancient target unit and sets its movement speed to 425 and max health to a minimum of 1000. Also provides the unit with +25 base attack damage, +12 health regen, +4 mana regen and +4 armor. Dominated units with a max health of greater than 1000 retain their original max health.  Dominated unit's bounty is set to 200 gold.Range: 700",
    "statsObject": {"All Attributes": "6", "Armor": "6", "HP Regeneration": "6.0"},
    "statsArray": ["All Attributes", "Armor", "HP Regeneration"],
    "buildsInto": ["helm-of-the-dominator-2"],
    "buildsFrom": ["helm-of-iron-will", "recipe-helm-of-the-dominator", "crown"]
}, {
    "name": "Sacred Relic",
    "price": 3800,
    "imageUrl": "https://www.dotabuff.com/assets/items/sacred-relic-27ec5e2e944b96a2afff1090a87c52ac8882d77ce158e0b868c48dae5d892ffd.jpg",
    "statsObject": {"Damage": "60"},
    "statsArray": ["Damage"],
    "buildsInto": ["divine-rapier", "radiance", "nullifier"]
}, {
    "name": "Soul Booster",
    "price": 3200,
    "imageUrl": "https://www.dotabuff.com/assets/items/soul-booster-da7c016a1f5e0640b2049ca982ad751da9e2f37e3d77d2c7a9fa628d3604abb1.jpg",
    "statsObject": {"Health": "425", "Mana": "425"},
    "statsArray": ["Health", "Mana"],
    "buildsInto": ["bloodstone", "octarine-core"],
    "buildsFrom": ["energy-booster", "point-booster", "vitality-booster"]
}, {
    "name": "Refresher Shard",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/refresher-shard-5ac9b901c66788d2bbaeaae30efe82afabff9e85aacdf7e66ad73df975d21867.jpg",
    "description": "Use: Reset CooldownsResets the cooldowns of all your items and abilities.",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Necronomicon",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/necronomicon-605474b42f31c6d6f463ee2a17a52accf7279a1175d99754be0f000ec584004a.jpg",
    "description": "Active: Demonic SummoningSummons a Warrior and an Archer to fight for you for 60 seconds.Warrior:Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.Health: 700 / 800 / 900Damage: 48 / 62 / 78Mana Break Damage: 30 / 40 / 50Last Will Damage: 600 / 700 / 800Archer:Has a passive movement and attack speed aura. Gains Purge at Level 3.Health: 700 / 800 / 900Damage: 37 / 57 / 75Aura Move Speed: 5 / 7 / 9Aura Radius: 1200",
    "statsObject": {"Strength": "6", "Mana Regeneration": "2.0"},
    "statsArray": ["Strength", "Mana Regeneration"],
    "buildsInto": ["necronomicon-level-2"],
    "buildsFrom": ["belt-of-strength", "sages-mask", "sages-mask", "recipe-necronomicon"]
}, {
    "name": "Necronomicon (level 2)",
    "price": 3300,
    "imageUrl": "https://www.dotabuff.com/assets/items/necronomicon-level-2-5016eec729c89769350b8580483627157d8a7d918a77faf87f766a6659b0ffbc.jpg",
    "description": "Active: Demonic SummoningSummons a Warrior and an Archer to fight for you for 60 seconds.Warrior:Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.Health: 700 / 800 / 900Damage: 48 / 62 / 78Mana Break Damage: 30 / 40 / 50Last Will Damage: 600 / 700 / 800Archer:Has a passive movement and attack speed aura. Gains Purge at Level 3.Health: 700 / 800 / 900Damage: 37 / 57 / 75Aura Move Speed: 5 / 7 / 9Aura Radius: 1200",
    "statsObject": {"Strength": "12", "Mana Regeneration": "3.0"},
    "statsArray": ["Strength", "Mana Regeneration"],
    "buildsInto": ["necronomicon-level-3"],
    "buildsFrom": ["recipe-necronomicon", "necronomicon"]
}, {
    "name": "Helm of the Dominator",
    "price": 6000,
    "imageUrl": "https://www.dotabuff.com/assets/items/helm-of-the-dominator-2-87c8e4adbbbc71f1732893ed5ee0429c76ef8b01b2adcb9fc6d291a37d02211b.jpg",
    "description": "Active: DominateTakes control of one neutral target unit and sets its movement speed to 425 and max health to a minimum of 1800. Also provides the unit with +25 base attack damage, +12 health regen, +4 mana regen and +4 armor. Dominated units with a max health of greater than 1800 retain their original max health.  Dominated unit's bounty is set to 200 gold.Range: 700",
    "statsObject": {"All Attributes": "20", "Armor": "8", "HP Regeneration": "8.0"},
    "statsArray": ["All Attributes", "Armor", "HP Regeneration"],
    "buildsFrom": ["ultimate-orb", "helm-of-the-dominator", "recipe-helm-of-the-dominator-2"]
}, {
    "name": "Aghanim's Blessing",
    "price": 5800,
    "imageUrl": "https://www.dotabuff.com/assets/items/aghanims-blessing-72bdb9aee9187bc224f24985bf92100a34b1ba630991a240d7ccb26ba899079e.jpg",
    "description": "Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes.",
    "statsObject": {},
    "statsArray": [],
    "buildsFrom": ["aghanims-scepter", "recipe-aghanims-blessing-2"]
}, {
    "name": "Aghanim's Shard",
    "price": 1400,
    "imageUrl": "https://www.dotabuff.com/assets/items/aghanims-shard-36f2026d09d8e110df2dc9a28d1f5394174cac957065d80ed71711c222de279a.jpg",
    "description": "Passive: Ability UpgradeUpgrades one of your abilities.",
    "statsObject": {},
    "statsArray": []
}, {
    "name": "Town Portal Scroll",
    "price": 90,
    "imageUrl": "https://www.dotabuff.com/assets/items/town-portal-scroll-4248f463ca9199dc798a5c3c5f6883c6daa642610546b6fa25abe848f7485049.jpg",
    "description": "Use: TeleportAfter channeling for 3.0 seconds, teleports you to a target friendly building. Double-click to teleport to your team's base fountain.",
    "statsObject": {},
    "statsArray": []
}]