/*
 * @Author: lishangpei
 * @Date: 2022-07-14 22:24:05
 * @LastEditTime: 2022-07-17 01:05:28
 * @LastEditors: your name
 */
/* eslint-disable */
import Button from './Button.vue'
import Dialog from './Dialog.vue'
import Input from './Input.vue'
import Switch from './Switch.vue'
import './fonts/iconfont.css'

const componentList = [
    Button,
    Dialog,
    Input,
    Switch
]

const install = function(Vue) {

    componentList.forEach(c => {
        Vue.component(c.name, c)
    })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}