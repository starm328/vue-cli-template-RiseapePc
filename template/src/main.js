/*
 * @Descripttion: 
 * @version: 0.1.0
 * @Author: wjh@3651it.com
 * @Date: 2020-06-03 11:01:52
 * @LastEditors: starm
 * @LastEditTime: 2021-01-12 12:30:01
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import splitPane from 'vue-splitpane'
const Qs = require('qs')
import './assets/theme/index.css'; //element-ui主题样式
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$qs = Qs
Vue.use(ElementUI)
Vue.component('split-pane', splitPane)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
