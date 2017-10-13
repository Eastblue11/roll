<template>
    <div id="vip">
       <h1>{{msg}}</h1>

        <router-link to='/joincar'>购物车</router-link>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        msg:'vip专享'
    };
  }
}
</script>
    
<style lang="css" scoped>
     #vip h1{
        color: red;
        font-size: 0.2rem;
    }
</style>