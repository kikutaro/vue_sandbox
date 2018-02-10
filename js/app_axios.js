var app = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    console.log(this.results.data)
    axios.get("http://localhost:8080/hello")
    .then((response) => {
      this.results = response.data
    })
  }
})