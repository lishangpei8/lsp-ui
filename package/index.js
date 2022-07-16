/*
 * @Author: lishangpei
 * @Date: 2022-07-14 22:24:05
 * @LastEditTime: 2022-07-14 23:22:01
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

export default {
    install
}