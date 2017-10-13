<template>
    <div id="day">
         <h1>我是首页</h1>
         
         

   <!-- <div class="page-toast" >
    <div class="page-toast-wrapper"> -->
      <mt-button @click.native="openToast" size="large" id="c">
          <div id="as">点击弹出 Toast</div>
     </mt-button>
    <!-- </div> -->
  <!-- </div> -->
  

   </div>
</template>

<style lang="css">
    #day h1{
        color: red;
        font-size: 0.2rem;
    }

    #c{
        height: 100px;
    }
 

    #as{
        color:red;
    }
   .mint-toast-text,.mint-toast,.is-placemiddle{
       font-size: 0.2rem;color: red
   }
</style>
    
<script type="text/babel">
 import { Toast } from 'mint-ui';
export default {
   

  name: "component_name",
  data () {
    return {
        msg:'今日推荐'
    }
  },
  methods:{
      openToast() {
        Toast({
            message:'成功加入购物车',
            duration:1000
        })
      }
  },

}
</script>
    
