import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'
import ElementUI from 'element-ui'
import axios from 'axios'

import Vant from 'vant'
import 'vant/lib/index.css'
/** 配置axios */
import './assets/css/base.css'

/** 配置element-ui */
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vant)
Vue.use(ElementUI)

/** 配置axios */
axios.defaults.baseURL = `${config.ip}`
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
