import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex)
    // 创建实例;

const state = {
    //商品列表
    cartProductList: []
};
const mutations = {
    ADD(state, item) {
        //用来判断所添加的商品是否存在
        var isExist = false


        //如果商品存在,就把当前商品列表里面count增加一
        for (let tempItem of state.cartProductList) {
            if (tempItem.title == item.title) {
                isExist = true
                tempItem.count++
                    break
            }
        }
        //如果商品不存在
        if (!isExist) {
            let cartProduct = {
                title: item.title,
                price: item.cprice,
                count: 1
            }
            state.cartProductList.push(cartProduct)
                // console.log(state.cartProductList)
        }
    },
    //购物车里面减少符号
    DOWN(state, title) {
        for (let item of state.cartProductList) {
            if (item.title == title)
                if (item.count > 1) {
                    item.count--
                }
        }

    },
    UP(state, title) {
        for (let item of state.cartProductList) {
            if (item.title == title) {
                item.count++
            }
        }
    },
    REMOVE(state, title) {
        for (let index in state.cartProductList) {
            if (state.cartProductList[index].title == title) {
                state.cartProductList.splice(index, 1)
            }
        }
    }
};
const actions = {
    //    car页面添加商品进购物车方法
    add(context, item) {
        context.commit('ADD', item)
    },
    // car页面减号商品减少方法
    down(context, title) {
        context.commit('DOWN', title)
    },
    // car页面加号商品增加方法
    up(context, title) {
        context.commit('UP', title)
    },
    //从购物车删除商品方法
    remove(context, title) {
        context.commit('REMOVE', title)
    }
};
const getters = {};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});