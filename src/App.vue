<template>
  <div id="app">

     <div>
         <ul class="tabbar">
          <li><router-link to='/day'>今日推荐</router-link></li>
          <li><router-link to='/roll'>卷皮精选</router-link></li>
          <li><router-link to='/vip'>vip专享</router-link></li>
          <li><router-link to='/car'>购物车</router-link></li>
          <li><router-link to='/mine'>我的</router-link></li>
      </ul>
       <router-view></router-view>


     </div>
    
  </div>
</template>

<script>

export default {
 
  }
   

</script>

<style scoped>
*{
  padding: 0;
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0.6rem;
}

#app ul{
  font-size: 0.12rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  background-color: gray;
  line-height: 0.5rem;
}
#app ul li{
  float: left;
  list-style-type: none;
  width: 20%;
  
}
a{
  text-decoration: none;
}

</style>
