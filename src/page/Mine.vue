<template>
    <div id="mine">
      <h1>{{msg}}</h1>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        msg:'我的'
    };
  }
}
</script>
    
<style lang="css" scoped>
     #mine h1{
        color: red;
        font-size: 0.2rem;
    }
</style>