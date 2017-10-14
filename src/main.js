// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'


//引入vuex
import store from './store'





//引入swiper
import vueSwiper from 'vue-awesome-swiper'
Vue.use(vueSwiper)
    // require('swiper/dist/css/swiper.css')
    //导入路由
import vueRouter from 'vue-router'
Vue.use(vueRouter)
    //引入http请求函数
    // import axios from 'axios'
    // Vue.prototype.axios = axios
import "../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css"
import VueResource from 'vue-resource'; //vue-resource使用$http.get
Vue.use(VueResource) //使用VueResource插件

//引入mint-ui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'


import Toast from 'mint-ui/lib/Toast';
Vue.use(MintUi)
    // Vue.component(Toast.name, Toast);


//卷皮精选两个路由
import shop from './page/rollShop'
import life from './page/rollLife'

//引入四个主页
import Day from './page/Day';
import Roll from './page/roll'
import Vip from './page/vip'
import Car from './page/Car'
import Mine from './page/Mine'
//引入详情页
import Detail from './page/detail'
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
        component: Vip,

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
        path: '/detail/:x_record',
        component: Detail
    },
    {
        path: '/mine',
        component: Mine
    }
];

const router = new vueRouter({
    routes
})


//vuex
// const store=new Vuex.store({
//     state:{},
//     mutations:{}
// })



/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    Toast,
    store
})