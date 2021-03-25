import {items} from './items.js'

let appData = {
    el: '#app',
    components: {
        'hello': window.httpVueLoader('static/app/components/Hello.vue')
    },
    data: {
        activeTooltip: null,

        items: items,

        filterStats: [],
        sortPrice: null,
        sortName: null,
        sortStat: null,
        sortStatKey: null,
        sortPriceStat: null,
        sortPriceStatKey: null,

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
        sortItems: function (event) {
            if (!event) {
                return
            }

            if (event.target.id === 'name-header') {
                this.sortItemsByName()
            } else if (event.target.id === 'price-header') {
                this.sortItemsByPrice()
            } else if (event.target.id.startsWith('cost-per')) {
                let parts = event.target.id.split('-')
                this.sortPriceStatKey = parts.pop()
                this.sortItemsByPriceStat()
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
            this.sortPriceStat = null;
            this.sortPriceStatKey = null;

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
            this.sortPriceStat = null;
            this.sortPriceStatKey = null;

            this.sortStat = !this.sortStat;

            this.filteredItems = this.statSort(this.filteredItems);
        },
        sortItemsByPriceStat: function (event) {
            this.sortName = null;
            this.sortPrice = null;
            this.sortStat = null;
            this.sortStatKey = null;

            this.sortPriceStat = !this.sortPriceStat;

            this.filteredItems = this.priceStatSort(this.filteredItems);
        },
        statSort: function (items) {
            let highToLow = function (stat, nonNumericToNumeric) {
                return function (a, b) {
                    let aStat = nonNumericToNumeric(a.statsObject[stat]);
                    let bStat = nonNumericToNumeric(b.statsObject[stat]);
                    return aStat - bStat;
                }
            }
            let lowToHigh = function (stat, nonNumericToNumeric) {
                return function (a, b) {
                    let aStat = nonNumericToNumeric(a.statsObject[stat]);
                    let bStat = nonNumericToNumeric(b.statsObject[stat]);
                    return bStat - aStat;
                }
            }

            if (this.sortStat === false) {
                return items.sort(highToLow(this.sortStatKey, this.nonNumericToNumeric))
            } else {
                return items.sort(lowToHigh(this.sortStatKey, this.nonNumericToNumeric))
            }
        },
        priceStatSort: function (items) {
            let highToLow = function (stat, nonNumericToNumeric) {
                return function (a, b) {
                    let aStat = a.price / nonNumericToNumeric(a.statsObject[stat]);
                    let bStat = b.price / nonNumericToNumeric(b.statsObject[stat]);
                    return aStat - bStat;
                }
            }
            let lowToHigh = function (stat, nonNumericToNumeric) {
                return function (a, b) {
                    let aStat = a.price / nonNumericToNumeric(a.statsObject[stat]);
                    let bStat = b.price / nonNumericToNumeric(b.statsObject[stat]);
                    return bStat - aStat;
                }
            }

            if (this.sortPriceStat === false) {
                return items.sort(highToLow(this.sortPriceStatKey, this.nonNumericToNumeric))
            } else {
                return items.sort(lowToHigh(this.sortPriceStatKey, this.nonNumericToNumeric))
            }
        },
        nonNumericToNumeric: function (value) {
            if (!value) {
                return value
            }

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
        },
        mouseOver: function (event) {
            this.activeTooltip = event.target.id;
        },
        mouseOut: function () {
            this.activeTooltip = null;
        }
    }
};

let app = new Vue(appData)

app.$watch('filterStats', app.filterItemsByStat)
