import Vue from 'vue'
import Vuex from 'vuex'

// 全局注册
Vue.use(Vuex)

let state = {
    proList: [], // 日志列表
    activePro: {} // 被激活的日志对象 (当你写到渲染列表后，要处理激活样式、收藏那一个日志、删除哪个
        //日志、编辑哪个日志的时候，来定义的)
}

let mutations = {
    // 实现添加新日志对象的功能
    ACTIVE_pro(state,item){
        state.activePro = item;
    }

}

let actions = {

}

let getters = {
    // 用法和计算属性很像，就是进行数据过滤格式化的
    // 获取收藏的日志列表
    
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store


