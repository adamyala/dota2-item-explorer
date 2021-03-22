let appData = {
    el: '#app',
    data: {
        active: false,

        items: items,

        filterStats: [],
        sortPrice: null,
        sortName: null,
        sortStat: null,
        sortStatKey: null,

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
            this.filteredItems = this.items.filter(
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

            this.sortItems();
        },
        sortItems: function(event) {
            if (!event) {
                return
            }

            if (event.target.id === 'name-header') {
                this.sortItemsByName()
            } else if (event.target.id === 'price-header') {
                this.sortItemsByPrice()
            } else {
                this.sortStatKey = event.target.id
                this.sortItemsByStat()
            }
        },
        sortItemsByPrice: function (event) {
            this.sortName = null;
            this.sortStat = null;
            this.sortStatKey = null;

            this.sortPrice = !this.sortPrice;

            this.filteredItems = this.priceSort(this.filteredItems);
        },
        priceSort: function (items) {
            if (this.sortPrice === false) {
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
        sortItemsByName: function (event) {
            this.sortPrice = null;
            this.sortStat = null;
            this.sortStatKey = null;

            this.sortName = !this.sortName;

            this.filteredItems = this.nameSort(this.filteredItems);
        },
        nameSort: function (items) {
            if (this.sortName === false) {
                return items.sort(
                    function (a, b) {
                        return a.name > b.name
                    }
                )
            } else {
                return items.sort(
                    function (a, b) {
                        return a.name < b.name
                    }
                )
            }
        },
        sortItemsByStat: function (event) {
            this.sortName = null;
            this.sortPrice = null;

            this.sortStat = !this.sortStat;

            this.filteredItems = this.statSort(this.filteredItems);
        },
        statSort: function (items) {
            let nonNumericToNumeric = function (value) {
                let stringValue = value.toString();
                let isPercent = stringValue.indexOf('%');
                let isMultiple = stringValue.indexOf('/');

                if (isPercent !== -1) {
                    let parts = stringValue.split('%')
                    return parseInt(parts[0])
                } else if (isMultiple !== -1) {
                    let parts = stringValue.split('/')
                    return parseInt(parts[0])
                } else {
                    return value
                }
            }
            let highToLow = function (stat) {
                return function (a, b) {
                    let aStat = nonNumericToNumeric(a.statsObject[stat]);
                    let bStat = nonNumericToNumeric(b.statsObject[stat]);
                    return aStat - bStat;
                }
            }
            let lowToHigh = function (stat) {
                return function (a, b) {
                    let aStat = nonNumericToNumeric(a.statsObject[stat]);
                    let bStat = nonNumericToNumeric(b.statsObject[stat]);
                    return bStat - aStat;
                }
            }

            if (this.sortStat === false) {
                return items.sort(highToLow(this.sortStatKey))
            } else {
                return items.sort(lowToHigh(this.sortStatKey))
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
