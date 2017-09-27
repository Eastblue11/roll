<template>
    <div id="notfound">
      <h1>{{msg}}</h1>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        msg:'sorry NOT Find '
    };
  }
}
</script>
    
<style lang="css" scoped>
  #notfound{
    background-color: #dedede;
    font-size: .16rem;
    position: relative;
  }
  #notfound h1{
     color: #333;
    position: absolute;
    top:25%;
    left:25%;
    font-size: .16rem;
    margin:0 auto;
  }
</style>