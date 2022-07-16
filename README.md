<!--
 * @Author: lishangpei
 * @Date: 2022-07-05 22:48:26
 * @LastEditTime: 2022-07-17 00:11:20
 * @LastEditors: your name
-->
# lsp-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Button
需要支持的属性
- type 按钮类型
- round 是否圆角
- circle 原型



## 使用封装的组件

如果在项目中想要试使用组件有两种方式：1.直接在项目中进行引用；2.做成插件发布到npm上去

### 1.直接在项目中引用

这种方式比较简单，步骤如下：

1. 把所有封装的vue组件，及对应的CSS文件放在一个如package文件夹下

2. 为了方便被项目中的Vue安装，在该文件夹下新建index.js，在index.js中导入所有组件，并挂载到Vue实例上，因为项目中使用Vue.use()方法会默认调用install方法。所以index.js需要将有一个install方法的导出

   ```javascript
   //引入所有的组件及样式
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
   //在Vue.use()调用install方法中将组件挂载到传进来的Vue实例上去
   const install = function(Vue) {
       componentList.forEach(c => {
           Vue.component(c.name, c)
       })
   }
   //导出install方法或者包含install方法的对象
   export default {
       install
   }
   ```

   3.在项目中进行使用的时候,在main.js中进行使用

   ```java
   import lspUI from '../package/index'
   Vue.use(lspUI)
   ```

### 2.将组件封装成npm包进行发布

1.需要在npm上注册一个用户

2.把该项目的package.json 的private字段改为false

这里有一个坑 一些静态文件如果希望打包的时候不想变成绝对路径，如字体图标文件，打包后不能是绝对路径，需要在

vue.config.js中设置 publicPath:'./'

3.需要把包打包成库格式，vue-cli已经支持把包打成库的格式，需要在package.json的script加上如下打包成库格式的命令

```
  //  最后一段是目录      
"lib":"vue-cli-service build --target lib ./package/index.js"
```

执行npm run lib就会在dist下输出对应的库文件

4.在package.json 指定未来他人使用这个包的时候要去找的入口文件,需要配置main字段

```
    "main": "dist/lisp-ui.umd.min.js",
```

5.配置npm上传的时候需要忽略的文件功能类似于.gitignore,新建一个.npmignore，里面的内容,不需要把这些上传

```
package/
public/
example/
node_modules/
vue.config.js
bable.config.js
*.map
```

6.首先确认npm用的源是npm官方的源，不是淘宝什么的源，然后用npm login登录一下npm,最后在项目目录下进行发布npm publish就可以了

7.在其他项目中进行使用,

```shell
npm install -S lisp-ui
```



在main.js中注册

```js
import lspUi from 'lisp-ui';
import 'lisp-ui/dist/lisp-ui.css'
Vue.use(lspUi)
```

在项目中使用

```vue
    <lsp-button type="primary">111</lsp-button>
    <lsp-switch v-model="active"></lsp-switch>
```

