import Vue from "vue";//vue.js
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Index={
    template:`<h2>这是首页</h2>`,
    //beforeRouteEnter 在调用时 没有访问到实例 但是可以通过next对其进行处理
    beforeRouteEnter(to,from,next){
        console.log(arguments)
        next()
    },
   //导航离开该组件的路由时调用
    beforeRouteLeave(to,from,next){
        console.log(arguments)
        next()
    }
}
const New={
    template:`<h2>这是新闻</h2>`
}
const Zixun={
    template:`<h2>这是资讯</h2>`
}
const Student={//二级路由的显示
    //props:["id"],
    template:`<div>
    <h2>student {{ $route.params.id }}</h2>
    <router-view/>
    </div>`,
    // template:`<div>
    // <h2>student {{ $route.params.id }}</h2>
    // <h2>student {{ id }}</h2>
    // <p>{{ id }}</p>
    // <router-view/>
    // </div>`,
    //watch 监听路由变化 to 去往路径 from 来的路径
    // watch: {
    //     '$route' (to, from) {
    //       console.log(arguments)
    //     }
    // },
    //路由守卫 
    beforeRouteUpdate (to, from, next) {
        console.log(arguments)
        next()
      }
}
const Post1={
    template:`<h2>这是学生1</h2>`
}
const Post2={
    template:`<h2>这是学生2</h2>`
}
const Post3={
    template:`<h2>这是学生3</h2>`
}
const router=new VueRouter({
    mode:"history", //history h5里面的方法  hash
    base:__dirname, //dirname 相对路径 filename 绝对路径
    routes:[ //路由配置
        {path:"/"/*,redirect:"/new"*/,component:Index,name:"index"},//重定向 redirect 路径/的时候访问的是/new的内容
        {path:"/new"/*,redirect: to =>{return "/"}*//*,redirect:{name:"index"}*/,component:New,name:"new"},
        {path:"/zixun",alias: '/b',component:Zixun,name:"zixun"},//别名 alias 路径走/b的时候访问/zixun的内容
        {path:"/student/:id",component:Student/*,props:true*/,name:"student",//二级路由 动态路径参数 以冒号开头
        children:[
            {path:"/student/:id/post1",component:Post1},
            {path:"/student/:id/post2",component:Post2},
            {path:"/student/:id/post3",component:Post3}
        ]
    },
     // 『重定向』的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么『别名』又是什么呢？
     // /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。 
    ]
})
new Vue({
    el:"#app",
    router,
    template:
    //:to="{name:'student',params:'id'}"
    `
    <div>
        <ul>
            <li><router-link :to="{name:'index'}">首页</router-link></li>
            <li><router-link to="/new" name="new">新闻</router-link></li>
            <li><router-link to="/zixun" name="zixun">资讯</router-link></li>
            <li><router-link to="/student/:id" name="student">学生</router-link>
                <ol>
                    <li><router-link to="/student/:id/post1">学生1</router-link></li>
                    <li><router-link to="/student/:id/post2">学生2</router-link></li>
                    <li><router-link to="/student/:id/post3">学生3</router-link></li>
                </ol>
            </li>
            <router-view/>
        </ul>
    </div>
    `
})

// router.beforeEach((to,from,next)=>{
//     sessionStorage.setItem("sex","ss");
//     next()
// });
// router.afterEach((to,from,next)=>{
//     sessionStorage.removeItem("sex")
//     next()
// })