<template>
    <div>
       
     <div>
         <ul class="tabbar">
          <li class="one"><router-link to='/day'>今日推荐</router-link></li>
          <li class="two" ><router-link to='/roll' >卷皮精选</router-link></li>
          <li class="fou"><router-link to='/vip'>vip专享</router-link></li>
          <li class="fiv"><router-link to='/car'>购物车</router-link></li>
          <li class="six"><router-link to='/mine'>我的</router-link></li>
      </ul>
       <router-view></router-view>
   </div>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    *{
  padding: 0;
  margin: 0
}


 ul{
  font-size: 0.12rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  background-color: gray;
  line-height: 0.5rem;
}
 ul li{
 
  float: left;
  list-style-type: none;
  width: 20%;
  /* padding-top: 0.15rem */
}
a{
  text-decoration: none;
}
</style>