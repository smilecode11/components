import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

import router from "./router"
import "./plugins/element"


//  富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
Vue.use(VueQuillEditor, /* { default global options } */)

//  日历选择器
import VCalendar from "v-calendar";
Vue.use(VCalendar, {})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')