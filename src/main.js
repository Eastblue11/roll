// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入路由
import vueRouter from 'vue-router'
Vue.use(vueRouter)

//引入四个主页
import Day from './page/Day.vue';
import Roll from './page/roll'
import Vip from './page/vip'
import Car from './page/Car'
import Mine from './page/Mine'
import List from './page/List'

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
        component: Roll
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
        path: '/list',
        component: List
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