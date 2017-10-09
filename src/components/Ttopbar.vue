<template>
    <div id="t-topbar">
      
      <div class="t-topbar">
         <router-link to='/shop'>商城</router-link><router-link to='/life'>生活志</router-link> 
        
      </div>    
       <router-view></router-view>
       
      
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
*{
  padding: 0;
  margin: 0
}
.t-topbar{
  height: 0.4rem;
  width: 100%; 
  background-color: #fff;
  font-size: 0.2rem;
  line-height: 0.4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #f4f4f8;
  text-align: center
}
a{
  display: inline-block;
  width: 50%;
   text-decoration:none;
}
    
</style>