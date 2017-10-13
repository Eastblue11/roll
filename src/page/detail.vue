
<template>
<!-- <div id="ri"> -->
    <div id="ad">
        <div class="de_1">
            <span @click="back()"><</span>
            生活用品
        </div>

    <div v-for='(item,index) in msg' :key="index" class="roll_5">
            <img :src='item.pic_url'/>
            <div v-for='items in item.label_yxlist'  class="roll5_all">
                <span class="roll_51">{{items.text}}</span>
               <span v-for='items in item.label_list' class="roll_52">{{items.text}}</span>
            </div>
            <div >{{item.title}}</div>
            <div >￥<span>{{item.cprice}}</span></div>

            <div class="car_car" >
                 <mt-button @click.native="openToast" size="large" id="c">
                     加入购物车
             </mt-button>
               
            </div>
    </div>
   </div>
<!-- </div> -->
</template>
    
<script>
import { Toast } from 'mint-ui';
export default {
  name: "component_name",
  data () {
    return {
        msg:[],
        id:''
    };
  },
  components:{
        //  id(){
        //      console.log(this.$route.params.item.x_record)
        //  }
  },
  methods:{
       openToast() {
        Toast({
            message:'成功加入购物车',
            duration:1000
        })
      },
      back(){
            // history.back()
            this.$router.go(-1)
      },
      deData:function(){
            this.$http.get('../../static/detail'+this.id+'.json').then(function(res){
                this.msg=res.body.goodsInfo.goods
                console.log(res.body)
            })
      }
       
  },
  created(){
     
        this.id=this.$route.params.x_record;
        console.log( this.id);
         this.deData()
  }

}
</script>
    
<style lang="css" scoped>

    .de_1{
        position: fixed;
        top: 0;
        z-index: 4;
        height: 0.4rem;
        background: #fff;
        font-size: 0.18rem;
        line-height: 0.4rem;
        text-align: left;
        padding: 0 0.1rem;width: 100%
    }
    .de_1 span{
        margin-right: 1.3rem
    }

    .roll_5{
        margin-top: 0.4rem;z-index: 3;
    font-size: 0.14rem;
    float: left;
    width: 50%;
    height: 2.5rem;
}
.roll_5 img{
    width: 1.5rem;
}
.roll_5 div{
     text-align: left;
     margin-left: 0.15rem
}
.roll_5 div:nth-of-type(1){
 color: #e66b01;
 /* font-size: 0.16rem */
}
.roll_51{
    font-size: 0.08rem;
    background-color: #ff7700;
    color: #ffffff;
    width: 100%;
    /* height: 0.2rem; */
    
}
.roll_52{
    width: 80%;
    font-size: 0.06rem;
    color: black;
   
}
.roll5_all{
    width: 80%;
    height: 0.2rem;
    overflow: hidden;
    white-spacing:nowrap;
    /* height: 0.2rem; */
}
.car_car,#c{
    font-size: 0.1rem;
    text-align: left;
    background: #e66b01;
    color: #fff;
    width: 0.7rem;height: 0.2rem;
}
</style>










