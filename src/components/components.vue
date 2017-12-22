<template>
  <div>
      <!-- 
        list 和 child-list 是组件 封装起来实现代码的复用性 
        全局组件：
            Vue.component("组件名",function(){})
        局部组件：
            放在实例里面 需要加s  components
        组件传值
            父子 props  子父 $emit 兄弟
        props：
       -->
       
       {{data}}
       <list :b="info" @getInfo="get"></list>  
       <child-list v-bind:a="info"></child-list>  
       <!-- a 是props绑定的 父组件的info 在子组件里就可以渲染得到父组件的值 -->
       <!-- 子里面自定义 一个事件$emit getInfo 把子组件的数据传送给父组件 就给父组件绑定getinfo事件 事件函数为get 
       但是由于button按钮在list里面 所以绑给list  list也是父组件的一个组件 相当于写给了父组件
       在父组件里用get函数来接收子组件getInfo传递的数据 
       -->
  </div>
</template>

<script>
import Vue from "vue"
Vue.component("list",{
    props:["b"], //props 写到子组件
    template:`<div>我是全局组件{{msg}}{{b}}
        <button @click="send">send</button> 
    </div>`,
    data(){
        return {
            msg:"222"
        }
    },
    methods:{  //子组件传递值给父组件 $emit 写到子组件上  
        send(){  //通过子组件button上绑定的send事件把数据传递过去
            this.$emit("getInfo",this.msg)
            //自定义一个事件getInfo 把this.msg 传送过去 getInfo写到父组件上 因为list是父组件的子元素 写到list相当于写到了父组件上
        }
    }
})
export default {  //相当于new Vue({}) 父组件
    data(){
        return {
            info:"bbbbb",
            data:""
        } 
    },
    methods:{  //getInfo是父组件的事件 事件绑定的函数是get
        get(val){
            //console.log(arguments)
            this.data=val; //接收到了子组件传送的this.msg 就是第一个参数的值 所以 把他赋值给data 然后再父组件下面就可以得到data
        }
    },
    components:{    //子组件
        "child-list":{
            props:["a"],
            template:`<div>qqq{{a}}
                <button @click="show">点击</button>
            </div>`,
            data(){
                return {
                    msg:"aaaaa"
                }
            },
            methods:{
                show(){

                }
            }
        },
       

    },
    
}
</script>

<style>

</style>
