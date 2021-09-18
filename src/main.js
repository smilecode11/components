import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

import router from "./router"
import "./plugins/element"


import VCalendar from "v-calendar";
Vue.use(VCalendar, {})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')