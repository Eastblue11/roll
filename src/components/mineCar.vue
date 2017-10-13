<template>
    <div class="minecar">
        <div id="minecar">
            <span class="mine-1">购物车</span><span class="mine-2">编辑</span>
        </div>

        <!-- <joincar></joincar> -->



   </div>
</template>
    
<script>
// import joincar from '../components/joincar'
export default {
  name: "component_name",
  data () {
    return {
        
    };
  },
  components:{
    //   joincar
  }
}
</script>
    
<style lang="css" scoped>
    .minecar{
        text-align: center;
         
    }
    #minecar{
      font-size: 0.18rem  ;
      background-color:#f4f4f8;
      height: 0.3rem;
      line-height: 0.35rem
    }
    .mine-2{
        font-size: 0.15rem
    }
    .mine-1{
        margin-left: 1.2rem;
         margin-right: 1.3rem
    }
</style>