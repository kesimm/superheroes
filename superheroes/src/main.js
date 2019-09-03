import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { store } from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://theaudiodb.com/api/v1/json/1/searchalbum.php'
new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')