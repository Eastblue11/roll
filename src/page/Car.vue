<template>
    <div id="car">
      <h1>{{msg}}</h1>
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