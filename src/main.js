import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/resets.css'
import './assets/styles/base.scss'

// 图标字体样式
import './assets/fonts/navIcon/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
