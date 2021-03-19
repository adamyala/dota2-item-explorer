import json

import requests
from bs4 import BeautifulSoup

BASE_URL = 'https://www.dotabuff.com'

session = requests.Session()
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:86.0) Gecko/20100101 Firefox/86.0'}
session.headers.update(headers)


def process_stats_exceptions(name, stats):
    if name == 'Phase Boots':
        # {"Movement Speed": "45", "Damage (MELEE)": "18", "Damage (RANGED)": "12", "Armor": "4"}
        combined_value = stats["Damage (RANGED)"] + '/' + stats["Damage (MELEE)"]
        stats['Damage'] = combined_value
        del stats["Damage (MELEE)"]
        del stats["Damage (RANGED)"]

    elif name == 'Power Treads':
        # {"Movement Speed": "45", "Selected Attribute": "10", "Attack Speed": "25"}
        stat_value = stats['Selected Attribute']
        stats['Intelligence'] = stats['Strength'] = stats['Agility'] = stat_value
        del stats['Selected Attribute']

    elif name == 'Eternal Shroud':
        # {"Magic Resistance": "20%", "HP Regeneration": "8.5", "Spell Lifesteal (Heroes)": "20.0%", "Spell Lifesteal (Creeps)": "4.0%"}
        stats['Spell Lifesteal (Hero)'] = stats['Spell Lifesteal (Heroes)']
        del stats['Spell Lifesteal (Heroes)']
        stats['Spell Lifesteal (Creep)'] = stats['Spell Lifesteal (Creeps)']
        del stats['Spell Lifesteal (Creeps)']

    return stats


response = session.get(f'{BASE_URL}/items')
soup = BeautifulSoup(response.content, 'html.parser')
item_tds = soup.find_all(class_='cell-xlarge')
item_ids = []
for td in item_tds:
    a = td.next
    item_path = a.attrs['href']
    item_path_parts = item_path.split('/')
    item_id = item_path_parts[-1]
    item_ids.append(item_id)

item_data = []
for item_id in item_ids:
    url = f'{BASE_URL}/items/{item_id}/tooltip'
    response = session.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    item = {}

    name_div = soup.find(class_='name')
    item_name = name_div.text
    item['name'] = item_name

    price_div = soup.find(class_='price')
    price_text = price_div.text
    price_only_digits = price_text.replace(',', '')
    if price_only_digits == 'No Cost':
        item['price'] = 0
    elif price_only_digits == 'Neutral Item':
        continue
    else:
        item['price'] = int(price_only_digits)

    image_div = soup.find(alt=item['name'])
    image_path = image_div.attrs['src']
    item['imageUrl'] = BASE_URL + image_path

    description_div = soup.find(class_='description-block')
    if description_div:
        item['description'] = description_div.text

    stats = {}
    stat_attribute_divs = soup.find_all(class_='stat attribute')
    for stat_attribute_div in stat_attribute_divs:
        stat_label_div = stat_attribute_div.find(class_='label')
        stat_value_div = stat_attribute_div.find(class_='value')
        label_text = stat_label_div.text.lstrip('-')
        stats[label_text] = stat_value_div.text

    processed_stats = process_stats_exceptions(item_name, stats)

    item['statsObject'] = stats
    item['statsArray'] = list(stats.keys())

    builds_into_div = soup.find(class_='item-builds-into')
    if builds_into_div:
        builds_into = []
        item_divs = builds_into_div.find_all('img')
        for item_div in item_divs:
            item_tooltip_path = item_div.attrs['data-tooltip-url']
            _, _, item_id, _ = item_tooltip_path.split('/')
            builds_into.append(item_id)
        item['buildsInto'] = builds_into

    builds_from_div = soup.find(class_='item-builds-from')
    if builds_from_div:
        builds_from = []
        item_divs = builds_from_div.find_all('img')
        for item_div in item_divs:
            item_tooltip_path = item_div.attrs['data-tooltip-url']
            _, _, item_id, _ = item_tooltip_path.split('/')
            builds_from.append(item_id)
        item['buildsFrom'] = builds_from

    item_data.append(item)

items_file = 'static/items.js'
with open(items_file, 'w') as file:
    json.dump(item_data, file)

with open(items_file, 'r') as original:
    data = original.read()
with open(items_file, 'w') as modified:
    modified.write('let items = ' + data)
