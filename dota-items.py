import io
import json
from time import sleep

from PIL import Image
from selenium import webdriver
from selenium.webdriver.firefox.options import Options

from dotabuff import dotabuff_client


JSON_FILE = "items.json"

ITEM_IDS_TO_SKIP = [
    "aegis-of-the-immortal",
    "aghanims-blessing",
    "aghanims-blessing-roshan",
    "aghanims-shard",
    "aghanims-shard-roshan",
    "bottle",
    "cheese",
    "clarity",
    "dust-of-appearance",
    "gem-of-true-sight",
    "healing-salve",
    "observer-and-sentry-wards",
    "observer-ward",
    "refresher-shard",
    "sentry-ward",
    "smoke-of-deceit",
    "tango",
    "tango-shared",
    "tome-of-knowledge",
    "town-portal-scroll",
]


class Item:
    def __init__(self, item_id, name, price, image_url, stats, stats_html):
        self.item_id = item_id
        self.name = name
        self.price = price
        self.image_url = image_url
        self.stats = stats
        self.stats_html = stats_html

        self.patch_stats()

    def __str__(self):
        return self.name

    def to_json(self):
        stats_array = list(self.stats.keys())

        stats_object = {}
        for key, value in self.stats.items():
            try:
                numeric_value = float(value)
            except ValueError:
                numeric_value = value
            stats_object[key] = numeric_value

        return {
            "id": self.item_id,
            "name": self.name,
            "price": self.price,
            "imageUrl": self.image_url,
            "statsHtml": self.stats_html,
            "statsObject": stats_object,
            "statsArray": stats_array,
        }

    def patch_stats(self):
        if self.item_id == "aether-lens":
            self.stats["Cast Range"] = 250

        elif self.item_id == "assault-cuirass":

            self.stats["Attack Speed"] = 60
            self.stats["Armor"] = 15

            self.stats_html += "+ 30 Attack Speed (Aura)<br>" "+ 5 Armor (Aura)"

        elif self.item_id == "bloodstone":
            stat_value = f"{self.stats['Spell Lifesteal (Creep)']}/{self.stats['Spell Lifesteal (Hero)']}"
            self.stats["Spell Lifesteal"] = stat_value

            del self.stats["Spell Lifesteal (Creep)"]
            del self.stats["Spell Lifesteal (Hero)"]

        elif self.item_id == "boots-of-travel":
            # squash html note about tp scroll cd
            self.stats_html = f"+ {self.stats['Movement Speed']} Movement Speed"

        elif self.item_id == "boots-of-travel-level-2":
            # squash html note about tp scroll cd
            self.stats_html = f"+ {self.stats['Movement Speed']} Movement Speed"

        elif self.item_id == "buckler":
            self.stats_html = "+ 2 Armor (Aura)"

        elif self.item_id == "eternal-shroud":
            stat_value = f"{self.stats['Spell Lifesteal (Creeps)']}/{self.stats['Spell Lifesteal (Heroes)']}"
            self.stats["Spell Lifesteal"] = stat_value

            del self.stats["Spell Lifesteal (Heroes)"]
            del self.stats["Spell Lifesteal (Creeps)"]

        elif self.item_id == "guardian-greaves":
            self.stats_html += (
                f"+ 2.5 HP Regeneration (Aura)<br>"
                f"+ 3 Armor (Aura)"
            )

        elif self.item_id == "headdress":
            self.stats_html = "+ 2 HP Regeneration (Aura)"

        elif self.item_id == "mask-of-madness":
            self.stats["Lifesteal"] = "20%"

            self.stats_html += f"+ {self.stats['Lifesteal']} Lifesteal"

        elif self.item_id == "mekansm":
            self.stats_html += "+ 2.5 HP Regeneration (Aura)"

        elif self.item_id == "morbid-mask":
            self.stats["Lifesteal"] = "15%"

            self.stats_html = f"+ {self.stats['Lifesteal']} Lifesteal"

        elif self.item_id == "phase-boots":
            # {"Movement Speed": "45", "Damage (MELEE)": "18", "Damage (RANGED)": "12", "Armor": "4"}
            stat_value = (
                f"{self.stats['Damage (RANGED)']}/{self.stats['Damage (MELEE)']}"
            )
            self.stats["Damage"] = stat_value
            del self.stats["Damage (MELEE)"]
            del self.stats["Damage (RANGED)"]

        elif self.item_id == "pipe-of-insight":
            self.stats["HP Regeneration"] = 11
            self.stats["Magic Resistance"] = "40%"

            self.stats_html += (
                "+ 2.5 HP Regeneration (Aura)<br>" 
                "+ 10% Magic Resistance (Aura)"
            )

        elif self.item_id == "power-treads":
            stat_value = self.stats["Selected Attribute"]
            self.stats["Intelligence"] = stat_value
            self.stats["Strength"] = stat_value
            self.stats["Agility"] = stat_value
            del self.stats["Selected Attribute"]

        elif self.item_id == "quelling-blade":
            self.stats["Damage"] = "6 / 13"

            self.stats_html = (
                "+ 6 Damage (RANGED) (Creep)<br>" "+ 13 Damage (MELEE) (Creep)"
            )

        elif self.item_id == "ring-of-basilius":
            self.stats_html += "+ 1.0 Mana Regeneration (Aura)"

        elif self.item_id == "satanic":
            self.stats["Lifesteal"] = "25%"

            self.stats_html += f"+ {self.stats['Lifesteal']} Lifesteal"

        elif self.item_id == "veil-of-discord":
            self.stats_html += "+ 1.75 Mana Regeneration (Aura)"

        elif self.item_id == "vladmirs-offering":
            self.stats["Lifesteal"] = "15%"
            self.stats["Mana Regeneration"] = 1.75
            self.stats["Damage"] = "18%"
            self.stats["Armor"] = 3

            self.stats_html += (
                f"+ {self.stats['Lifesteal']} Lifesteal (Aura)<br>"
                f"+ {self.stats['Mana Regeneration']} Mana Regeneration (Aura)<br>"
                f"+ {self.stats['Damage']} Attack Damage (Aura)<br>"
                f"+ {self.stats['Armor']} Armor (Aura)"
            )

        elif self.item_id == "voodoo-mask":
            self.stats["Spell Lifesteal"] = "2% / 10%"
            self.stats_html = (
                "+2% Spell Lifesteal (Creep)<br>" "+10% Spell Lifesteal (Hero)"
            )

        if "All Attributes" in self.stats:
            stat_value = self.stats["All Attributes"]
            self.stats["Intelligence"] = stat_value
            self.stats["Strength"] = stat_value
            self.stats["Agility"] = stat_value

            del self.stats["All Attributes"]

        self.set_aura_flag()
        self.set_disassemble_flag()

        return self.stats

    def set_aura_flag(self):
        aura_items = [
            "assault-cuirass",
            "buckler",
            "guardian-greaves",
            "headdress",
            "mekansm",
            "pipe-of-insight",
            "ring-of-basilius",
            "veil-of-discord",
            "vladmirs-offering",
        ]
        if self.item_id in aura_items:
            self.stats["Aura"] = True

    def set_disassemble_flag(self):
        disassemble_items = [
            "arcane-boots",
            "dragon-lance",
            "echo-sabre",
            "ethereal-blade",
            "heavens-halberd",
            "kaya-and-sange",
            "lotus-orb",
            "mask-of-madness",
            "octarine-core",
            "perseverance",
            "sange-and-yasha",
            "vanguard",
            "yasha-and-kaya",
        ]

        if self.item_id in disassemble_items:
            self.stats["Can Disassemble"] = True


def get_items_json():
    item_ids = dotabuff_client.item_ids()

    items_json = []
    for item_id in item_ids:
        if item_id in ITEM_IDS_TO_SKIP:
            continue

        item_properties = dotabuff_client.item_tooltip_data(item_id)
        if not item_properties:
            continue

        item = Item(item_id, *item_properties)

        item_json = item.to_json()

        items_json.append(item_json)

    with open(JSON_FILE, "w") as file:
        json.dump(items_json, file, indent=4, sort_keys=True)


def get_image_thumbnails():
    with open(JSON_FILE) as file:
        json_data = json.load(file)

    for item in json_data:
        image_url = item["imageUrl"]
        item_id = item["id"]
        dotabuff_client.get_item_thumbnail(item_id, image_url)


def get_item_tooltips():
    with open("items.json", "r") as file:
        data = json.load(file)

    op = Options()
    # disable JavaScript
    op.set_preference("javascript.enabled", False)

    with webdriver.Firefox(executable_path="./geckodriver", options=op) as driver:
        driver.maximize_window()

        for item in data:
            url = f'https://www.dotabuff.com/items/{item["id"]}'
            driver.get(url)

            sleep(2)

            element = driver.find_element_by_class_name("embedded-tooltip")
            parent_element = element.find_element_by_xpath("./..")
            image = parent_element.screenshot_as_png
            image_stream = io.BytesIO(image)
            image_file = Image.open(image_stream)
            image_file.save(f'./static/images/tooltips/{item["id"]}.png')


get_items_json()
get_image_thumbnails()
get_item_tooltips()
