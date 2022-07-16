/*
 * @Author: lishangpei
 * @Date: 2022-07-05 22:48:06
 * @LastEditTime: 2022-07-14 23:22:30
 * @LastEditors: your name
 */
/* eslint-disable */
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    pages: {
        index: {
            // 修改项目入口文件
            entry: 'example/main.js',
        }
    },
    // 扩展webpack配置,使webpages加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname, 'package')).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    },


    transpileDependencies: true
})