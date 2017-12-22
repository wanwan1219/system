<template>
  <div>
      <div>
          <!-- <li style="width:200px;height:200px;list-style:none" v-for="item in arr"  v-red><img style="width:100%;height:100%" :src="item" alt=""></li> -->
          <li style="width:200px;height:200px;list-style:none" v-for="item in arr"  v-red="item.url"></li>
      </div>
  </div>
</template>

<script>
import Vue from "vue"
Vue.directive("red",{
    //bind() 元素绑定时生效
    bind(el){

    },
    //insert() 插入元素时生效 
    inserted(el,binding){
        //console.log(arguments)
        
         var randomNum=function(min,max){
                return Math.ceil(Math.random()*(max-min)+min)
            };
            var str='0123456789ABCDEF';
            var returnStr='';
            for(var i=0;i<6;i++){
                returnStr+=str[randomNum(0,str.length-1)]
            }
        el.style.backgroundColor="#"+returnStr
        //console.log(arguments)
        var img=new Image();
        //console.log(img);
        img.src=binding.value;
        //console.log(img.src)
        img.onload=function(){
            setTimeout(() => {
                el.style.backgroundImage="url("+binding.value+")"
            }, 2000);
           
        }
    },
    //更新数据时生效
    update(){},

})
export default {
    data(){
        return {
            arr1:["","","",""],
            arr:[{url:"../static/img/2_1.png"},{url:"../static/img/2_2.png"},{url:"../static/img/2_3.png"},{url:"../static/img/2_4.png"},{url:"../static/img/2_1.png"},{url:"../static/img/2_1.png"},]
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>
