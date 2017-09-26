// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


//引入http请求函数
// import axios from 'axios'
// Vue.use(axios)
// Vue.prototype.$http = anxios


//导入路由
import vueRouter from 'vue-router'
Vue.use(vueRouter)

//卷皮精选两个路由
import shop from './page/rollShop'
import life from './page/rollLife'

//引入四个主页
import Day from './page/Day';
import Roll from './page/roll'
import Vip from './page/vip'
import Car from './page/Car'
import Mine from './page/Mine'

// 注册页面的引入
import sigin from './page/sigin'
import login from './page/login'
Vue.config.productionTip = false


//配置路由
var routes = [{
        path: '',
        component: Day
    },
    {
        path: '/day',
        component: Day
    },
    {
        path: '/roll',
        component: Roll,
        children: [
            { path: '', component: shop },
            { path: '/shop', component: shop },
            { path: '/life', component: life }
        ]
    },
    {
        path: '/vip',
        component: Vip
    },
    {
        path: '/car',
        component: Car
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/mine',
        component: Mine,
    }
];

const router = new vueRouter({
    routes
})




/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})