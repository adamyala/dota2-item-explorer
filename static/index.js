let appData = {
    el: '#app',
    data: {
        active: false,

        items: items,

        filterStats: [],
        sortPrice: null,

        filteredItems: items,
    },
    computed: {
        stats: function () {
            let stats = [];

            this.items.forEach(
                function (item) {
                    if (!item.statsArray) {
                        return
                    }
                    stats = stats.concat(item.statsArray);
                }
            )

            let uniqueStats = new Set(stats);
            let uniqueStatArray = Array.from(uniqueStats);

            uniqueStatArray.sort();

            return uniqueStatArray;
        }
    },
    methods: {
        filterItemsByStat: function (selectedStats) {
            this.filteredItems = this.sortItems(this.items);

            this.filteredItems = this.filteredItems.filter(
                function (item) {
                    if (!selectedStats) {
                        return item
                    }

                    if (!item.statsArray) {
                        return
                    }

                    let filterIsSubset = selectedStats.every(val => item.statsArray.includes(val));
                    if (filterIsSubset) {
                        return item
                    }
                }
            );

        },
        sortItemsByPrice: function () {
            this.filteredItems = this.sortItems(this.filteredItems);
        },
        sortItems: function (items) {
            if (this.sortPrice === "false") {
                return items.sort(
                    function (a, b) {
                        return a.price - b.price
                    }
                )
            } else {
                return items.sort(
                    function (a, b) {
                        return b.price - a.price
                    }
                )
            }
        },
        mouseOver: function () {
            this.active = !this.active;
        },
        mouseOut: function () {
            this.active = !this.active;
        }
    }
};

let app = new Vue(appData)

app.$watch('filterStats', app.filterItemsByStat)

app.$watch('sortPrice', app.sortItemsByPrice)
