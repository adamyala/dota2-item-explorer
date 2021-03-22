import json

import requests
from bs4 import BeautifulSoup


skip_item_ids = ['aghanims-blessing', 'aghanims-shard', 'town-portal-scroll', 'refresher-shard', 'tango-shared',
                 'tome-of-knowledge', 'cheese', 'aegis-of-the-immortal', 'gem-of-true-sight', 'tango', 'healing-salve',
                 'observer-ward', 'observer-and-sentry-wards', 'sentry-ward', 'smoke-of-deceit', 'clarity',
                 'dust-of-appearance', 'bottle']


class DotaBuffClient:
    BASE_URL = 'https://www.dotabuff.com'

    def __init__(self):
        self.session = requests.Session()
        headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:86.0) Gecko/20100101 Firefox/86.0'}
        self.session.headers.update(headers)

    def _get(self, path):
        url = f'{self.BASE_URL}{path}'
        response = self.session.get(url)
        response_text = response.content
        return response_text

    def item_html(self):
        item_id_html = self._get('/items')
        soup = BeautifulSoup(item_id_html, 'html.parser')
        return soup

    def item_ids(self):
        soup = self.item_html()

        item_tds = soup.find_all(class_='cell-xlarge')
        item_ids = []
        for td in item_tds:
            a = td.next
            item_path = a.attrs['href']
            item_path_parts = item_path.split('/')
            item_id = item_path_parts[-1]
            item_ids.append(item_id)

        return item_ids

    def item_tooltip_html(self, item_id):
        url = f'{self.BASE_URL}/items/{item_id}/tooltip'
        response = self.session.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        return soup

    def parse_tooltip_name(self, soup):
        name_div = soup.find(class_='name')
        item_name = name_div.text
        return item_name

    def parse_tooltip_price(self, soup):
        price_div = soup.find(class_='price')
        price_text = price_div.text
        price_only_digits = price_text.replace(',', '')

        try:
            price = int(price_only_digits)
        except ValueError:
            return

        return price

    def parse_tooltip_image_url(self, soup):
        name = self.parse_tooltip_name(soup)

        image_div = soup.find(alt=name)
        image_path = image_div.attrs['src']
        image_url = self.BASE_URL + image_path
        return image_url

    def parse_tooltip_stats(self, soup):
        stats = {}
        stat_attribute_divs = soup.find_all(class_='stat attribute')
        for stat_attribute_div in stat_attribute_divs:
            stat_label_div = stat_attribute_div.find(class_='label')
            stat_value_div = stat_attribute_div.find(class_='value')
            label_text = stat_label_div.text.lstrip('-')
            stats[label_text] = stat_value_div.text

        return stats

    def parse_tooltip_stats_html(self, soup):
        stats_div = soup.find_all(class_='stats')
        if not stats_div:
            return ''

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
        return {
            'id': self.item_id,
            'name': self.name,
            'price': self.price,
            'imageUrl': self.image_url,
            'statsObject': self.stats,
            'statsHtml': self.stats_html,
            'statsArray': list(self.stats.keys()),
        }

    def patch_stats(self):
        if self.name == 'Aether Lens':
            self.stats["Cast Range"] = "250"

        elif self.name == 'Assault Cuirass':
            self.stats['Aura'] = True

            self.stats["Attack Speed"] = "60"
            self.stats["Armor"] = "15"

            self.stats_html += '+ 30 Attack Speed (Aura)' \
                              '<br>+ 5 Armor (Aura)'

        elif self.name == 'Bloodstone':
            stat_value = self.stats['Spell Lifesteal (Creep)'] + ' / ' + self.stats['Spell Lifesteal (Hero)']
            self.stats['Spell Lifesteal'] = stat_value

            del self.stats['Spell Lifesteal (Creep)']
            del self.stats['Spell Lifesteal (Hero)']

        elif self.name == 'Buckler':
            self.stats['Aura']: True
            self.stats['Armor']: 2
            self.stats_html = '+ 2 Armor (Aura)'

        elif self.name == 'Eternal Shroud':
            # {"Magic Resistance": "20%", "HP Regeneration": "8.5", "Spell Lifesteal (Heroes)": "20.0%", "Spell Lifesteal (Creeps)": "4.0%"}
            stat_value = self.stats['Spell Lifesteal (Creeps)'] + ' / ' + self.stats['Spell Lifesteal (Heroes)']
            self.stats['Spell Lifesteal'] = stat_value

            del self.stats['Spell Lifesteal (Heroes)']
            del self.stats['Spell Lifesteal (Creeps)']

        elif self.name == 'Headdress':
            self.stats['Aura'] = True
            self.stats['HP Regeneration'] = 2

            self.stats_html = '+ 2 HP Regeneration (Aura)'

        elif self.name == 'Mask of Madness':
            self.stats['Lifesteal'] = '20%'

            self.stats_html += '+ 20% Lifesteal'

        elif self.name == 'Mekansm':
            self.stats['Aura'] = True
            self.stats['HP Regeneration'] = '2'

            self.stats_html += '+ 2 HP Regeneration (Aura)'

        elif self.name == 'Morbid Mask':
            self.stats['Lifesteal'] = '15%'

            self.stats_html = '+ 15% Lifesteal'

        elif self.name == 'Phase Boots':
            # {"Movement Speed": "45", "Damage (MELEE)": "18", "Damage (RANGED)": "12", "Armor": "4"}
            stat_value = self.stats["Damage (RANGED)"] + ' / ' + self.stats["Damage (MELEE)"]
            self.stats['Damage'] = stat_value
            del self.stats["Damage (MELEE)"]
            del self.stats["Damage (RANGED)"]

        elif self.name == 'Pipe of Insight':
            self.stats['Aura'] = True
            self.stats['HP Regeneration'] = '10.5'
            self.stats["Magic Resistance"] = "~40%"

            self.stats_html += '+ 2 HP Regeneration (Aura)' \
                              '<br>+ 10% Magic Resistance (Aura)'

        elif self.name == 'Power Treads':
            # {"Movement Speed": "45", "Selected Attribute": "10", "Attack Speed": "25"}
            stat_value = self.stats['Selected Attribute']
            self.stats['Intelligence'] = self.stats['Strength'] = self.stats['Agility'] = stat_value
            del self.stats['Selected Attribute']

        elif self.name == 'Quelling Blade':
            self.stats['Damage'] = '6 / 13'

            self.stats_html = '+ 13 Damage (MELEE) (Creep)<br>' \
                              '+ 6 Damage (RANGED) (Creep)'

        elif self.name == 'Ring of Bassilius':
            self.stats['Mana Regeneration'] = 1.4

            self.stats_html = '+ 1.4 Mana Regeneration'

        elif self.name == 'Veil of Discord':
            self.stats['Mana Regeneration'] = 1.4

            self.stats_html += '+ 1.4 Mana Regeneration'

        elif self.name == 'Vladmir\'s Offering':
            self.stats['Aura'] = True
            self.stats['Armor'] = 2
            self.stats['Damage'] = '18%'
            self.stats['Lifesteal'] = '15%'
            self.stats['Mana Regeneration'] = 1.4

            self.stats_html += '+ 15% Lifesteal (Aura)<br>' \
                               '+ 1.4 Mana Regeneration (Aura)<br>' \
                               '+ 18% Attack Damage (Aura)<br>' \
                               '+ 2 Armor (Aura)'

        elif self.name == 'Voodoo Mask':
            self.stats['Spell Lifesteal'] = '2% / 10%'
            self.stats_html = '+2% Spell Lifesteal (Creep)<br>+10% Spell Lifesteal (Hero)'

        if 'All Attributes' in self.stats:
            self.stats['Intelligence'] = self.stats['Strength'] = self.stats['Agility'] = self.stats['All Attributes']
            del self.stats['All Attributes']

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

    items_file = 'static/items.js'
    with open(items_file, 'w') as file:
        json.dump(items_json, file)

    with open(items_file, 'r') as original:
        data = original.read()
    with open(items_file, 'w') as modified:
        modified.write('let items = ' + data)


get_items_json()
