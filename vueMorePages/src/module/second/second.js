import 'babel-polyfill'
import Vue from 'vue'
import second from './second.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<second/>',
  components: { second }
})