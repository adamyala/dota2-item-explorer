let items = [
  {
    "name": "Blink Dagger",
    "cost": 2250,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/blink_lg.png?3",
    "description-html": "<h1>Active: Blink</h1> Teleport to a target point up to 1200 units away. <br><br>Blink Dagger cannot be used for 3 seconds after taking damage from an enemy hero or Roshan."
  },
  {
    "name": "Overwhelming Blink",
    "cost": 6800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/overwhelming_blink_lg.png?3",
    "description-html": "<h1>Active: Overwhelming Blink</h1> Teleport to a target point up to 1200 units away.<br><br>After teleportation, all enemies in a 800 AoE have 50% movement speed slow and 50 attack speed slow for 6 seconds, and take damage equal to 200 + 100% of your strength. <br><br>Overwhelming Blink cannot be used for 3 seconds after taking damage from an enemy hero or Roshan.",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Strength": "25"
    }
  },
  {
    "name": "Swift Blink",
    "cost": 6800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/swift_blink_lg.png?3",
    "description-html": "<h1>Active: Swift Blink</h1> Teleport to a target point up to 1200 units away.<br><br>After teleportation, you gain 40% phased movement speed, +50 Attack Speed, and +50 Attack Damage for 6 seconds. <br><br>Swift Blink cannot be used for 3 seconds after taking damage from an enemy hero or Roshan.",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Agility": "25"
    }
  },
  {
    "name": "Arcane Blink",
    "cost": 6800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/arcane_blink_lg.png?3",
    "description-html": "<h1>Active: Arcane Blink</h1> Teleport to a target point up to 1200 units away.<br><br>After teleportation, you gain 25% Ability Cooldown Reduction and 50% Cast Point reduction for 6. <br><br>Arcane Blink cannot be used for 3 seconds after taking damage from an enemy hero or Roshan.",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Intelligence</span>",
    "attributes": {
      "Intelligence": "25"
    }
  },
  {
    "name": "Blades of Attack",
    "cost": 450,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/blades_of_attack_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "9"
    }
  },
  {
    "name": "Broadsword",
    "cost": 1000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/broadsword_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "15"
    }
  },
  {
    "name": "Chainmail",
    "cost": 550,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/chainmail_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Armor": "4"
    }
  },
  {
    "name": "Claymore",
    "cost": 1350,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/claymore_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "20"
    }
  },
  {
    "name": "Helm of Iron Will",
    "cost": 925,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/helm_of_iron_will_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "Armor": "5",
      "HP Regeneration": "5"
    }
  },
  {
    "name": "Javelin",
    "cost": 1100,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/javelin_lg.png?3",
    "description-html": "<h1>Passive: Pierce</h1>Grants each attack a 30% chance to pierce through evasion and deal 70 bonus magical damage."
  },
  {
    "name": "Mithril Hammer",
    "cost": 1600,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mithril_hammer_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">24</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "24"
    }
  },
  {
    "name": "Platemail",
    "cost": 1400,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/platemail_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Armor": "10"
    }
  },
  {
    "name": "Quarterstaff",
    "cost": 875,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/quarterstaff_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Attack Speed": "10",
      "Damage": "10"
    }
  },
  {
    "name": "Quelling Blade",
    "cost": 130,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/quelling_blade_lg.png?3",
    "description-html": "<h1>Active: Chop Tree</h1> Destroy a target tree. <br><br>Cast Range: %abilitycastrange%<br />\r\n<h1>Passive: Quell</h1> Increases attack damage against non-hero units by 13 for melee heroes, and 6 for ranged."
  },
  {
    "name": "Faerie Fire",
    "cost": 70,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/faerie_fire_lg.png?3",
    "description-html": "<h1>Use: Imbue</h1> Instantly restores 85 health.",
    "attributes-html": "+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "2"
    }
  },
  {
    "name": "Infused Raindrops",
    "cost": 225,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/infused_raindrop_lg.png?3",
    "description-html": "<h1>Passive: Magical Damage Block</h1> Consumes a charge to block 120 magic damage from damage instances over 50 damage. <br><br>Comes with 6 charges. When the charges are gone, the item disappears.",
    "attributes-html": "+ <span class=\"attribVal\">0.8</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Mana Regeneration": "0.8"
    }
  },
  {
    "name": "Wind Lace",
    "cost": 250,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/wind_lace_lg.png?3",
    "description-html": "Bonuses from multiple Wind Laces do not stack.",
    "attributes-html": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Movement Speed</span>",
    "attributes": {
      "Movement Speed": "20"
    }
  },
  {
    "name": "Ring of Protection",
    "cost": 175,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ring_of_protection_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Armor": "2"
    }
  },
  {
    "name": "Stout Shield",
    "cost": 100,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/stout_shield_lg.png?3",
    "description-html": "<h1>Passive: Damage Block</h1>Grants a 50% chance to block 20 damage from incoming attacks on melee heroes, and 8 damage on ranged."
  },
  {
    "name": "Moon Shard",
    "cost": 4000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/moon_shard_lg.png?3",
    "description-html": "<h1>Use: Consume</h1> Consume the Moon Shard to permanently gain 60 attack speed and 200 bonus night vision. Max 1 use.<br />\r\n<h1>Passive: Shade Sight</h1>Grants 400 bonus night vision.",
    "attributes-html": "+ <span class=\"attribVal\">140</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Attack Speed": "140"
    }
  },
  {
    "name": "Gauntlets of Strength",
    "cost": 145,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/gauntlets_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Strength": "3"
    }
  },
  {
    "name": "Slippers of Agility",
    "cost": 145,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/slippers_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Agility": "3"
    }
  },
  {
    "name": "Mantle of Intelligence",
    "cost": 145,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mantle_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Intelligence</span>",
    "attributes": {
      "Intelligence": "3"
    }
  },
  {
    "name": "Iron Branch",
    "cost": 50,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/branches_lg.png?3",
    "description-html": "<h1>Use: Plant Tree</h1> Targets the ground to plant a happy little tree that lasts for 20 seconds.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">1</span> <span class=\"attribValText\">All Attributes</span>",
    "attributes": {
      "All Attributes": "1"
    }
  },
  {
    "name": "Belt of Strength",
    "cost": 450,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/belt_of_strength_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Strength": "6"
    }
  },
  {
    "name": "Band of Elvenskin",
    "cost": 450,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/boots_of_elves_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Agility": "6"
    }
  },
  {
    "name": "Robe of the Magi",
    "cost": 450,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/robe_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Intelligence</span>",
    "attributes": {
      "Intelligence": "6"
    }
  },
  {
    "name": "Circlet",
    "cost": 155,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/circlet_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">All Attributes</span>",
    "attributes": {
      "All Attributes": "2"
    }
  },
  {
    "name": "Crown",
    "cost": 450,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/crown_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">All Attributes</span>",
    "attributes": {
      "All Attributes": "4"
    }
  },
  {
    "name": "Ogre Axe",
    "cost": 1000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ogre_axe_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Strength": "10"
    }
  },
  {
    "name": "Blade of Alacrity",
    "cost": 1000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/blade_of_alacrity_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Agility": "10"
    }
  },
  {
    "name": "Staff of Wizardry",
    "cost": 1000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/staff_of_wizardry_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span>",
    "attributes": {
      "Intelligence": "10"
    }
  },
  {
    "name": "Ultimate Orb",
    "cost": 2050,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_orb_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">All Attributes</span>",
    "attributes": {
      "All Attributes": "10"
    }
  },
  {
    "name": "Gloves of Haste",
    "cost": 450,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/gloves_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Attack Speed": "20"
    }
  },
  {
    "name": "Blitz Knuckles",
    "cost": 1000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/blitz_knuckles_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">35</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Attack Speed": "35"
    }
  },
  {
    "name": "Morbid Mask",
    "cost": 900,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/lifesteal_lg.png?3",
    "description-html": "<h1>Passive: Lifesteal</h1>Heals the attacker for 15% of attack damage dealt."
  },
  {
    "name": "Voodoo Mask",
    "cost": 700,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/voodoo_mask_lg.png?3",
    "description-html": "<h1>Passive: Spell Lifesteal</h1>10% of spell damage dealt to enemy heroes is returned to the caster as health, regardless of spell damage type.  <br><br>Lifesteal reduced to 2% against creeps."
  },
  {
    "name": "Ring of Regen",
    "cost": 175,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ring_of_regen_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">1.25</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "HP Regeneration": "1.25"
    }
  },
  {
    "name": "Ring of Tarrasque",
    "cost": 650,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ring_of_tarrasque_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">150</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "Health": "150",
      "HP Regeneration": "4"
    }
  },
  {
    "name": "Sage's Mask",
    "cost": 175,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/sobi_mask_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">0.7</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Mana Regeneration": "0.7"
    }
  },
  {
    "name": "Boots of Speed",
    "cost": 500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/boots_lg.png?3",
    "description-html": "Movement speed bonuses from multiple pairs of boots do not stack.",
    "attributes-html": "+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Movement Speed</span>",
    "attributes": {
      "Movement Speed": "45"
    }
  },
  {
    "name": "Gem of True Sight",
    "cost": 900,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/gem_lg.png?3",
    "description-html": "<h1>Passive: True Sight</h1> Grants the ability to see invisible units and wards to any allied vision within 900 range of its carrier. <br />\r\n<h1>Passive: Everlasting</h1><font color='#e03e2e'>Dropped on death, and cannot be destroyed.</font>"
  },
  {
    "name": "Cloak",
    "cost": 500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/cloak_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">15%</span> <span class=\"attribValText\">Magic Resistance</span>",
    "attributes": {
      "Magic Resistance": "15%"
    }
  },
  {
    "name": "Talisman of Evasion",
    "cost": 1400,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/talisman_of_evasion_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">15%</span> <span class=\"attribValText\">Evasion</span>",
    "attributes": {
      "Evasion": "15%"
    }
  },
  {
    "name": "Cheese",
    "cost": 1000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/cheese_lg.png?3",
    "description-html": "<h1>Use: Fondue</h1> Instantly restores 2500 health and 1500 mana."
  },
  {
    "name": "Magic Stick",
    "cost": 200,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/magic_stick_lg.png?3",
    "description-html": "<h1>Active: Energy Charge</h1> Instantly restores 15 health and mana per charge stored.<br><br> Max 10 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability."
  },
  {
    "name": "Magic Wand",
    "cost": 450,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/magic_wand_lg.png?3",
    "description-html": "<h1>Active: Energy Charge</h1>Instantly restores 15 health and mana per charge stored. <br><br>Max 20 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.",
    "attributes-html": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">All Attributes</span>",
    "attributes": {
      "All Attributes": "3"
    }
  },
  {
    "name": "Ghost Scepter",
    "cost": 1500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ghost_lg.png?3",
    "description-html": "<h1>Active: Ghost Form</h1> You enter ghost form for 4 seconds, becoming immune to physical damage, but are unable to attack and 40% more vulnerable to magic damage.",
    "attributes-html": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">All Attributes</span>",
    "attributes": {
      "All Attributes": "5"
    }
  },
  {
    "name": "Clarity",
    "cost": 50,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/clarity_lg.png?3",
    "description-html": "<h1>Use: Replenish</h1> Grants 6 mana regeneration to the target for 30 seconds.<br><br>If the unit is attacked by an enemy hero or Roshan, the effect is lost.<br><br>Range: %abilitycastrange%"
  },
  {
    "name": "Enchanted Mango",
    "cost": 70,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/enchanted_mango_lg.png?3",
    "description-html": "<h1>Use: Eat Mango</h1> Instantly restores 100 mana.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">0.6</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "HP Regeneration": "0.6"
    }
  },
  {
    "name": "Healing Salve",
    "cost": 110,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/flask_lg.png?3",
    "description-html": "<h1>Use: Salve</h1> Grants 40 health regeneration to the target for 10 seconds.<br><br>If the unit is attacked by an enemy hero or Roshan, the effect is lost.<br><br>Range: %abilitycastrange%"
  },
  {
    "name": "Dust of Appearance",
    "cost": 80,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/dust_lg.png?3",
    "description-html": "<h1>Use: Reveal</h1>Reveals and slows invisible heroes by 20% in a 1050 radius around the caster for 12 seconds."
  },
  {
    "name": "Bottle",
    "cost": 625,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/bottle_lg.png?3",
    "description-html": "<h1>Active: Regenerate</h1>Consumes a charge to restore 125 health and 75 mana over 2.5 seconds. If the hero is attacked by an enemy hero or Roshan, the effect is lost.<br><br>The Bottle automatically refills at the fountain.<br><br>Hold Control to use on an allied hero.<br><br>Range: %abilitycastrange%<br />\r\n<h1>Passive:  Store Rune</h1>Runes can be stored in the bottle for later use by right-clicking them. Unused runes will automatically activate after 2 minutes.<br><br>Using a stored rune fully refills the Bottle."
  },
  {
    "name": "Sentry Ward",
    "cost": 75,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ward_sentry_lg.png?3",
    "description-html": "<h1>Use: Plant</h1> Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a 1000 radius.<br>Lasts 8 minutes.<br><br>Does not grant ground vision.<br>Hold Control to give one Sentry Ward to an allied hero.<br><br>Range: %abilitycastrange%"
  },
  {
    "name": "Observer and Sentry Wards",
    "cost": 75,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ward_dispenser_lg.png?3",
    "description-html": "<h1>Use: Plant</h1> Plant the currently active ward.  Double-Click to switch the currently active ward.<br><br>Range: %abilitycastrange%",
    "attributes-html": "OBSERVER VISION RANGE: <span class=\"attribVal\">1400</span><br />\nOBSERVER DURATION (MINUTES): <span class=\"attribVal\">6</span><br />\nSENTRY TRUE SIGHT RANGE: <span class=\"attribVal\">1000</span><br />\nSENTRY DURATION (MINUTES): <span class=\"attribVal\">8</span>",
    "attributes": {
      "6": "1400",
      "8": "1000"
    }
  },
  {
    "name": "Tango",
    "cost": 90,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tango_lg.png?3",
    "description-html": "<h1>Use: Devour</h1> Consumes a target tree to gain 7 health regeneration for 16 seconds. Consuming an Ironwood Tree doubles the heal amount.<br><br>Comes with 3 charges.  Can be used on an allied hero to give them one Tango.<br><br>Tree Range: %abilitycastrange%"
  },
  {
    "name": "Tango (Shared)",
    "cost": 30,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tango_single_lg.png?3",
    "description-html": "<h1>Use: Devour</h1> Consumes a target tree to gain 7 health regeneration for 16 seconds. Consuming an Ironwood Tree doubles the heal amount.<br><br>Tree Range: %abilitycastrange%"
  },
  {
    "name": "Animal Courier",
    "cost": 50,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/courier_lg.png?3",
    "description-html": "<h1>Use: Deploy Courier</h1> Deploys a creature to carry items to and from your team's base."
  },
  {
    "name": "Flying Courier",
    "cost": 100,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/flying_courier_lg.png?3",
    "description-html": "<h1>Use: Upgrade Courier</h1>Upgrades your team's Animal Courier to a Flying Courier, granting it swift, unobstructed movement to carry items to and from your team's base. <br><br>Requires a deployed Animal Courier."
  },
  {
    "name": "Town Portal Scroll",
    "cost": 90,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tpscroll_lg.png?3",
    "description-html": "<h1>Use: Teleport</h1>After channeling for 3 seconds, teleports you to a target friendly building. <br><br>Double-click to teleport to your team's base fountain."
  },
  {
    "name": "Boots of Travel",
    "cost": 2500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/travel_boots_lg.png?3",
    "description-html": "<h1>Upgrade: Town Portal Scroll</h1>Upgrades your Town Portal Scroll, allowing it to target units, reduces cooldown and does not consume a charge on usage. <br />\r\nMovement speed bonuses from multiple pairs of boots do not stack.",
    "attributes-html": "+ <span class=\"attribVal\">110</span> <span class=\"attribValText\">Movement Speed</span><br />\nTOWN PORTAL SCROLL COOLDOWN: <span class=\"attribVal\">40</span>",
    "attributes": {
      "Movement Speed": "110"
    }
  },
  {
    "name": "Boots of Travel 2",
    "cost": 4500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/travel_boots_2_lg.png?3",
    "description-html": "<h1>Upgrade: Town Portal Scroll</h1>Upgrades your Town Portal Scroll, allowing it to target units and heroes, reduces cooldown and does not consume a charge on usage. <br />\r\nMovement speed bonuses from multiple pairs of boots do not stack.",
    "attributes-html": "+ <span class=\"attribVal\">130</span> <span class=\"attribValText\">Movement Speed</span><br />\nTOWN PORTAL SCROLL COOLDOWN: <span class=\"attribVal\">30</span>",
    "attributes": {
      "Movement Speed": "130"
    }
  },
  {
    "name": "Phase Boots",
    "cost": 1500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/phase_boots_lg.png?3",
    "description-html": "<h1>Active: Phase</h1> Gives 20% increased movement speed on melee heroes, and 10% on ranged heroes, and lets you move through units and turn more quickly for 3 seconds.<br />\r\nMovement speed bonuses from multiple pairs of boots do not stack.",
    "attributes-html": "+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Movement Speed</span><br />\n+Damage (MELEE) <span class=\"attribVal\">18</span><br />\n+Damage (RANGED) <span class=\"attribVal\">12</span><br />\n+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Movement Speed": "45",
      "12": "18",
      "Armor": "4"
    }
  },
  {
    "name": "Demon Edge",
    "cost": 2200,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/demon_edge_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">40</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "40"
    }
  },
  {
    "name": "Eaglesong",
    "cost": 2800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/eagle_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Agility": "25"
    }
  },
  {
    "name": "Reaver",
    "cost": 2800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/reaver_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Strength": "25"
    }
  },
  {
    "name": "Sacred Relic",
    "cost": 3800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/relic_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">60</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "60"
    }
  },
  {
    "name": "Hyperstone",
    "cost": 2000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/hyperstone_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">60</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Attack Speed": "60"
    }
  },
  {
    "name": "Ring of Health",
    "cost": 825,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ring_of_health_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">6.5</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "HP Regeneration": "6.5"
    }
  },
  {
    "name": "Void Stone",
    "cost": 825,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/void_stone_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">2.25</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Mana Regeneration": "2.25"
    }
  },
  {
    "name": "Mystic Staff",
    "cost": 2800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mystic_staff_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Intelligence</span>",
    "attributes": {
      "Intelligence": "25"
    }
  },
  {
    "name": "Energy Booster",
    "cost": 900,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/energy_booster_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span>",
    "attributes": {
      "Mana": "250"
    }
  },
  {
    "name": "Point Booster",
    "cost": 1200,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/point_booster_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">175</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">175</span> <span class=\"attribValText\">Health</span>",
    "attributes": {
      "Mana": "175",
      "Health": "175"
    }
  },
  {
    "name": "Vitality Booster",
    "cost": 1100,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/vitality_booster_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span>",
    "attributes": {
      "Health": "250"
    }
  },
  {
    "name": "Fluffy Hat",
    "cost": 250,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/fluffy_hat_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">125</span> <span class=\"attribValText\">Health</span>",
    "attributes": {
      "Health": "125"
    }
  },
  {
    "name": "Power Treads",
    "cost": 1400,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/power_treads_lg.png?3",
    "description-html": "<h1>Active: Switch Attribute</h1>Switches between +10 Strength, +10 Agility, or +10 Intelligence.<br />\r\nMovement speed bonuses from multiple pairs of boots do not stack.",
    "attributes-html": "+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Selected Attribute</span><br />\n+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Movement Speed": "45",
      "Selected Attribute": "10",
      "Attack Speed": "25"
    }
  },
  {
    "name": "Grandmaster's Glaive",
    "cost": 5000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/grandmasters_glaive_lg.png?3",
    "description-html": ""
  },
  {
    "name": "Hand of Midas",
    "cost": 2200,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/hand_of_midas_lg.png?3",
    "description-html": "<h1>Active: Transmute</h1> Kills a non-hero target for 160 gold and 2.1x experience. <br><br> Cannot be used on Ancient Creeps.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">40</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Attack Speed": "40"
    }
  },
  {
    "name": "Oblivion Staff",
    "cost": 1500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/oblivion_staff_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">1.25</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Damage": "15",
      "Intelligence": "10",
      "Attack Speed": "10",
      "Mana Regeneration": "1.25"
    }
  },
  {
    "name": "Witch Blade",
    "cost": 2600,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/witch_blade_lg.png?3",
    "description-html": "<h1>Passive: Witch Blade</h1>Causes your next attack to apply a poison for 3 seconds, slowing by 25% and dealing 1x your intelligence as damage every second.",
    "attributes-html": "+ <span class=\"attribVal\">35</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">300</span> <span class=\"attribValText\">Projectile Speed</span>",
    "attributes": {
      "Attack Speed": "35",
      "Intelligence": "12",
      "Armor": "6",
      "Projectile Speed": "300"
    }
  },
  {
    "name": "Perseverance",
    "cost": 1650,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/pers_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">6.5</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">2.25</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "HP Regeneration": "6.5",
      "Mana Regeneration": "2.25"
    }
  },
  {
    "name": "Bracer",
    "cost": 510,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/bracer_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">0.75</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "Strength": "5",
      "Agility": "2",
      "Intelligence": "2",
      "Damage": "3",
      "HP Regeneration": "0.75"
    }
  },
  {
    "name": "Wraith Band",
    "cost": 510,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/wraith_band_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">1.5</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Agility": "5",
      "Strength": "2",
      "Intelligence": "2",
      "Attack Speed": "5",
      "Armor": "1.5"
    }
  },
  {
    "name": "Null Talisman",
    "cost": 510,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/null_talisman_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Agility</span><br />\n+Spell Amplification <span class=\"attribVal\">3%</span><br />\n+ <span class=\"attribVal\">0.6</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Intelligence": "5",
      "Strength": "2",
      "Agility": "2",
      "0.6": "3%"
    }
  },
  {
    "name": "Mekansm",
    "cost": 1875,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mekansm_lg.png?3",
    "description-html": "<h1>Active: Restore</h1>Heals 275 health to allied units in a 1200 radius.<br />\r\n<h1>Passive: Mekansm Aura</h1>Grants 2 health regeneration to allied units in a 1200 radius.",
    "attributes-html": "+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Armor": "4"
    }
  },
  {
    "name": "Vladmir's Offering",
    "cost": 2750,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/vladmir_lg.png?3",
    "description-html": "<h1>Passive: Vladmir's Aura</h1>Grants 15% lifesteal, 18% bonus damage, 1.4 mana regeneration, and 3 armor to nearby allies. <br><br>Radius: 1200"
  },
  {
    "name": "Buckler",
    "cost": 375,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/buckler_lg.png?3",
    "description-html": "<h1>Passive: Buckler Aura</h1> Grants 2 armor to allied player units.<br><br>Radius: 1200"
  },
  {
    "name": "Ring of Basilius",
    "cost": 425,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ring_of_basilius_lg.png?3",
    "description-html": "<h1>Passive: Basilius Aura</h1>Grants 1.4 mana regeneration to allies.  <br><br>Radius: 1200"
  },
  {
    "name": "Holy Locket",
    "cost": 2500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/holy_locket_lg.png?3",
    "description-html": "<h1>Active: Energy Charge</h1>Target an allied unit to instantly restore 15 health and mana per charge stored. <br><br>Max 20 charges. Automatically gains a charge every 15 seconds and whenever a visible enemy within 1200 range uses an ability.<br />\r\n<br />\r\n<h1>Passive: Holy Blessing</h1>Amplifies heals you provide by 35%.<br />\r\n<br />\r\n<h1>Passive: Regeneration Aura</h1>Grants 3 health regeneration to allies.<br><br>Radius: 1200",
    "attributes-html": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">325</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">All Attributes</span>",
    "attributes": {
      "Health": "250",
      "Mana": "325",
      "All Attributes": "3"
    }
  },
  {
    "name": "Pipe of Insight",
    "cost": 3475,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/pipe_lg.png?3",
    "description-html": "<h1>Active: Barrier</h1>Gives a shield that blocks 400 magic damage to all nearby allies. Lasts 12 seconds.<br><br>Radius: 1200<br />\r\n<h1>Passive: Insight Aura</h1> Gives allied units 2 health regeneration and 10% magic resistance.<br><br>Radius: 1200",
    "attributes-html": "+ <span class=\"attribVal\">8.5</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">30%</span> <span class=\"attribValText\">Magic Resistance</span>",
    "attributes": {
      "HP Regeneration": "8.5",
      "Magic Resistance": "30%"
    }
  },
  {
    "name": "Urn of Shadows",
    "cost": 840,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/urn_of_shadows_lg.png?3",
    "description-html": "<h1>Active: Soul Release</h1> Provides 30 health regeneration when cast on allies, and deals 25 damage per second when cast on enemies. <br><br>Lasts 8 seconds.  <br><br>Gains charges every time an enemy hero dies within 1400 units.  Only the closest Urn to the dying hero will gain a charge.<br><br>Cast Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">1.5</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Mana Regeneration": "1.5",
      "All Attributes": "2",
      "Armor": "2"
    }
  },
  {
    "name": "Headdress",
    "cost": 425,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/headdress_lg.png?3",
    "description-html": "<h1>Passive: Regeneration Aura</h1>Grants 2 health regeneration to allies.<br><br>Radius: 1200"
  },
  {
    "name": "Scythe of Vyse",
    "cost": 5675,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/sheepstick_lg.png?3",
    "description-html": "<h1>Active: Hex</h1>Turns a target unit into a harmless critter for 3.5 seconds. The target has a base movement speed of 140 and will be silenced, muted, and disarmed.<br>Instantly destroys illusions.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">35</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Strength": "10",
      "Agility": "10",
      "Intelligence": "35",
      "Mana Regeneration": "9"
    }
  },
  {
    "name": "Orchid Malevolence",
    "cost": 3475,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/orchid_lg.png?3",
    "description-html": "<h1>Active: Soul Burn</h1>Silences the target unit for 5 seconds. At the end of the silence, 30% of the damage received while silenced is inflicted as bonus magical damage.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Intelligence": "20",
      "Attack Speed": "25",
      "Damage": "30",
      "Mana Regeneration": "4"
    }
  },
  {
    "name": "Bloodthorn",
    "cost": 6475,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/bloodthorn_lg.png?3",
    "description-html": "<h1>Active: Soul Rend</h1> Silences a target for 5 seconds. At the end of the silence, an additional 30% of all damage taken during the silence will be dealt to the target as magical damage.<br><br>All attacks on the silenced target will have True Strike and 100% chance to crit for 130% damage.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">90</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">5.5</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Intelligence": "25",
      "Attack Speed": "90",
      "Damage": "30",
      "Mana Regeneration": "5.5"
    }
  },
  {
    "name": "Echo Sabre",
    "cost": 2500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/echo_sabre_lg.png?3",
    "description-html": "<h1>Passive: Echo Strike</h1> Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 0.8 seconds on each strike.",
    "attributes-html": "+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">2.25</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Damage": "15",
      "Strength": "12",
      "Intelligence": "10",
      "Attack Speed": "10",
      "Mana Regeneration": "2.25"
    }
  },
  {
    "name": "Eul's Scepter of Divinity",
    "cost": 2725,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/cyclone_lg.png?3",
    "description-html": "<h1>Active: Cyclone</h1> Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can only be cast on enemy units or yourself.<br><br>Enemy units take 50 magical damage upon landing.<br><br>Range: %abilitycastrange%<br>Dispel Type: <span class=\"GameplayValues GameplayVariable\">Basic Dispel</span>",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3.5</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Movement Speed</span>",
    "attributes": {
      "Intelligence": "10",
      "Mana Regeneration": "3.5",
      "Movement Speed": "20"
    }
  },
  {
    "name": "Wind Waker",
    "cost": 7125,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/wind_waker_lg.png?3",
    "description-html": "<h1>Active: Cyclone</h1> Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can be cast on yourself, enemy units or allied units.<br><br>Enemy units take 50 magical damage upon landing.<br><br>Range: %abilitycastrange%<br>Dispel Type: <span class=\"GameplayValues GameplayVariable\">Basic Dispel</span>",
    "attributes-html": "+ <span class=\"attribVal\">50</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">35</span> <span class=\"attribValText\">Intelligence</span>",
    "attributes": {
      "Movement Speed": "50",
      "Mana Regeneration": "6",
      "Intelligence": "35"
    }
  },
  {
    "name": "Aether Lens",
    "cost": 2275,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png?3",
    "description-html": "<h1>Passive: Aethereal Focus</h1> Increases targeted spell and item cast range by 250.",
    "attributes-html": "+ <span class=\"attribVal\">300</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Mana": "300",
      "Mana Regeneration": "3"
    }
  },
  {
    "name": "Force Staff",
    "cost": 2175,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png?3",
    "description-html": "<h1>Active: Force</h1>Pushes any target unit 600 units in the direction it is facing.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">2.5</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "Intelligence": "10",
      "HP Regeneration": "2.5"
    }
  },
  {
    "name": "Hurricane Pike",
    "cost": 4525,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/hurricane_pike_lg.png?3",
    "description-html": "<h1>Active: Hurricane Thrust</h1> Pushes you and target enemy 450 units away from each other, and for 5 seconds, allows you to make 4 attacks against the target without range restrictions and with +100 attack speed.<br><br>Works like Force Staff when used on self or allies.<br><br>Allied Range: %abilitycastrange%<br>Enemy Range: 400<br />\r\n<h1>Passive:  Dragon's Reach</h1> Increases attack range of ranged heroes by 140.",
    "attributes-html": "+ <span class=\"attribVal\">13</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">2.5</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Intelligence": "13",
      "HP Regeneration": "2.5",
      "Agility": "20",
      "Strength": "15"
    }
  },
  {
    "name": "Dagon",
    "cost": 2750,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/dagon_lg.png?3",
    "description-html": "<h1>Active: Energy Burst</h1> Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.<br><br>Damage: 400<br>Range: %abilitycastrange%<br>Mana Cost: 120",
    "attributes-html": "+ <span class=\"attribVal\">14</span>/16/18/20/22 <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">6</span>/8/10/12/14 <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">6</span>/8/10/12/14 <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Intelligence": "14",
      "Strength": "6",
      "Agility": "6"
    }
  },
  {
    "name": "Dagon",
    "cost": 4050,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/dagon_2_lg.png?3",
    "description-html": "<h1>Active: Energy Burst</h1> Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.<br><br>Damage: 400<br>Range: %abilitycastrange%<br>Mana Cost: 120",
    "attributes-html": "+ 14/<span class=\"attribVal\">16</span>/18/20/22 <span class=\"attribValText\">Intelligence</span><br />\n+ 6/<span class=\"attribVal\">8</span>/10/12/14 <span class=\"attribValText\">Strength</span><br />\n+ 6/<span class=\"attribVal\">8</span>/10/12/14 <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Intelligence": "16",
      "Strength": "8",
      "Agility": "8"
    }
  },
  {
    "name": "Dagon",
    "cost": 5350,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/dagon_3_lg.png?3",
    "description-html": "<h1>Active: Energy Burst</h1> Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.<br><br>Damage: 400<br>Range: %abilitycastrange%<br>Mana Cost: 120",
    "attributes-html": "+ 14/16/<span class=\"attribVal\">18</span>/20/22 <span class=\"attribValText\">Intelligence</span><br />\n+ 6/8/<span class=\"attribVal\">10</span>/12/14 <span class=\"attribValText\">Strength</span><br />\n+ 6/8/<span class=\"attribVal\">10</span>/12/14 <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Intelligence": "18",
      "Strength": "10",
      "Agility": "10"
    }
  },
  {
    "name": "Dagon",
    "cost": 6650,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/dagon_4_lg.png?3",
    "description-html": "<h1>Active: Energy Burst</h1> Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.<br><br>Damage: 400<br>Range: %abilitycastrange%<br>Mana Cost: 120",
    "attributes-html": "+ 14/16/18/<span class=\"attribVal\">20</span>/22 <span class=\"attribValText\">Intelligence</span><br />\n+ 6/8/10/<span class=\"attribVal\">12</span>/14 <span class=\"attribValText\">Strength</span><br />\n+ 6/8/10/<span class=\"attribVal\">12</span>/14 <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Intelligence": "20",
      "Strength": "12",
      "Agility": "12"
    }
  },
  {
    "name": "Dagon",
    "cost": 7950,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/dagon_5_lg.png?3",
    "description-html": "<h1>Active: Energy Burst</h1> Emits a powerful burst of magical damage upon a targeted enemy unit.<br><br>Damage: 400<br>Range: %abilitycastrange%<br>Mana Cost: 120",
    "attributes-html": "+ 14/16/18/20/<span class=\"attribVal\">22</span> <span class=\"attribValText\">Intelligence</span><br />\n+ 6/8/10/12/<span class=\"attribVal\">14</span> <span class=\"attribValText\">Strength</span><br />\n+ 6/8/10/12/<span class=\"attribVal\">14</span> <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Intelligence": "22",
      "Strength": "14",
      "Agility": "14"
    }
  },
  {
    "name": "Necronomicon",
    "cost": 2050,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/necronomicon_lg.png?3",
    "description-html": "<h1>Active: Demonic Summoning</h1>Summons a Warrior and an Archer to fight for you for 60 seconds.<br><br><h1>Warrior:</h1>Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.<br>Health: 700<br>Damage: 48<br>Mana Break Damage: 30<br>Last Will Damage: 600<br><br><h1>Archer:</h1>Has a passive movement and attack speed aura. Gains Purge at Level 3.<br>Health: 700<br>Damage: 37<br>Aura Move Speed: 5<br>Aura Attack Speed: %archer_attack_speed%<br>Aura Radius: 1200",
    "attributes-html": "+ <span class=\"attribVal\">6</span>/12/18 <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Strength": "6"
    }
  },
  {
    "name": "Necronomicon",
    "cost": 3300,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/necronomicon_2_lg.png?3",
    "description-html": "<h1>Active: Demonic Summoning</h1>Summons a Warrior and an Archer to fight for you for 60 seconds.<br><br><h1>Warrior:</h1>Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.<br>Health: 700<br>Damage: 48<br>Mana Break Damage: 30<br>Last Will Damage: 600<br><br><h1>Archer:</h1>Has a passive movement and attack speed aura. Gains Purge at Level 3.<br>Health: 700<br>Damage: 37<br>Aura Move Speed: 5<br>Aura Attack Speed: %archer_attack_speed%<br>Aura Radius: 1200",
    "attributes-html": "+ 6/<span class=\"attribVal\">12</span>/18 <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Strength": "12"
    }
  },
  {
    "name": "Necronomicon",
    "cost": 4550,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/necronomicon_3_lg.png?3",
    "description-html": "<h1>Active: Demonic Summoning</h1>Summons a Warrior and an Archer to fight for you for 60 seconds.<br><br><h1>Warrior:</h1>Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.<br>Health: 700<br>Damage: 48<br>Mana Break Damage: 30<br>Last Will Damage: 600<br><br><h1>Archer:</h1>Has a passive movement and attack speed aura. Gains Purge at Level 3.<br>Health: 700<br>Damage: 37<br>Aura Move Speed: 5<br>Aura Attack Speed: %archer_attack_speed%<br>Aura Radius: 1200",
    "attributes-html": "+ 6/12/<span class=\"attribVal\">18</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Strength": "18"
    }
  },
  {
    "name": "Aghanim's Scepter",
    "cost": 4200,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png?3",
    "description-html": "<h1>Passive: Ability Upgrade</h1>Upgrades the ultimate, and some abilities, of all heroes.",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">175</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">175</span> <span class=\"attribValText\">Mana</span>",
    "attributes": {
      "All Attributes": "10",
      "Health": "175",
      "Mana": "175"
    }
  },
  {
    "name": "Aghanim's Blessing",
    "cost": 5800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_2_lg.png?3",
    "description-html": "<h1>Passive: Ability Upgrade</h1>Upgrades the ultimate, and some abilities, of all heroes."
  },
  {
    "name": "Aghanim's Shard",
    "cost": 1400,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aghanims_shard_lg.png?3",
    "description-html": "<h1>Passive: Ability Upgrade</h1>Upgrades one of your abilities."
  },
  {
    "name": "Refresher Orb",
    "cost": 5000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/refresher_lg.png?3",
    "description-html": "<h1>Active: Reset Cooldowns</h1>Resets the cooldowns of all your items and abilities.",
    "attributes-html": "+ <span class=\"attribVal\">13</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "HP Regeneration": "13",
      "Mana Regeneration": "12"
    }
  },
  {
    "name": "Assault Cuirass",
    "cost": 5075,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/assault_lg.png?3",
    "description-html": "<h1>Passive: Assault Aura</h1> Grants 30 attack speed and 5 armor to nearby allied units and structures, and decreases nearby enemy unit and structure armor by 5.<br><br>Radius: 1200",
    "attributes-html": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Attack Speed": "30",
      "Armor": "10"
    }
  },
  {
    "name": "Heart of Tarrasque",
    "cost": 4800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/heart_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\n+Max Health Regen <span class=\"attribVal\">1.6%</span>",
    "attributes": {
      "Strength": "45",
      "Health": "250"
    }
  },
  {
    "name": "Black King Bar",
    "cost": 4050,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png?3",
    "description-html": "<h1>Active: Avatar</h1> Grants Spell Immunity.  Duration decreases with each use. <br><br>Duration: 10 <br>Dispel Type: <span class=\"GameplayValues GameplayVariable\">Basic Dispel</span>",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">24</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Strength": "10",
      "Damage": "24"
    }
  },
  {
    "name": "Shiva's Guard",
    "cost": 4850,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/shivas_guard_lg.png?3",
    "description-html": "<h1>Active: Arctic Blast</h1> Emits a freezing wave that deals 200 magical damage to enemies and slows their movement by 40% for 4 seconds.<br><br>Radius: 900<br />\r\n<h1>Passive: Freezing Aura</h1> Reduces the attack speed of all enemies by 45 and all heals, regeneration and lifesteal by 25%. <br><br>Radius: 1200",
    "attributes-html": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Intelligence": "30",
      "Armor": "15"
    }
  },
  {
    "name": "Bloodstone",
    "cost": 5950,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/bloodstone_lg.png?3",
    "description-html": "<h1>Active: Bloodpact</h1> Converts 30% of your max mana to health regeneration over 2 seconds.<br />\r\n<h1>Passive: Mana Battery</h1>Each charge provides 0.2 MP regen and 0.35% Spell Amp. Nearby kills provide 1 charges. Dying causes you to lose 3 charges. Starts with 14 charges.",
    "attributes-html": "+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Intelligence</span><br />\n+Mana Regen Amplification <span class=\"attribVal\">100%</span><br />\n+Spell Amplification <span class=\"attribVal\">8%</span><br />\n+Spell Lifesteal Amplification <span class=\"attribVal\">30%</span><br />\n+Spell Lifesteal (Hero) <span class=\"attribVal\">15%</span><br />\n+Spell Lifesteal (Creep) <span class=\"attribVal\">3%</span>",
    "attributes": {
      "Health": "425",
      "Mana": "425",
      "Intelligence": "16",
      "8%": "100%",
      "15%": "30%"
    }
  },
  {
    "name": "Linken's Sphere",
    "cost": 4600,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/sphere_lg.png?3",
    "description-html": "<h1>Passive: Spellblock</h1>Blocks most targeted spells once every 12 seconds.<br />\r\n<h1>Active: Transfer Spellblock</h1>Temporarily removes Spellblock from the item's owner and transfers it to an allied unit for 12 seconds.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">14</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">7</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "All Attributes": "14",
      "HP Regeneration": "7",
      "Mana Regeneration": "5"
    }
  },
  {
    "name": "Lotus Orb",
    "cost": 3950,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/lotus_orb_lg.png?3",
    "description-html": "<h1>Active: Echo Shell</h1>Applies a shield to the target unit for 6 seconds which re-casts most targeted spells back to their caster.<br><br>The shielded unit will still take damage from the spell. <br><br>Range: %abilitycastrange%<br>Dispel Type: <span class=\"GameplayValues GameplayVariable\">Basic Dispel</span>",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">6.5</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span>",
    "attributes": {
      "Armor": "10",
      "HP Regeneration": "6.5",
      "Mana Regeneration": "4",
      "Mana": "250"
    }
  },
  {
    "name": "Meteor Hammer",
    "cost": 2350,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/meteor_hammer_lg.png?3",
    "description-html": "<h1>Active: Meteor Hammer</h1> CHANNELED - After a successful channel, summons a meteor that strikes a 315 AoE, stunning enemies for 1.75 seconds and dealing impact damage. Continues to deal damage over time to enemies units and buildings for 6 seconds.<BR><BR>Building Impact Damage: 75 <BR>Building Over Time Damage: 50 <BR><BR>Non-Building Impact Damage: 150 <BR>Non-Building Over Time Damage: 90 <BR><BR>Channel Duration: 2.5 seconds.<BR>Landing Time: 0.5 seconds.",
    "attributes-html": "+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">6.5</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">2.5</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "All Attributes": "8",
      "HP Regeneration": "6.5",
      "Mana Regeneration": "2.5"
    }
  },
  {
    "name": "Nullifier",
    "cost": 4725,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/nullifier_lg.png?3",
    "description-html": "<h1>Active: Nullify</h1> Dispels the target and applies a debuff for 5 seconds. Continuously dispels the target. Anytime the target is attacked, it will be slowed by 80% for 0.5 seconds.<br><br>Dispel Type: <span class=\"GameplayValues GameplayVariable\">Basic Dispel</span>",
    "attributes-html": "+ <span class=\"attribVal\">80</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "Damage": "80",
      "Armor": "8",
      "HP Regeneration": "6"
    }
  },
  {
    "name": "Aeon Disk",
    "cost": 3100,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aeon_disk_lg.png?3",
    "description-html": "<h1>Passive: Combo Breaker</h1> When you take damage and your health falls below 70%, a strong dispel is applied and you gain a 2.5 second buff that provides +75% Status Resistance and causes all damage you deal and are dealt to be reduced to zero. Only triggers on player based damage.",
    "attributes-html": "+ <span class=\"attribVal\">300</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">300</span> <span class=\"attribValText\">Mana</span>",
    "attributes": {
      "Health": "300",
      "Mana": "300"
    }
  },
  {
    "name": "Kaya",
    "cost": 2050,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/kaya_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Intelligence</span><br />\n+Spell Amplification <span class=\"attribVal\">8%</span><br />\n+Mana Regen Amplification <span class=\"attribVal\">24%</span><br />\n+Spell Lifesteal Amplification <span class=\"attribVal\">24%</span>",
    "attributes": {
      "Intelligence": "16",
      "24%": "8%"
    }
  },
  {
    "name": "Refresher Shard",
    "cost": 1000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/refresher_shard_lg.png?3",
    "description-html": "<h1>Use: Reset Cooldowns</h1>Resets the cooldowns of all your items and abilities."
  },
  {
    "name": "Spirit Vessel",
    "cost": 2940,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/spirit_vessel_lg.png?3",
    "description-html": "<h1>Active: Soul Release</h1> When used against enemies, it reduces health by 4% of current health per second, and reduces HP regeneration, healing, lifesteal and spell lifesteal by 45%. Deals 35 damage per second. <br><br>When used on allies, it provides 40 health regeneration per second. <br><br>Lasts 8 seconds.  <br><br>Gains charges every time an enemy hero dies within 1400 units.  Only the closest Spirit Vessel to the dying hero will gain a charge.<br><br>Cast Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">1.75</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Health": "250",
      "Mana Regeneration": "1.75",
      "All Attributes": "2",
      "Armor": "2"
    }
  },
  {
    "name": "Vanguard",
    "cost": 1925,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/vanguard_lg.png?3",
    "description-html": "<h1>Passive: Damage Block</h1> Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged.",
    "attributes-html": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">7</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "Health": "250",
      "HP Regeneration": "7"
    }
  },
  {
    "name": "Crimson Guard",
    "cost": 3800,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/crimson_guard_lg.png?3",
    "description-html": "<h1>Active: Guard</h1> For 12 seconds, grant nearby allied heroes and buildings a 100% chance to block 70 damage from each incoming attack.<br><br>Units may only be affected by Guard once every 40 seconds.<br><br>Radius: 1200<br />\r\n<h1>Passive: Damage Block</h1> Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged.",
    "attributes-html": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Health": "250",
      "HP Regeneration": "12",
      "Armor": "6"
    }
  },
  {
    "name": "Blade Mail",
    "cost": 2225,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/blade_mail_lg.png?3",
    "description-html": "<h1>Active: Damage Return</h1>For 4.5 seconds, the damage returned from all sources is increased by 80%.<br />\r\n<h1>Passive: Damage Return</h1>Everytime you are attacked, you return 20 damage plus 20% of the attack damage dealt to you.",
    "attributes-html": "+ <span class=\"attribVal\">28</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Damage": "28",
      "Armor": "6"
    }
  },
  {
    "name": "Soul Booster",
    "cost": 3200,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/soul_booster_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Mana</span>",
    "attributes": {
      "Health": "425",
      "Mana": "425"
    }
  },
  {
    "name": "Hood of Defiance",
    "cost": 1500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/hood_of_defiance_lg.png?3",
    "description-html": "<h1>Active: Barrier</h1> Creates a spell shield that absorbs up to 325 magical damage.  Lasts 12 seconds.",
    "attributes-html": "+ <span class=\"attribVal\">8.5</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">20%</span> <span class=\"attribValText\">Magic Resistance</span>",
    "attributes": {
      "HP Regeneration": "8.5",
      "Magic Resistance": "20%"
    }
  },
  {
    "name": "Eternal Shroud",
    "cost": 3300,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/eternal_shroud_lg.png?3",
    "description-html": "<h1>Active: Shroud</h1> Creates a spell shield that absorbs up to 400 magical damage, converting damage taken into mana.  Lasts 12 seconds.",
    "attributes-html": "+ <span class=\"attribVal\">20%</span> <span class=\"attribValText\">Magic Resistance</span><br />\n+ <span class=\"attribVal\">8.5</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">20%</span> <span class=\"attribValText\">Spell Lifesteal (Heroes)</span><br />\n+ <span class=\"attribVal\">4%</span> <span class=\"attribValText\">Spell Lifesteal (Creeps)</span>",
    "attributes": {
      "Magic Resistance": "20%",
      "HP Regeneration": "8.5",
      "Spell Lifesteal (Heroes)": "20%",
      "Spell Lifesteal (Creeps)": "4%"
    }
  },
  {
    "name": "Divine Rapier",
    "cost": 6000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/rapier_lg.png?3",
    "description-html": "<h1>Passive: Everlasting</h1> <font color='#e03e2e'>Dropped on death, and cannot be destroyed.</font> <br><br>Becomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier.<br />\r\n<br />\r\n<h1> Passive: True Strike</h1> Your attacks cannot miss.",
    "attributes-html": "+ <span class=\"attribVal\">300</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "300"
    }
  },
  {
    "name": "Monkey King Bar",
    "cost": 4975,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/monkey_king_bar_lg.png?3",
    "description-html": "<h1>Passive: Pierce</h1>Grants each attack a 75% chance to pierce through evasion and deal 70 bonus magical damage.",
    "attributes-html": "+ <span class=\"attribVal\">40</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">35</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Damage": "40",
      "Attack Speed": "35"
    }
  },
  {
    "name": "Radiance",
    "cost": 5150,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/radiance_lg.png?3",
    "description-html": "<h1>Toggle: Burn</h1> When active, scorches enemies for 60 magical damage per second, and causes them to miss 17% of their attacks. Illusions deal 35 magical damage per second.<br><br>Radius: 700",
    "attributes-html": "+ <span class=\"attribVal\">60</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "60"
    }
  },
  {
    "name": "Butterfly",
    "cost": 5075,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">35%</span> <span class=\"attribValText\">Evasion</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Agility": "30",
      "Evasion": "35%",
      "Attack Speed": "30",
      "Damage": "25"
    }
  },
  {
    "name": "Daedalus",
    "cost": 5150,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/greater_crit_lg.png?3",
    "description-html": "<h1>Passive: Critical Strike</h1>Grants each attack a 30% chance to deal 225% damage.",
    "attributes-html": "+ <span class=\"attribVal\">88</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "88"
    }
  },
  {
    "name": "Skull Basher",
    "cost": 2950,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/basher_lg.png?3",
    "description-html": "<h1>Passive: Bash</h1> Grants melee heroes a 25% chance on hit to stun the target for 1.5 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%.",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Damage": "25",
      "Strength": "10"
    }
  },
  {
    "name": "Battle Fury",
    "cost": 4130,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/bfury_lg.png?3",
    "description-html": "<h1>Active: Chop Tree</h1> Destroy a target tree.<br><br>Cast Range: %abilitycastrange%<br />\r\n<h1>Passive: Quell</h1> Increases attack damage against non-hero units by 18 for melee heroes, and 6 for ranged. <br />\r\n<h1>Passive: Cleave</h1> Deals 70% of attack damage as physical damage in a cone up to 650 around the target. Deals 50% against creeps. (Melee Only)",
    "attributes-html": "+ <span class=\"attribVal\">55</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">7.5</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">3.25</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Damage": "55",
      "HP Regeneration": "7.5",
      "Mana Regeneration": "3.25"
    }
  },
  {
    "name": "Manta Style",
    "cost": 4600,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/manta_lg.png?3",
    "description-html": "<h1>Active: Mirror Image</h1>Creates 2 images of your hero that last 20 seconds. <br><br>Melee images deal 33% damage and take 350% damage, while Ranged images deal 28% and take 400% damage. <br><br>Cooldown increased by 15 seconds on ranged heroes.<br><br>Dispel Type: <span class=\"GameplayValues GameplayVariable\">Basic Dispel</span>",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">26</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">8%</span> <span class=\"attribValText\">Movement Speed</span>",
    "attributes": {
      "Strength": "10",
      "Agility": "26",
      "Intelligence": "10",
      "Attack Speed": "12",
      "Movement Speed": "8%"
    }
  },
  {
    "name": "Crystalys",
    "cost": 1950,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/lesser_crit_lg.png?3",
    "description-html": "<h1>Passive: Critical Strike</h1>Grants each attack a 30% chance to deal 160% damage.",
    "attributes-html": "+ <span class=\"attribVal\">32</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "32"
    }
  },
  {
    "name": "Dragon Lance",
    "cost": 1900,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/dragon_lance_lg.png?3",
    "description-html": "<h1>Passive: Dragon's Reach</h1> Increases attack range of ranged heroes by 140.",
    "attributes-html": "+ <span class=\"attribVal\">14</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Agility": "14",
      "Strength": "12"
    }
  },
  {
    "name": "Armlet of Mordiggian",
    "cost": 2475,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/armlet_lg.png?3",
    "description-html": "<h1>Toggle: Unholy Strength</h1>When active, Unholy Strength grants +35 damage, +25 strength and +4 armor, but drains 50 health per second.<br><br> You cannot die from the health drain when Unholy Strength is activated, nor from the strength loss when Unholy Strength is deactivated.",
    "attributes-html": "+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "Damage": "15",
      "Attack Speed": "25",
      "Armor": "5",
      "HP Regeneration": "5"
    }
  },
  {
    "name": "Shadow Blade",
    "cost": 3000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/invis_sword_lg.png?3",
    "description-html": "<h1>Active: Shadow Walk</h1>Makes you invisible for 14 seconds, or until you attack or cast a spell.  While Shadow Walk is active, you move 20% faster and can move through units.  <br><br>If attacking to end the invisibility, you gain 175 bonus physical damage on that attack.",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">35</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Damage": "25",
      "Attack Speed": "35"
    }
  },
  {
    "name": "Silver Edge",
    "cost": 5600,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/silver_edge_lg.png?3",
    "description-html": "<h1>Active: Shadow Walk</h1>Makes you invisible for 14 seconds, or until you attack or cast a spell.  While invisible, you move 25% faster and can move through units.  <br><br>Attacking to end the invisibility will deal 175 bonus physical damage to the target, and disable their passive abilities for 4 seconds.",
    "attributes-html": "+ <span class=\"attribVal\">40</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Damage": "40",
      "Attack Speed": "45",
      "Intelligence": "10",
      "Mana Regeneration": "3"
    }
  },
  {
    "name": "Sange and Yasha",
    "cost": 4100,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/sange_and_yasha_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Agility</span><br />\n+Status Resistance <span class=\"attribVal\">25%</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">10%</span> <span class=\"attribValText\">Movement Speed</span><br />\n+Self HP Regen and Lifesteal Amp <span class=\"attribVal\">30%</span>",
    "attributes": {
      "Strength": "16",
      "Agility": "16",
      "16": "25%",
      "10%": "Attack Speed",
      "30%": "Movement Speed"
    }
  },
  {
    "name": "Kaya and Sange",
    "cost": 4100,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/kaya_and_sange_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Intelligence</span><br />\n+Status Resistance <span class=\"attribVal\">25%</span><br />\n+Mana Regen Amplification <span class=\"attribVal\">30%</span><br />\n+Spell Amplification <span class=\"attribVal\">16%</span><br />\n+Self HP Regen and Lifesteal Amp <span class=\"attribVal\">30%</span><br />\n+Spell Lifesteal Amplification <span class=\"attribVal\">30%</span>",
    "attributes": {
      "Strength": "16",
      "Intelligence": "16",
      "30%": "16%"
    }
  },
  {
    "name": "Yasha and Kaya",
    "cost": 4100,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/yasha_and_kaya_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Attack Speed</span><br />\n+Mana Regen Amplification <span class=\"attribVal\">30%</span><br />\n+ <span class=\"attribVal\">10%</span> <span class=\"attribValText\">Movement Speed</span><br />\n+Spell Amplification <span class=\"attribVal\">16%</span><br />\n+Spell Lifesteal Amplification <span class=\"attribVal\">30%</span>",
    "attributes": {
      "Agility": "16",
      "Intelligence": "16",
      "Attack Speed": "16",
      "10%": "30%",
      "16%": "Movement Speed"
    }
  },
  {
    "name": "Satanic",
    "cost": 5050,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/satanic_lg.png?3",
    "description-html": "<h1>Active: Unholy Rage</h1>Increases Lifesteal percentage to 200% for 6 seconds. <br />\r\n<h1>Passive: Lifesteal</h1>Heals the attacker for 25% of attack damage dealt.",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">55</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Strength": "25",
      "Damage": "55"
    }
  },
  {
    "name": "Mjollnir",
    "cost": 5600,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mjollnir_lg.png?3",
    "description-html": "<h1>Active: Static Charge</h1>Places a charged shield on a target unit for 15 seconds which has a 20% chance to release a 200 magical damage shocking bolt at a nearby attacker and 4 additional enemies.<br><br>Range: %abilitycastrange%<br />\r\n<h1>Passive: Chain Lightning</h1>Grants a 30% chance on attack to release a bolt of electricity that leaps between 12 targets within a 650 radius, dealing 170 magical damage to each. Lightning proc pierces evasion.",
    "attributes-html": "+ <span class=\"attribVal\">24</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">65</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Damage": "24",
      "Attack Speed": "65"
    }
  },
  {
    "name": "Eye of Skadi",
    "cost": 5300,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/skadi_lg.png?3",
    "description-html": "<h1>Passive: Cold Attack</h1> Attacks lower enemy movement and attack speed and reduces heals, health regeneration, lifesteal and spell lifesteal by 40% for 3 seconds. Slows enemy ranged units by 50% movement speed and by 50 attack speed. Slows enemy melee units by 25% movement speed and by 25 attack speed. ",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">200</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">200</span> <span class=\"attribValText\">Mana</span>",
    "attributes": {
      "All Attributes": "25",
      "Health": "200",
      "Mana": "200"
    }
  },
  {
    "name": "Sange",
    "cost": 2050,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/sange_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Strength</span><br />\n+Status Resistance <span class=\"attribVal\">16%</span><br />\n+Self HP Regen and Lifesteal Amp <span class=\"attribVal\">24%</span>",
    "attributes": {
      "Strength": "16",
      "24%": "16%"
    }
  },
  {
    "name": "Helm of the Dominator",
    "cost": 2350,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/helm_of_the_dominator_lg.png?3",
    "description-html": "<h1>Active: Dominate</h1>Takes control of one neutral, non-ancient target unit and sets its movement speed to 425 and max health to a minimum of 1000. Also provides the unit with +25 base attack damage, +12 health regen, +4 mana regen and +4 armor. <br><br>Dominated units with a max health of greater than 1000 retain their original max health.  Dominated unit's bounty is set to 200 gold.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "All Attributes": "6",
      "Armor": "6",
      "HP Regeneration": "6"
    }
  },
  {
    "name": "Helm of the Dominator",
    "cost": 6000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/helm_of_the_dominator_2_lg.png?3",
    "description-html": "<h1>Active: Dominate</h1>Takes control of one neutral target unit and sets its movement speed to 425 and max health to a minimum of 1800. Also provides the unit with +25 base attack damage, +12 health regen, +4 mana regen and +4 armor. <br><br>Dominated units with a max health of greater than 1800 retain their original max health.  Dominated unit's bounty is set to 200 gold.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "All Attributes": "20",
      "Armor": "8",
      "HP Regeneration": "8"
    }
  },
  {
    "name": "Maelstrom",
    "cost": 2700,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/maelstrom_lg.png?3",
    "description-html": "<h1>Passive: Chain Lightning</h1>Grants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 140 magical damage to each. Lightning proc pierces evasion.",
    "attributes-html": "+ <span class=\"attribVal\">24</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "24"
    }
  },
  {
    "name": "Gleipnir",
    "cost": 6150,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/gungir_lg.png?3",
    "description-html": "<h1>Active: Eternal Chains</h1>Roots all enemies in a target 450 radius for 2 seconds and deals 220 damage.<br><br>Range: %abilitycastrange% <br />\r\n<br />\r\n<h1>Passive: Chain Lightning</h1>Grants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 160 magical damage to each. Lightning proc pierces evasion.",
    "attributes-html": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Damage": "30",
      "Intelligence": "20",
      "Strength": "12",
      "Agility": "12"
    }
  },
  {
    "name": "Desolator",
    "cost": 3500,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/desolator_lg.png?3",
    "description-html": "<h1>Passive: Corruption</h1> Your attacks reduce the target's armor by 6 for 7 seconds.",
    "attributes-html": "+ <span class=\"attribVal\">55</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Damage": "55"
    }
  },
  {
    "name": "Yasha",
    "cost": 2050,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/yasha_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">8%</span> <span class=\"attribValText\">Movement Speed</span>",
    "attributes": {
      "Agility": "16",
      "Attack Speed": "12",
      "Movement Speed": "8%"
    }
  },
  {
    "name": "Mask of Madness",
    "cost": 1775,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mask_of_madness_lg.png?3",
    "description-html": "<h1>Active: Berserk</h1>Gives 110 attack speed and 30 movement speed, but reduces your armor by 8 and silences you.  Lasts 6 seconds.<br />\r\n<h1>Passive: Lifesteal</h1>Heals the attacker for 20% of attack damage dealt.",
    "attributes-html": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Attack Speed</span>",
    "attributes": {
      "Damage": "10",
      "Attack Speed": "10"
    }
  },
  {
    "name": "Diffusal Blade",
    "cost": 3150,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/diffusal_blade_lg.png?3",
    "description-html": "<h1>Active: Inhibit</h1> Targets an enemy, slowing it for 4 seconds.<br><br>Range: %abilitycastrange%<br />\r\n<h1>Passive: Manabreak</h1>Each attack burns 40 mana from the target, and deals 0.8 physical damage per burned mana. <br><br>Burns 16 mana per attack from melee illusions and 8 mana per attack from ranged illusions.",
    "attributes-html": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span>",
    "attributes": {
      "Agility": "20",
      "Intelligence": "10"
    }
  },
  {
    "name": "Ethereal Blade",
    "cost": 4300,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ethereal_blade_lg.png?3",
    "description-html": "<h1>Active: Ether Blast</h1>Converts the target unit to ethereal form, rendering them immune to physical damage, but unable to attack and 40% more vulnerable to magic damage.  Lasts for 4 seconds on allies and 4 seconds on enemies.<br><br>  Enemy targets are also slowed by 80%, and take 1.5x your primary attribute + 125 as magical damage.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">40</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span>",
    "attributes": {
      "Agility": "40",
      "Strength": "10",
      "Intelligence": "10"
    }
  },
  {
    "name": "Soul Ring",
    "cost": 740,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/soul_ring_lg.png?3",
    "description-html": "<h1>Active: Sacrifice</h1> Consume 170 health to temporarily gain 150 mana.  Lasts 10 seconds.<br><br>If the mana gained cannot fit in your mana pool, it creates a buffer of mana that will be used before your mana pool.",
    "attributes-html": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Strength": "6",
      "Armor": "2"
    }
  },
  {
    "name": "Arcane Boots",
    "cost": 1400,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/arcane_boots_lg.png?3",
    "description-html": "<h1>Active: Replenish Mana</h1>Restores 160 mana to all nearby allies.<br><br>Radius: 1200<br />\r\nMovement speed bonuses from multiple pairs of boots do not stack.",
    "attributes-html": "+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span>",
    "attributes": {
      "Movement Speed": "45",
      "Mana": "250"
    }
  },
  {
    "name": "Octarine Core",
    "cost": 5475,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/octarine_core_lg.png?3",
    "description-html": "<h1>Passive: Cooldown Reduction</h1>Reduces the cooldown time of all spells and items by 25%.",
    "attributes-html": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Cast Range</span><br />\n+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">725</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Cast Range": "250",
      "Health": "425",
      "Mana": "725",
      "Mana Regeneration": "3"
    }
  },
  {
    "name": "Orb of Venom",
    "cost": 275,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/orb_of_venom_lg.png?3",
    "description-html": "<h1>Passive: Poison Attack</h1>Poisons the target, dealing 2 magical damage per second and slowing movement by 13% if the equipped hero is melee, or by 4% if they are ranged. Lasts for 2 seconds."
  },
  {
    "name": "Blight Stone",
    "cost": 300,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/blight_stone_lg.png?3",
    "description-html": "<h1>Passive: Lesser Corruption</h1> Your attacks reduce the target's armor by 2 for 8 seconds."
  },
  {
    "name": "Orb of Corrosion",
    "cost": 925,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/orb_of_corrosion_lg.png?3",
    "description-html": "<h1>Passive: Corrosion</h1>Dealing 3 damage per second, reducing armor by 3, and slowing movement by 13% if the equipped hero is melee, or by 4% if they are ranged.<br><br>Lasts for 3 seconds.",
    "attributes-html": "+ <span class=\"attribVal\">150</span> <span class=\"attribValText\">Health</span>",
    "attributes": {
      "Health": "150"
    }
  },
  {
    "name": "Falcon Blade",
    "cost": 1100,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/falcon_blade_lg.png?3",
    "description-html": "",
    "attributes-html": "+ <span class=\"attribVal\">175</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">1.8</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Health": "175",
      "Mana Regeneration": "1.8",
      "Damage": "10"
    }
  },
  {
    "name": "Mage Slayer",
    "cost": 3450,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mage_slayer_lg.png?3",
    "description-html": "<h1>Passive: Mage Slayer</h1>Places a debuff when you attack enemies, causing them to do 35% less spell damage for 4 seconds.",
    "attributes-html": "+ <span class=\"attribVal\">20%</span> <span class=\"attribValText\">Magic Resistance</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Damage</span>",
    "attributes": {
      "Magic Resistance": "20%",
      "Agility": "20",
      "Damage": "20"
    }
  },
  {
    "name": "Drum of Endurance",
    "cost": 1700,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ancient_janggo_lg.png?3",
    "description-html": "<h1>Active: Endurance</h1> Consumes a charge and gives +45 attack speed and +13% movement speed to nearby allies for 6 seconds. <br><br>Comes with 8 charges.<br><br>Radius: 1200  <br />\r\n<br />\r\n<h1>Passive: Swiftness Aura</h1>Grants 20 movement speed to allies.  <br><br>Radius: 1200",
    "attributes-html": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Intelligence</span>",
    "attributes": {
      "Strength": "6",
      "Intelligence": "6"
    }
  },
  {
    "name": "Medallion of Courage",
    "cost": 1025,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/medallion_of_courage_lg.png?3",
    "description-html": "<h1>Active: Valor</h1> If cast on an ally, grants them the 5 armor, and removing it from the caster. <br><br>If cast on an enemy, reduces 5 armor on both the enemy and the caster. <br><br>Cannot target spell immune enemies.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">1.5</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Armor": "5",
      "Mana Regeneration": "1.5"
    }
  },
  {
    "name": "Solar Crest",
    "cost": 3775,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/solar_crest_lg.png?3",
    "description-html": "<h1>Active: Shine</h1>When cast on an ally, grants them 8 armor, 80 attack speed, and 10% movement speed. When cast on an enemy, removes 8 armor, 80 attack speed, and 10% movement speed.<br><br>Removes the armor from the caster when used. <br><br> Cannot target spell immune enemies.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">1.75</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Armor": "8",
      "All Attributes": "10",
      "Movement Speed": "20",
      "Mana Regeneration": "1.75"
    }
  },
  {
    "name": "Smoke of Deceit",
    "cost": 50,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/smoke_of_deceit_lg.png?3",
    "description-html": "<h1>Use: Disguise</h1> Turns the caster and all allied player-controlled units in a 1200 radius invisible, and grants 15% bonus movement speed for 35 seconds. <br><br>Attacking, or moving within 1025 range of an enemy hero or tower, will break the invisibility. <br><br>Disguise grants invisibility that is immune to True Sight."
  },
  {
    "name": "Tome of Knowledge",
    "cost": 75,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tome_of_knowledge_lg.png?3",
    "description-html": "<h1>Use: Enlighten</h1>Grants you 700 experience plus 135 per tome consumed by your team after the first two.<br><br>Tomes Used By Team: %customval_team_tomes_used%"
  },
  {
    "name": "Veil of Discord",
    "cost": 1525,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/veil_of_discord_lg.png?3",
    "description-html": "<h1>Active: Magic Weakness</h1> Cast a 600 radius blast that causes enemy heroes to take 18% increased damage from spells.<br><br>Range: %abilitycastrange%<br>Duration: 16 seconds. <br />\r\n<br />\r\n<h1>Passive: Basilius Aura</h1>Grants 1.5 mana regeneration to allies.  <br><br>Radius: 1200",
    "attributes-html": "+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">All Attributes</span>",
    "attributes": {
      "All Attributes": "4"
    }
  },
  {
    "name": "Guardian Greaves",
    "cost": 5250,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/guardian_greaves_lg.png?3",
    "description-html": "<h1>Active: Mend</h1>Restores 300 health and 200 mana to nearby allies, and removes most negative effects from the caster.<br><br>Radius: 1200<br>Dispel Type: <span class=\"GameplayValues GameplayVariable\">Basic Dispel</span><br />\r\n<h1>Passive: Guardian Aura</h1> Grants 2.5 health regeneration and 3 armor to allied units. If an allied hero's health falls below 20%, they receive 16 health regeneration and 10 armor. <br><br>Radius: 1200 <br />\r\nMovement speed bonuses from multiple pairs of boots do not stack.",
    "attributes-html": "+ <span class=\"attribVal\">50</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Movement Speed": "50",
      "Mana": "250",
      "Armor": "4"
    }
  },
  {
    "name": "Rod of Atos",
    "cost": 2750,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/rod_of_atos_lg.png?3",
    "description-html": "<h1>Active: Cripple</h1>Roots the target for 2 seconds.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Agility</span>",
    "attributes": {
      "Intelligence": "20",
      "Strength": "10",
      "Agility": "10"
    }
  },
  {
    "name": "Iron Talon",
    "cost": 301,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/iron_talon_lg.png?3",
    "description-html": "<h1>Active: Chop</h1>Targets a non-player enemy unit to remove 40% of its current HP.<br><br>If cast on a tree, instantly destroys it.<br><br>Unit Range: %abilitycastrange%<br>Tree Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Armor</span>",
    "attributes": {
      "Attack Speed": "15",
      "Armor": "2"
    }
  },
  {
    "name": "Abyssal Blade",
    "cost": 6625,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/abyssal_blade_lg.png?3",
    "description-html": "<h1>Active: Overwhelm</h1> Blinks to and stuns a target enemy unit for 2 seconds. <br><br>Pierces Spell Immunity.<br><br>Range: %abilitycastrange%<br />\r\n<h1>Passive: Bash</h1> Grants melee heroes a 25% chance on hit to stun the target for 1.5 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%.<br />\r\n<h1>Passive: Damage Block</h1> Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged.",
    "attributes-html": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span>",
    "attributes": {
      "Damage": "25",
      "Health": "250",
      "HP Regeneration": "10",
      "Strength": "10"
    }
  },
  {
    "name": "Heaven's Halberd",
    "cost": 3650,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/heavens_halberd_lg.png?3",
    "description-html": "<h1>Active: Disarm</h1>Prevents a target from attacking for 3 seconds on melee targets, and 5 seconds on ranged targets.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">20%</span> <span class=\"attribValText\">Evasion</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Strength</span><br />\n+Status Resistance <span class=\"attribVal\">16%</span><br />\n+Self HP Regen and Lifesteal Amp <span class=\"attribVal\">24%</span>",
    "attributes": {
      "Evasion": "20%",
      "Strength": "20",
      "24%": "16%"
    }
  },
  {
    "name": "Tranquil Boots",
    "cost": 925,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png?3",
    "description-html": "<h1>Passive: Break</h1> Whenever you attack a hero or are attacked by any unit, the bonus 14 HP regen is lost and the movement speed bonus is reduced to 45 for 13 seconds.<br />\r\nMovement speed bonuses from multiple pairs of boots do not stack.",
    "attributes-html": "+ <span class=\"attribVal\">70</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">14</span> <span class=\"attribValText\">HP Regeneration</span>",
    "attributes": {
      "Movement Speed": "70",
      "HP Regeneration": "14"
    }
  },
  {
    "name": "Shadow Amulet",
    "cost": 1000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/shadow_amulet_lg.png?3",
    "description-html": "<h1>Active: Fade</h1>Grants invisibility to you or a target allied hero as long as the target unit remains still.  <br><br>Has a 1.25 second fade time, and breaks instantly upon moving. <br><br>There is no cooldown when using this item on yourself.<br><br>Range: %abilitycastrange%"
  },
  {
    "name": "Glimmer Cape",
    "cost": 1950,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png?3",
    "description-html": "<h1>Active: Glimmer</h1> After a 0.6 second delay, grants invisibility and 45% magic resistance to you or a target allied unit for 5 seconds.<br><br>Range: %abilitycastrange%<br><br>Can be cast while channelling.",
    "attributes-html": "+ <span class=\"attribVal\">15%</span> <span class=\"attribValText\">Magic Resistance</span>",
    "attributes": {
      "Magic Resistance": "15%"
    }
  },
  {
    "name": "Pocket Roshan",
    "cost": 1000,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/pocket_roshan_lg.png?3",
    "description-html": ""
  },
  {
    "name": "Ironwood Tree",
    "cost": 151,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ironwood_tree_lg.png?3",
    "description-html": "<h1>Use: Plant Tree</h1> Targets the ground to plant a happy little tree that lasts for 20 seconds.<br><br>Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">All Attributes</span>",
    "attributes": {
      "All Attributes": "6"
    }
  },
  {
    "name": "Fallen Sky",
    "cost": 4751,
    "image-url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/fallen_sky_lg.png?3",
    "description-html": "<h1>Active: Fallen Sky</h1> Transform into a meteor that strikes down at the target area after 0.5 seconds in a 315 AoE, stunning enemies for 2 seconds and dealing impact damage. Continues to deal damage every 1 seconds to enemy units and buildings for 6 seconds.<BR><BR>Building Impact Damage: 75 <BR>Building Over Time Damage: 50 <BR><BR>Non-Building Impact Damage: 150 <BR>Non-Building Over Time Damage: 90<BR><BR> Range: %abilitycastrange%",
    "attributes-html": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Mana Regeneration</span>",
    "attributes": {
      "Strength": "20",
      "Intelligence": "20",
      "HP Regeneration": "15",
      "Mana Regeneration": "10"
    }
  }
];

let attributes = [
  'Strength', 'Agility', 'Intelligence', 'Damage', 'Armor',
  'HP Regeneration', 'Attack Speed', 'Mana Regeneration',
  'Movement Speed', 'All Attributes', 'Health', 'Magic Resistance',
  'Evasion', 'Mana', 'Selected Attribute', 'Projectile Speed',
  'Spell Lifesteal (Heroes)', 'Spell Lifesteal (Creeps)', 'Cast Range'
];


// fetch( '/items.json' ).then( resp => resp.json() ).then( json => { let items = json });

let appData = {
  el: '#app-4',
  data: {
    attributes: attributes,
    items: items,

    filteredAttributes: [],
    filteredItems: items
  },
  watch: {
    filteredAttributes: function(selectedAttributes) {
      this.filteredItems = this.items.filter(
        function (item) {
          if (item.attributes) {
            return item.attributes[selectedAttributes[0]];
          }
        } 
      ); 
    }
  }
};

var app4 = new Vue(appData)
