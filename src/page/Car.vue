<template>
    <div id="car">
    <div class="app has-bottom-meau">
      <div class="content">
        <div class="head" id="head">
          <div class="fixtop">
            <!-- 未开启，未注册下单功能及空购物车时不显示返回按钮 -->
            <span id="t-index">购物车</span>
            <span id="t-user">编辑</span>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        msg:'购物车'
    };
  }
}
</script>
    
<style lang="css" scoped>
     #car h1{
        color: red;
        font-size: 0.2rem;
    }
</style>