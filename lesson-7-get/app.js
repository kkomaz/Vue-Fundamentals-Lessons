// https://jsonplaceholder.typicode.com/users

new Vue({
  el: '#app-vue',
  data() {
    return {
      users: [],
      loading: false,
    }
  },
  methods: {
    fetchUsers() {
      this.loading = true;
      this.users = [];

      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const data = response.data; // [{}, {}]
          this.users = data;
          this.loading = false;
        });
    },
  }
});
