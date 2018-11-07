new Vue({
  el: '#app-vue',
  data() {
    return {
      fruits: [
        'apple',
        'oranges',
        'apricots',
      ],
      currentFruit: '',
    }
  },
  methods: {
    addFruit: function() {
      this.fruits.push(this.currentFruit);
      this.currentFruit = '';
    },
    removeFruit: function(index) {
      this.fruits.splice(index, 1);
    }
  }
});
