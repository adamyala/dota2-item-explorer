import httpx
import io
from bs4 import BeautifulSoup
from PIL import Image


class DotabuffClient:
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


dotabuff_client = DotabuffClient()
