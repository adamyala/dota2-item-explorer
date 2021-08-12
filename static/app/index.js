let appData = {
    el: '#app',
    data: {
        activeTooltip: null,

        items: [],

        filterStats: [],
        sortPrice: null,
        sortName: null,
        sortStat: null,
        sortStatKey: null,
        sortPriceStat: null,
        sortPriceStatKey: null,

        filteredItems: [],
    },
    computed: {
        stats: function () {
            let stats = []

            this.items.forEach(
                function (item) {
                    if (!item.statsArray) {
                        return
                    }
                    stats = stats.concat(item.statsArray)
                }
            )

            let uniqueStats = new Set(stats)
            let uniqueStatArray = Array.from(uniqueStats)

            uniqueStatArray.sort()

            return uniqueStatArray
        }
    },
    mounted() {
        this.fetchItems()
    },
    methods: {
        fetchItems: function () {
            fetch('items.json')
                .then(response => response.json())
                .then(data => this.items = this.filteredItems = data)
        },
        filterItemsByStat: function (selectedStats) {
            let filterByStat = (item) => {
                if (!selectedStats) {
                    return item
                }

                if (!item.statsArray) {
                    return
                }

                let filterIsSubset = selectedStats.every(val => item.statsArray.includes(val))
                if (filterIsSubset) {
                    return item
                }
            }

            this.filteredItems = this.items.filter(filterByStat)

            this.sortItems()
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
            this.sortName = null
            this.sortStat = null
            this.sortStatKey = null

            this.sortPrice = !this.sortPrice

            this.filteredItems = this.priceSort(this.filteredItems)
        },
        priceSort: function (items) {
            let sortCheapest = (a, b) => { return a.price - b.price }

            if (this.sortPrice === false) {
                return items.sort(sortCheapest)
            } else {
                return items.sort(sortCheapest).reverse()
            }
        },
        sortItemsByName: function (event) {
            this.sortPrice = null
            this.sortStat = null
            this.sortStatKey = null
            this.sortPriceStat = null
            this.sortPriceStatKey = null

            this.sortName = !this.sortName

            this.filteredItems = this.nameSort(this.filteredItems)
        },
        nameSort: function (items) {
            function sortAlphabetically(a, b){ return a.name > b.name }

            if (this.sortName === false) {
                return items.sort(sortAlphabetically)
            } else {
                return items.sort(sortAlphabetically).reverse()
            }
        },
        sortItemsByStat: function (event) {
            this.sortName = null
            this.sortPrice = null
            this.sortPriceStat = null
            this.sortPriceStatKey = null

            this.sortStat = !this.sortStat

            this.filteredItems = this.statSort(this.filteredItems)
        },
        sortItemsByPriceStat: function (event) {
            this.sortName = null
            this.sortPrice = null
            this.sortStat = null
            this.sortStatKey = null

            this.sortPriceStat = !this.sortPriceStat

            this.filteredItems = this.priceStatSort(this.filteredItems)
        },
        statSort: function (items) {
            let sortHighToLow = (a, b) => {
                let aStatValue = a.statsObject[this.sortStatKey]
                let aStat = this.nonNumericToNumeric(aStatValue)

                let bStatValue = b.statsObject[this.sortStatKey]
                let bStat = this.nonNumericToNumeric(bStatValue)

                return aStat - bStat
            }

            if (this.sortStat === false) {
                return items.sort(sortHighToLow)
            } else {
                return items.sort(sortHighToLow).reverse()
            }
        },
        priceStatSort: (items) => {
            let sortHighToLow = (a, b) => {
                let aStatValue = a.statsObject[this.sortStatKey]
                let aStatNumeric = this.nonNumericToNumeric(aStatValue)
                let aStat = a.price / aStatNumeric

                let bStatValue = b.statsObject[this.sortStatKey]
                let bStatNumeric = this.nonNumericToNumeric(bStatValue)
                let bStat = b.price / bStatNumeric
                return aStat - bStat
            }

            if (this.sortPriceStat === false) {
                return items.sort(sortHighToLow)
            } else {
                return items.sort(sortHighToLow).reverse()
            }
        },
        nonNumericToNumeric: function (value) {
            if (!value) {
                return value
            }

            let stringValue = value.toString()

            let delimiters = ['%', ' / ']
            for (let index = 0; index < delimiters.length; index++) {
                let delimiter = delimiters[index]
                let delimiterPosition = stringValue.indexOf(delimiter)

                if (delimiterPosition !== -1) {
                    let parts = stringValue.split(delimiter)
                    return parseInt(parts[0])
                }
            }

            return value
        },
        mouseOver: function (event) {
            this.activeTooltip = event.target.id
        },
        mouseOut: function () {
            this.activeTooltip = null
        }
    }
}

let app = new Vue(appData)

app.$watch('filterStats', app.filterItemsByStat)
