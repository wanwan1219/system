<template>
<div>
    <p>{{num}}</p> 
    <!--  在computed存在计算属性  -->
    <!-- <p>{{$store.state.num}}</p> -->
    <!-- <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('delate')">-</button> -->
    <!-- commit 触发对应的函数 -->
    <!-- <button @click="add">+</button>
    <button @click="delate">-</button> -->
    <button @click="addActions">+</button>
    <button @click="delateActions">-</button>
</div>
</template>

<script>
// import Vue from 'vue'
// import Vuex from 'vuex'
import store from "../store.js"
// Vue.use(Vuex)
// console.log(store.state.num)
// console.log(Vuex)
//mapState取到state的数据 mapMutations取到mutations里面的函数
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
    //computed 实例里面的 计算属性 类似watch监听  一直在监听着num的变化 所以把num变量变成一个函数
    // computed:{
    //     /*num(){
    //         return store.state.num
    //     },*/
    //     //es6箭头函数
    //     /*num:()=>store.state.num*/
    // }
    
    /*aPlus: {
      get: function () {
        return store.state.num + 1
      },
      set: function (v) {
        tore.state.num = v - 1
      }
    }*/
    //箭头函数
    /*computed:mapState({
        num:state=>state.num
    }),*/
    //解构
    //computed:mapState(["num"]),
    //解构
    //methods:mapMutations(["add","delate"]),
    /*computed:{
        //...扩展运算符
        ...mapGetters(["num"])
    },*/
    computed:mapGetters(["num"]),
    /*methods:{
        ...mapActions(["addActions","delateActions"])
    },*/
    methods:mapActions(["addActions","delateActions"])
}
</script>

<style>

</style>
