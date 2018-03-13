import Vue from 'vue'
import App from './App'
import router from './router'
import {Toast} from '@/ui/index'
// console.log(Toast)
Vue.prototype.$Toast = Toast
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
