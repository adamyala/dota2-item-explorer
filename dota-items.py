import io
import json
from time import sleep

import httpx
from bs4 import BeautifulSoup
from PIL import Image
from selenium import webdriver
from selenium.webdriver.firefox.options import Options


skip_item_ids = [
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


class DotaBuffClient:
    BASE_URL = "https://www.dotabuff.com"

    def __init__(self):
        self.session = httpx.Client()
        headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:86.0) Gecko/20100101 Firefox/86.0"
        }
        self.session.headers.update(headers)

    def _get(self, path):
        url = f"{self.BASE_URL}{path}"
        response = self.session.get(url)
        response_text = response.content
        return response_text

    def item_html(self):
        item_id_html = self._get("/items")
        soup = BeautifulSoup(item_id_html, "html.parser")
        return soup

    def item_ids(self):
        soup = self.item_html()

        item_tds = soup.find_all(class_="cell-xlarge")
        item_ids = []
        for td in item_tds:
            a = td.next
            item_path = a.attrs["href"]
            item_path_parts = item_path.split("/")
            item_id = item_path_parts[-1]
            item_ids.append(item_id)

        return item_ids

    def item_tooltip_html(self, item_id):
        url = f"{self.BASE_URL}/items/{item_id}/tooltip"
        response = self.session.get(url)
        soup = BeautifulSoup(response.content, "html.parser")
        return soup

    def parse_tooltip_name(self, soup):
        name_div = soup.find(class_="name")
        item_name = name_div.text
        return item_name

    def parse_tooltip_price(self, soup):
        price_div = soup.find(class_="price")
        price_text = price_div.text
        price_only_digits = price_text.replace(",", "")

        try:
            price = int(price_only_digits)
        except ValueError:
            return

        return price

    def parse_tooltip_image_url(self, soup):
        name = self.parse_tooltip_name(soup)

        image_div = soup.find(alt=name)
        image_path = image_div.attrs["src"]
        return image_path

    def parse_tooltip_stats(self, soup):
        stats = {}
        stat_attribute_divs = soup.find_all(class_="stat attribute")
        for stat_attribute_div in stat_attribute_divs:
            stat_label_div = stat_attribute_div.find(class_="label")
            stat_value_div = stat_attribute_div.find(class_="value")
            label_text = stat_label_div.text.lstrip("-")
            stats[label_text] = stat_value_div.text

        return stats

    def parse_tooltip_stats_html(self, soup):
        stats_div = soup.find_all(class_="stats")
        if not stats_div:
            return ""

        stats_html = str(stats_div[0])
        return stats_html

    def item_tooltip_data(self, item_id):
        soup = self.item_tooltip_html(item_id)

        name = self.parse_tooltip_name(soup)

        price = self.parse_tooltip_price(soup)
        if not price:
            return

        image_url = self.parse_tooltip_image_url(soup)

        stats = self.parse_tooltip_stats(soup)

        stats_html = self.parse_tooltip_stats_html(soup)

        return name, price, image_url, stats, stats_html

    def get_item_thumbnail(self, item_id, image_url):
        response = self._get(image_url)
        image_stream = io.BytesIO(response)
        image_file = Image.open(image_stream)
        image_file.save(f"./static/images/thumbnails/{item_id}.jpg")


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
            self.stats["Armor"] = 2
            self.stats_html = f"+ {self.stats['Armor']} Armor (Aura)"

        elif self.item_id == "eternal-shroud":
            stat_value = f"{self.stats['Spell Lifesteal (Creeps)']}/{self.stats['Spell Lifesteal (Heroes)']}"
            self.stats["Spell Lifesteal"] = stat_value

            del self.stats["Spell Lifesteal (Heroes)"]
            del self.stats["Spell Lifesteal (Creeps)"]

        elif self.item_id == "guardian-greaves":
            self.stats["HP Regeneration"] = 2.5
            self.stats["Armor"] = 3

            self.stats_html += (
                f"+ {self.stats['HP Regeneration']} HP Regeneration (Aura)<br>"
                f"+ {self.stats['Armor']} Armor (Aura)"
            )

        elif self.item_id == "headdress":
            self.stats["HP Regeneration"] = 2

            self.stats_html = (
                f"+ {self.stats['HP Regeneration']} HP Regeneration (Aura)"
            )

        elif self.item_id == "mask-of-madness":
            self.stats["Lifesteal"] = "20%"

            self.stats_html += f"+ {self.stats['Lifesteal']} Lifesteal"

        elif self.item_id == "mekansm":
            self.stats["HP Regeneration"] = 2

            self.stats_html += (
                f"+ {self.stats['HP Regeneration']} HP Regeneration (Aura)"
            )

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
                "+ 2 HP Regeneration (Aura)<br>" "+ 10% Magic Resistance (Aura)"
            )

        elif self.item_id == "power-treads":
            # {"Movement Speed": "45", "Selected Attribute": "10", "Attack Speed": "25"}
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
            self.stats["Mana Regeneration"] = 1.5

            self.stats_html += (
                f"+ {self.stats['Mana Regeneration']} Mana Regeneration (Aura)"
            )

        elif self.item_id == "satanic":
            self.stats["Lifesteal"] = "25%"

            self.stats_html += f"+ {self.stats['Lifesteal']} Lifesteal"

        elif self.item_id == "veil-of-discord":
            self.stats["Mana Regeneration"] = 1.75

            self.stats_html += (
                f"+ {self.stats['Mana Regeneration']} Mana Regeneration (Aura)"
            )

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


def get_items_json():
    client = DotaBuffClient()

    item_ids = client.item_ids()

    items_json = []
    for item_id in item_ids:
        if item_id in skip_item_ids:
            continue

        item_properties = client.item_tooltip_data(item_id)
        if not item_properties:
            continue

        item = Item(item_id, *item_properties)

        item_json = item.to_json()

        items_json.append(item_json)

    json_file = "items.json"
    items_file = "static/app/items.js"
    with open(items_file, "w") as file:
        json.dump(items_json, file)

    with open(json_file, "w") as file:
        json.dump(items_json, file)

    with open(items_file, "r") as original:
        data = original.read()
    with open(items_file, "w") as modified:
        modified.write("let items = " + data)


def get_image_thumbnails():
    with open("items.json") as file:
        json_data = json.load(file)

    client = DotaBuffClient()

    for item in json_data:
        image_url = item["imageUrl"]
        item_id = item["id"]
        client.get_item_thumbnail(item_id, image_url)


def get_item_tooltips():
    op = Options()
    # disable JavaScript
    op.set_preference("javascript.enabled", False)

    driver = webdriver.Firefox(executable_path="./geckodriver", options=op)
    driver.maximize_window()

    with open("items.json", "r") as file:
        data = json.load(file)

    for item in data:
        url = f'https://www.dotabuff.com/items/{item["id"]}'
        driver.get(url)

        sleep(2)

        element = driver.find_element_by_class_name(
            "embedded-tooltip"
        ).find_element_by_xpath("./..")
        image = element.screenshot_as_png
        image_stream = io.BytesIO(image)
        im = Image.open(image_stream)
        im.save(f'./static/images/tooltips/{item["id"]}.png')

    driver.close()


get_items_json()
get_image_thumbnails()
get_item_tooltips()
