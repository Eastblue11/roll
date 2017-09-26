<template>
    <div id="t-topbar">
      
      <div class="t-topbar">
         <router-link to='/shop'>商城</router-link><router-link to='/life'>生活志</router-link>
         <router-view></router-view>
      </div>
      
       
   </div>
</template>
    
<script>
export default {
  
  data () {
    return {
        
    };
  },





  
}
</script>
    
<style lang="css" scoped >

.t-topbar{
  height: 0.4rem;
  width: 100%; 
  background-color: cyan;
  font-size: 0.2rem;
  line-height: 0.4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
a{
  display: inline-block;
  width: 50%;
   text-decoration:none;
}
    
</style>