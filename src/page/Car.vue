<template>
    <div id="car">
    <div class="app has-bottom-meau">
      <div class="content" v-if="cartDataList.length !=0">
        <div class="head" id="head">
          <div class="fixtop">
            <!-- 未开启，未注册下单功能及空购物车时不显示返回按钮 -->
            <span class="index">购物车</span>
            <span class="t-user">编辑</span>
          </div>
        </div>
        <div class="ajaxHtml">
          <div class="my-bag" id=""goodList>
            <div class="item-empty" >
              <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png"/>
              <div class="b-title">看到喜欢的就带回家吧</div>
              <a href="#" class="btn">
                今日推荐
              </a>
            </div>
          </div>
        </div>
      </div>
      <cartpro></cartpro>
    </div>
   </div>
</template>
<script>
import cartpro from './Cartpro'
export default {
  name: "component_name",
  data () {
    return {
        cartDataList:[]
    };
  },
  components:{
    cartpro
  }
}
</script>
    
<style lang="css" scoped>
@import "/static/jwp/iconfont.css";
    body{
        background: #f4f4f8;
        min-height: 7rem;
        /* max-height:700rem; */
        overflow: hidden;
    }
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
     #car {
       width:100%;
       background: #f4f4f8;
       /* height:700rem; */
       overflow: hidden;
     
    }
    .app{
      padding-bottom:1.74rem;
      position: absolute;
      background: #f4f4f8;
      margin:0 auto;
      width: 100%;
       max-height:700rem ;
    }
    .head{
    height: .44rem;
    z-index:201;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #dedede;
    color: #333;
    background: #fff;
  }
 .fixtop{
     width: 100%;
   }
    .t-user{
      padding: 10px 14px 10px 0;
      font-size: .15rem;
      position: absolute;
      right:0;
      top:0;
      color: #4a4a4a;
    }
 .index{
      float:right;
    cursor: default;
    width: 100%;
    text-indent: 5%;
      padding: 0 .36rem;
      text-align: center;
      font-size: .18rem;
      line-height: .44rem;
      height: .44rem;
    }
    .item-empty{
      width: 100%;
      text-align: center;
      margin:.25rem 0;
    }
    .item-empty img{
      display: block;
      margin:0 auto;
      margin-bottom: .12rem;
      width:1.4rem;
      border:0;
    }
    .item-empty .b-title{
      font-size: .16rem;
      color: #333;
      margin-bottom: .14rem;
    }
    .item-empty .btn{
      font-size: .15rem;
      line-height: .4rem;
      height: .4rem;
      width: 1.38rem;
      display: inline-block;
      color: #ff464e;
      text-align: center;
      border: 1px solid currentColor;
      overflow: hidden;
      vertical-align: top;
    }
</style>