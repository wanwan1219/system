<template>
    <div>
        <box class="sele" btn-val="查询"></box>
    </div>
</template>

<script>
import Vue from "vue"
Vue.component("box",{
    props:["btnVal"],
    data(){
        return {
            hide:false,
            listCon:""
        }
    },

    template:`<div><p>{{listCon}}</p>
        <input type="text" @click="show"/><button>{{btnVal}}</button>
        <focus-list v-show="hide" @getList="listcon"></focus-list>
    </div>`,
        methods:{
        show(){
            this.hide=!this.hide
        },
        listcon(val){
            this.listCon=val
        }
    },
})
Vue.component("focus-list",{
    data(){
        return {
            liList:["HTML5","CSS3","react","vue"]
        }
    },
    mounted(){
        this.$emit("getList",this.liList)
    },
    template:`<div>
        <ul class="liscon">
            <li v-for="item in liList">{{item}}</li>
        </ul>
    </div>`
})
export default {
    data(){
        return {}
    },
    methods:{
        
    }
}
</script>

<style>
    .sele{
        width:500px;
        height:300px;
        margin: 200px auto 0;
        border:1px solid #ccc;
        text-align: center;
        padding-top: 100px;
    }
    .liscon li{
        list-style: none;
    }
</style>
