import json

import requests
from bs4 import BeautifulSoup
from PIL import Image


skip_item_ids = [
    "aegis-of-the-immortal",
    "aghanims-blessing",
    "aghanims-shard",
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
        self.session = requests.Session()
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
        image_url = self.BASE_URL + image_path
        return image_url

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
        if self.name == "Aether Lens":
            self.stats["Cast Range"] = 250

        elif self.name == "Assault Cuirass":
            self.stats["Aura"] = True

            self.stats["Attack Speed"] = 60
            self.stats["Armor"] = 15

            self.stats_html += "+ 30 Attack Speed (Aura)" "<br>+ 5 Armor (Aura)"

        elif self.name == "Bloodstone":
            stat_value = (
                self.stats["Spell Lifesteal (Creep)"]
                + " / "
                + self.stats["Spell Lifesteal (Hero)"]
            )
            self.stats["Spell Lifesteal"] = stat_value

            del self.stats["Spell Lifesteal (Creep)"]
            del self.stats["Spell Lifesteal (Hero)"]

        elif self.name == "Buckler":
            self.stats["Aura"] = True
            self.stats["Armor"] = 2
            self.stats_html = "+ 2 Armor (Aura)"

        elif self.name == "Eternal Shroud":
            # {"Magic Resistance": "20%", "HP Regeneration": "8.5", "Spell Lifesteal (Heroes)": "20.0%", "Spell Lifesteal (Creeps)": "4.0%"}
            stat_value = (
                self.stats["Spell Lifesteal (Creeps)"]
                + " / "
                + self.stats["Spell Lifesteal (Heroes)"]
            )
            self.stats["Spell Lifesteal"] = stat_value

            del self.stats["Spell Lifesteal (Heroes)"]
            del self.stats["Spell Lifesteal (Creeps)"]

        elif self.name == "Guardian Greaves":
            self.stats["Aura"] = True
            self.stats["HP Regeneration"] = 2.5
            self.stats["Armor"] = 3

            self.stats_html += "+ 2.5 HP Regeneration (Aura)<br>" "+ 3 Armor (Aura)"

        elif self.name == "Headdress":
            self.stats["Aura"] = True
            self.stats["HP Regeneration"] = 2

            self.stats_html = "+ 2 HP Regeneration (Aura)"

        elif self.name == "Mask of Madness":
            self.stats["Lifesteal"] = "20%"

            self.stats_html += "+ 20% Lifesteal"

        elif self.name == "Mekansm":
            self.stats["Aura"] = True
            self.stats["HP Regeneration"] = 2

            self.stats_html += "+ 2 HP Regeneration (Aura)"

        elif self.name == "Morbid Mask":
            self.stats["Lifesteal"] = "15%"

            self.stats_html = "+ 15% Lifesteal"

        elif self.name == "Phase Boots":
            # {"Movement Speed": "45", "Damage (MELEE)": "18", "Damage (RANGED)": "12", "Armor": "4"}
            stat_value = (
                self.stats["Damage (RANGED)"] + " / " + self.stats["Damage (MELEE)"]
            )
            self.stats["Damage"] = stat_value
            del self.stats["Damage (MELEE)"]
            del self.stats["Damage (RANGED)"]

        elif self.name == "Pipe of Insight":
            self.stats["Aura"] = True
            self.stats["HP Regeneration"] = 10.5
            self.stats["Magic Resistance"] = "~40%"

            self.stats_html += (
                "+ 2 HP Regeneration (Aura)<br>" "+ 10% Magic Resistance (Aura)"
            )

        elif self.name == "Power Treads":
            # {"Movement Speed": "45", "Selected Attribute": "10", "Attack Speed": "25"}
            stat_value = self.stats["Selected Attribute"]
            self.stats["Intelligence"] = self.stats["Strength"] = self.stats[
                "Agility"
            ] = stat_value
            del self.stats["Selected Attribute"]

        elif self.name == "Quelling Blade":
            self.stats["Damage"] = "6 / 13"

            self.stats_html = (
                "+ 6 Damage (RANGED) (Creep)<br>" "+ 13 Damage (MELEE) (Creep)"
            )

        elif self.name == "Ring of Basilius":
            self.stats["Aura"] = True
            self.stats["Mana Regeneration"] = 1.4

            self.stats_html += "+ 1.4 Mana Regeneration (Aura)"

        elif self.name == "Satanic":
            self.stats["Lifesteal"] = "25%"

            self.stats_html += "+ 25% Lifesteal"

        elif self.name == "Veil of Discord":
            self.stats["Aura"] = True
            self.stats["Mana Regeneration"] = 1.5

            self.stats_html += "+ 1.5 Mana Regeneration (Aura)"

        elif self.name == "Vladmir's Offering":
            self.stats["Aura"] = True
            self.stats["Armor"] = 2
            self.stats["Damage"] = "18%"
            self.stats["Lifesteal"] = "15%"
            self.stats["Mana Regeneration"] = 1.4

            self.stats_html += (
                "+ 15% Lifesteal (Aura)<br>"
                "+ 1.4 Mana Regeneration (Aura)<br>"
                "+ 18% Attack Damage (Aura)<br>"
                "+ 2 Armor (Aura)"
            )

        elif self.name == "Voodoo Mask":
            self.stats["Spell Lifesteal"] = "2% / 10%"
            self.stats_html = (
                "+2% Spell Lifesteal (Creep)<br>+10% Spell Lifesteal (Hero)"
            )

        if "All Attributes" in self.stats:
            self.stats["Intelligence"] = self.stats["Strength"] = self.stats[
                "Agility"
            ] = self.stats["All Attributes"]
            del self.stats["All Attributes"]

        return self.stats


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


def get_item_tooltips():
    from selenium import webdriver
    from selenium.webdriver.firefox.options import Options

    # object of Options class
    op = Options()
    # disable JavaScript
    op.set_preference("javascript.enabled", False)
    # set geckodriver.exe path
    driver = webdriver.Firefox(executable_path="./geckodriver", options=op)
    driver.maximize_window()

    with open("items.json", "r") as file:
        data = json.load(file)

    for item in data:
        url = f'https://www.dotabuff.com/items/{item["id"]}'
        driver.get(url)

        from time import sleep

        sleep(2)

        element = driver.find_element_by_class_name("embedded-tooltip")
        location = element.location
        size = element.size
        driver.save_screenshot("pageImage.png")

        # crop image
        # x = location['x']
        # y = location['y']
        x = 2260
        y = 370
        width = x + size["width"] * 2.1
        height = y + size["height"] * 2.2
        im = Image.open("pageImage.png")
        im = im.crop((int(x), int(y), int(width), int(height)))
        im.save(f'./static/images/{item["id"]}.png')

    driver.close()


get_items_json()
# get_item_tooltips()
