
import Vue from 'vue'
//导入路由
import vueRouter from 'vue-router'
// 安装全局路由
Vue.use(vueRouter)

// //卷皮精选两个路由
// import shop from '../page/rollShop'
// import life from '../page/rollLife'

//引入四个主页
import Day from '../page/Day';
import Roll from '../page/roll'
import Vip from '../page/vip'
import Car from '../page/Car'
import Mine from '../page/Mine'

// 注册页面的引入
import sigin from '../page/sigin'
import login from '../page/login'

//全部分类页面导入
import Classifi from '../page/Classifi'

// 错误路由提示
import NotFound from '../page/notfound'

//导入分类组件
import Clapa from '../page/Clapa'
import List from '../page/List'
import Good from '../page/Good'

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
        // children: [
        //     { path: '', component: shop },
        //     { path: '/shop', component: shop },
        //     { path: '/life', component: life }
        // ]
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
        path: '/sigin',
        component: sigin,
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/good',
        component: Good
    },
    {
        path: '/classifi',
        component: Classifi,
        children: [
            { path: '', component: Clapa },
            { path: 'clapa:proId', component:Clapa }
        ]
    },
    // {
    //      path: '*',
    //  component: NotFound
    //  }
];

// 创建路由实例
const router = new vueRouter({
    mode: 'history',
    //路由规则
    routes
})

// 因为把路由逻辑单独提出来了，所以我们要提供一个导出路由对象功能
export default router
