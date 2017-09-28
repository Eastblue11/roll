// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入路由配置模块
import router from './router'
import "../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css"
import vueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(vueAwesomeSwiper);

//引入http请求函数
import vueResource from 'vue-resource'
Vue.use(vueResource)


import axios from 'axios'
// Vue.prototype.userName = '小黑'
// 因为axios不是vue的模块，所以不能使用Vue.use()来进行注册，我们使用原型链的机制来注册
Vue.prototype.axios = axios


// vue控制台警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})