<template>
    <div>
        <list @getMsg="get"></list>
        <listTwo :info="getmsg"></listTwo>
    </div>
</template>

<script>
import Vue from "vue"

export default {
    data(){
        return {
            getmsg:""
        }
    },
    methods:{
        get(val){
            this.getmsg=val;
        }
    },
    components:{
        "list":{
            data(){
                return {
                    msg:"aaaaa"
                }
            },
            template:`<div>
            <button @click="trans">传递</button>
            </div>`,
            methods:{
                trans(){
                    this.$emit("getMsg",this.msg)
                }
            },
            mounted(){  //实例挂载完成之后
                this.trans()
            }
        },
        "listTwo":{
            props:["info"],
            template:`<div>{{info}}</div>`,
        }
    }
}
</script>

<style>

</style>
