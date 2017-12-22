<template>
    <div>
        <input type="text" v-model="msg" placeholder="请输入你想搜索的内容" @keydown.enter="enter">
        
        <p v-for="item in arr">{{item}}</p>
    </div>
</template>

<script>
import Vue from "vue";
import $http from "vue-resource"
Vue.use($http)
export default {
    data(){
        return{
            msg:"",
            arr:""
        }
    },
    methods:{
        enter(){
            this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.msg,{jsonp:"cb"}).then(result=>{
                this.arr=result.data.s;
            })
        }
    }
}
</script>

<style>

</style>
