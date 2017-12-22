<template>
  <div>
      <custom-list></custom-list>
      <custom-son v-bind:data="parentInfo"></custom-son>
      <!-- 
          1.什么是组件?
          2.组件的类型   全局   局部
          3.组件之间的通信   父子  字父 兄弟
          父子通信：
           props:[]
       -->
  </div>
</template>

<script>
// 全局组件
import Vue from "vue"
Vue.component("custom-list",{
    template:`<div>拿骚 贝朗  东瀛 喜当 中神经</div>`
})
export default {
    data(){
        return{
            parentInfo:"我是你爸爸"
        }
    },
    //局部组件
    components:{

        "custom-son":{
            props:["data"],
            template:`<div>
                <p>{{data}}</p>
            </div>`
        }
    }  
}
</script>

<style>

</style>
