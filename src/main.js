import Vue from 'vue'
import App from './App'

Vue.config.devtools = true

Vue.directive('primary', function (value) {
  console.log(value)
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
