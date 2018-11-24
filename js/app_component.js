Vue.component('mycomponent', {
  props: ['arg'],
  data() {
    return {
      val : "data"
    }
  },
  template:`
    <!-- ルート要素は1つ -->
    <div>
      <h1>component</h1>
      <b>{{arg}}</b>
      <p>{{val}}</p>
    </div>
  `,
  mounted() {
    val = "hello"
  },
})

var app = new Vue({
  el: '#app'
})