<template>
    <div id="car">
      <!-- topbar -->
      <mineCar></mineCar>
 
      <table>
            <thead>
              <tr>
                <td>商品数量</td>
                <td>商品名称</td>
                <td>单价</td>
                <td>小计</td>
              </tr>
            </thead><hr>

          <tbody class="tbody">
              <tr v-for="(item,index) in cartProductList" class="t">
                
                  <td class="t1">
                    <span class="jian" @click="down(item.title)">-</span>
                    {{item.count}}
                    <span class="jia" @click="up(item.title)">+</span>
                  </td>

                  <td class="t2">{{item.title}}</td>
                  <td class="t3">{{item.price}}</td>
                  <td class="t4">{{item.price*item.count}}</td>
                  <td @click="remove(item.title)">删除</td>
              </tr>
          </tbody> 
      </table> 

          
      

       


   </div>
</template>
    
<script>
  import mineCar from '../components/mineCar'

export default {
  name: "component_name",
  data () {
    return {
       
    };
  },
  components:{
    mineCar
  },
  methods:{
        down(title){
              this.$store.dispatch('down',title)
        },
        up(title){
          this.$store.dispatch('up',title)
        },
        remove(title){
          this.$store.dispatch('remove',title)
        }
  },
  computed:{
        //购物车商品列表
        cartProductList(){
          return this.$store.state.cartProductList
          // return this.$store.state.cartProductList
          // console.log(this.$store.state.cartProductList)
        }
  }
}
</script>
    
<style lang="css" >
*{
  padding: 0;margin: 0
}
#car{
  font-size: 0.15rem;padding: 0;margin: 0
}

    table>thead>tr{
      font-size: 0;
      width: 3.7rem;
      display: inline-block;
    }
    table thead tr td{
      width: 23%;
      font-size: 0.15rem;
       display: inline-block;
    }
    table>.tbody>tr{
      background: cyan;
      height: 0.4rem;
      display: inline-block;width: 100%;
      line-height: 0.4rem
    }
  .jia,.jian{
    display: inline-block;
    height: 0.2rem;width: 0.2rem;
    font-size: 0.25rem
  }
</style>