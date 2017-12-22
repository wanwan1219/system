// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//主入文件
//import 导入 Vue 自己起的名字  from 从 vue（库） 相当于script标签引入进来 
import Vue from 'vue'
//import App from './components/http'  //下面的index.js里面有引进http
import router from './router'  //router 目录下有index会默认找到 实际上找的是index
import Vuex from "vuex"
Vue.use(Vuex)
import store from "./store"
Vue.config.productionTip = false  //开启生产环境

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
  // template: '<App/>',  //加载模板  在route.js 里面已经有了template 已经加载过了 
  // components: { App }  //加载组件
})
