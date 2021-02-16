import json
from datetime import datetime

import requests
from bs4 import BeautifulSoup

DOTA_2_ITEMS_JSON_URL = 'http://www.dota2.com/jsfeed/itemdata'
ITEM_IMAGE_TEMPLATE = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/{}'

"""
Steps in this script:
    1. Download item data from dota2.com. We save this with the date since this data can change any time.
    2. Parse text fields in the json so we're dealing with just json objects 
"""


def download_unprocessed_item_data():
    response = requests.get(url=DOTA_2_ITEMS_JSON_URL)
    unprocessed_items_json = response.json()

    today_date_string = str(datetime.today().date())
    unprocessed_json_file_name = f'dota-items-unprocessed-json-{today_date_string}.json'

    with open(file=unprocessed_json_file_name, mode='w') as file:
        json.dump(unprocessed_items_json, file)

    return unprocessed_json_file_name


def process_item_data(unprocessed_json_file_name):
    with open(file=unprocessed_json_file_name) as file:
        unprocessed_items_json = json.load(file)

    parsed_items_json = []

    item_data = unprocessed_items_json['itemdata']
    for _, item_json in item_data.items():
        item_name = item_json['dname']
        parsed_item = {'name': item_name}

        item_cost = item_json['cost']
        if item_cost == 0:
            continue
        parsed_item['cost'] = item_cost

        is_consumable = item_json['qual'] == 'consumable'
        if is_consumable:
            continue

        ids_to_skip = [
            30, # gem
            182,  # stout_shield
            218,  # ward_dispenser
            304,  # ironwood_tree
            371,  # fallen_sky
            655, # grandmasters_glaive
            609, # aghanims_shard
            1032, # pocket_roshan
        ]
        if item_json['id'] in ids_to_skip:
            continue

        item_image = item_json['img']
        image_url = ITEM_IMAGE_TEMPLATE.format(item_image)
        parsed_item['imageUrl'] = image_url

        item_description = item_json['desc']
        parsed_item['descriptionHtml'] = item_description

        attributes = item_json['attrib']
        if attributes:
            parsed_item['attributesHtml'] = attributes

            attribute_pairs = parse_attributes(attributes)
            parsed_item['attributesObject'] = attribute_pairs

            attribute_list = [key for key in attribute_pairs]
            parsed_item['attributesArray'] = attribute_list

        parsed_items_json.append(parsed_item)

    return parsed_items_json


def write_processed_data(processed_data):
    today_date_string = str(datetime.today().date())
    processed_json_file_name = f'dota-items-processed-json-{today_date_string}.json'
    with open(processed_json_file_name, 'w') as file:
        json.dump(processed_data, file)


def parse_attributes(attributes):
    attributes_without_spans = [
        'Spell Amplification ',
        'Damage (MELEE)',
        'Damage (RANGED)',
        'Spell Lifesteal Amplification',
        'Mana Regen Amplification',
        'Spell Lifesteal (Hero)',
        'Spell Lifesteal (Creep)',
        'Status Resistance',
        'Self HP Regen and Lifesteal Amp',
    ]
    for attribute in attributes_without_spans:
        attributes = attributes.replace(attribute, f'<span class=\"attribValText\">{attribute}<\/span>')

    # unescape backslashes
    attributes = attributes.encode('utf-8').decode('unicode_escape')
    # remove html cruft
    attributes = attributes.replace('+', '').replace('\\', '').replace('\n', '')

    soup = BeautifulSoup(attributes, 'html.parser')

    attribute_pairs = {}
    spans = soup.find_all('span')
    span_iterable = iter(spans)
    span_pairs = list(zip(span_iterable, span_iterable))

    for span_one, span_two in span_pairs:
        span_one_class = span_one.attrs['class'][0]
        if span_one_class == 'attribVal':
            value_span, attribute_span = span_one, span_two
        else:
            value_span, attribute_span = span_two, span_one

        value = value_span.text
        attribute = attribute_span.text
        attribute_pairs[attribute] = value

    return attribute_pairs


def main():
    unprocessed_file = download_unprocessed_item_data()
    processed_data = process_item_data(unprocessed_file)
    write_processed_data(processed_data)


main()
