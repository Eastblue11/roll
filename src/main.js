// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入路由配置模块
import router from './router'

//引入http请求函数
import vueResource from 'vue-resource'
Vue.use(vueResource)

// vue控制台警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})