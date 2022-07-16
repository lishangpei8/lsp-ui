/*
 * @Author: lishangpei
 * @Date: 2022-07-05 22:48:06
 * @LastEditTime: 2022-07-14 23:21:09
 * @LastEditors: your name
 */
/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
// import LspButton from './components/Button'
// import LspDialog from './components/Dialog'
// import LspInput from './components/Input'
// import LspSwitch from './components/Switch'
// import './assets/fonts/iconfont.css'

import lspUI from '../package/index'
Vue.use(lspUI)
Vue.config.productionTip = false
    // Vue.component(LspButton.name, LspButton)
    // Vue.component(LspDialog.name, LspDialog)
    // Vue.component(LspInput.name, LspInput)
    // Vue.component(LspSwitch.name, LspSwitch)
new Vue({
    render: h => h(App)
}).$mount('#app')