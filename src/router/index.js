//路由文件
import Vue from 'vue'
import Router from 'vue-router'
//@相当于../上级目录
import Http from '@/components/http'
import Search from '@/components/search'
import Select from '@/components/select'
import Vuex from '@/components/vuex'
import Directory from '@/components/directory'
import Components from '@/components/components'
import Components2 from '@/components/components2'

//use 在vue中 只要是插件就要用Vue.use去使用
Vue.use(Router)  

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Http',
      component: Http
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/directory',
      name: 'Directory',
      component: Directory
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    },
    {
      path: '/components2',
      name: 'Components2',
      component: Components2
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    }
  ]
})
