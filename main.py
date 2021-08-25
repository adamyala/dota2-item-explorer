import io
import json
from time import sleep

from PIL import Image
from selenium import webdriver
from selenium.webdriver.firefox.options import Options

from dota_client import dotabuff_client
from dota_item_model import Item


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


def get_items_json():
    item_ids = dotabuff_client.item_ids()

    items_json = []
    computed_items_json = []
    for item_id in item_ids:
        if item_id in ITEM_IDS_TO_SKIP:
            continue

        item_properties = dotabuff_client.item_tooltip_data(item_id)
        if not item_properties:
            continue

        item = Item(item_id, *item_properties)

        item_json = item.to_json()
        items_json.append(item_json)

        item.add_computed_stats()
        item_json = item.to_json()
        computed_items_json.append(item_json)

    with open(JSON_FILE, "w") as file:
        json.dump(items_json, file, indent=4, sort_keys=True)

    with open('computed-' + JSON_FILE, "w") as file:
        json.dump(computed_items_json, file, indent=4, sort_keys=True)


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
create_computed_items_json()
get_image_thumbnails()
get_item_tooltips()
