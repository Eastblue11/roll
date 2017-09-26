<template>
    <div id="roll">
      <h1>{{msg}}</h1>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        msg:'卷皮精选'
    };
  }
}
</script>
    
<style lang="css" scoped>
     #roll h1{
        color: red;
        font-size: 0.2rem;
    }
</style>