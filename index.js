let appData = {
  el: '#app',
  data: {
    attributes: attributes,
    items: items,

    filteredAttributes: [],
    filteredItems: items
  }
};

var app = new Vue(appData)

app.$watch('filteredAttributes', function (selectedAttributes) {
  this.filteredItems = this.items.filter(
    function (item) {
      // debugger;
      if (!item.attributesArray) {
        return
      }

      let filterIsSubset = selectedAttributes.every(val => item.attributesArray.includes(val));
      if (filterIsSubset) {
        return item
      }
    }
  );
})