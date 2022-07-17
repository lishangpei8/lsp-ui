/*
 * @Author: lishangpei
 * @Date: 2022-07-05 22:48:06
 * @LastEditTime: 2022-07-17 11:22:15
 * @LastEditors: your name
 */
/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
//import lspUI from '../package/index'
// Vue.use(lspUI)
// Vue.config.productionTip = false

import LspRadio from './components/Radio'
import './assets/fonts/iconfont.css'
Vue.component(LspRadio.name, LspRadio)

new Vue({
    render: h => h(App)
}).$mount('#app')