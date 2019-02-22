// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//基础样式
import './assets/styles/reset.css'
//1像素边框解决高倍屏，边框1像素不同问题
import './assets/styles/border.css'
//解决移动端click事件延迟300ms  通过npm安装依赖
import fastClick from 'fastclick'

Vue.config.productionTip = false
//attach是fastClick的一个方法，绑定在Body身上
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
