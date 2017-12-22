//store 仓库 用来存储所有的数据
import Vue from 'vue'
import Vuex from 'vuex'
//Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
//它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
Vue.use(Vuex)
//单一状态管理树 存放所有数据
const state={
    num:5
}
//触发状态 存放函数
const mutations={
    add(state){
        state.num++
    },
    delate(state){
        state.num--
    }
}
//getters store里面的计算属性
const getters={
    num:state=>state.num
}
//actions 分发事件
const actions={
    addActions({commit}){
        commit("add")
    },
    delateActions(context){
        context.commit("delate")
    }
}
//暴露出当前的仓库
export default new Vuex.Store({
    //注册进Store仓库 类似暴露
    state,mutations,getters,actions                                                                                                      
})