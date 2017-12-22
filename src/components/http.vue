<template>
    <div>
        <p v-for="item in msg">{{item}}</p>
        <button @click="getInfo">提交</button>
    </div>
</template>

<script>
import Vue from "vue";
import Axios from "axios";
//引入vue-resource
import $http from "vue-resource"
Vue.use($http)
// Vue.use(Axios)  不需要使用 不是vue的插件 只有插件需要使用 axios是独立的插件
export default {
    name:"http",
    data(){
        return {
            msg:"",
            a:"a",
        }
    },
    methods:{
    getInfo(){
        //console.log(this)
        //get vue1
        /*this.$http.get("../../package.json").then((result) =>{
            this.msg=result.body;
        })*/
        //post vue1
        /*this.$http.post("../../package.json","").then((result) =>{
            this.msg=result.body;
        })*/
        //jsonp 百度 https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su
        /*this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a",{jsonp:"cb"}).then((result)=>{
            this.msg=result.body.s;
        })*/
        //jsonp 360 https://sug.so.360.cn/suggest?callback=suggest_so&word=a {emulateJSON:true} 可以省略 允许跨域访问
        /*this.$http.jsonp("https://sug.so.360.cn/suggest?callback=suggest_so&word=a",{emulateJSON:true}).then((result)=>{
            this.msg=result.data.s;
        })*/
        //axios vue2
        /*Axios({ //get 配合params使用 post 配合data使用
                url:"../../package.json",
                methods:"GET",
                params:{

                }
            }).then(result=>{
                console.log(result.data)
        })*/
        //es6 fetch
        //arrBuffer() 解析数组
        //blob() 解析图片
        //json() 解析json
        //text() 解析文本
        //formData() 解析表单
        fetch("../../package.json").then(result=>{
            if(result.ok){
                return result.json().then(data=>{
                    console.log(data)
                })
            }else{
                console.log(result.status)
            }
        },
        //错误处理函数 如果 fetch不能准备就绪 或者res不能响应 就执行错误下面的处理
            function(e){
                console.log("fetch failed",e)
            }
        )
    }
    
    }, 
    mounted(){
        //mounted 类似于window.onload()
        fetch("../../package.json").then(result=>{
            if(result.ok){
                return result.json().then(data=>{
                    console.log(data)
                })
            }else{
                console.log(result.status)
            }
        },
        //错误处理函数 如果 fetch不能准备就绪 或者res不能响应 就执行错误下面的处理
            function(e){
                console.log("fetch failed",e)
            }
        )
    }
}
</script>

<style>

</style>
