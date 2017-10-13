<template>
    <div id="car">

      <mineCar></mineCar>






      <h1>{{msg}}</h1>


   </div>
</template>
    
<script>
  import mineCar from '../components/mineCar'

export default {
  name: "component_name",
  data () {
    return {
        msg:'购物车'
    };
  },
  components:{
    mineCar
  }
}
</script>
    
<style lang="css" scoped>
     #car h1{
        color: red;
        font-size: 0.2rem;
    }
</style>