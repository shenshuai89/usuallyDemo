import 'babel-polyfill'
import Vue from 'vue'
import third from './third.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<third/>',
  components: { third }
})