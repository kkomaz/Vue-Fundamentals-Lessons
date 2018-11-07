new Vue({
  el: '#app-vue',
  data() {
    return {
      columns: ['name', 'stars'],
      stores: [
        { name: 'Chipotle', stars: 5.0 },
        { name: 'Pizza Hut', stars: 3.5 },
        { name: 'Carls Jr', stars: 3.1 },
        { name: 'Chick Fil A', stars: 5.0 },
        { name: 'Mcdonalds', stars: 4.2 },
        { name: 'Burger King', stars: 1.0 },
        { name: 'Wendys', stars: 3.2 },
        { name: 'Whataburger', stars: 5.0 },
        { name: 'Jack in the Box', stars: 2.0 }
      ],
      searchText: '',
    }
  },
  methods: {
    sortName() {
      this.stores.sort((a,b) => a.name > b.name ? 1 : -1);
    },
    sortLowest() {
      this.stores.sort((a, b) => a.stars > b.stars ? 1 : -1);
    },
    sortHighest() {
      this.stores.sort((a, b) => a.stars < b.stars ? 1 : -1);
    }
  },
  computed: {
    searchedStores() {
      const filter = new RegExp(this.searchText, 'i');
      return this.stores.filter(el => el.name.match(filter));
    }
  }
});
