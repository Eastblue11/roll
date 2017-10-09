<template>

    <div class="roll_1">
 
        <!-- 优选新生活 -->
       <div >
           <img :src="item.pic"  v-for="(item,index) in msg1" class="rollshop_1_in"/>
            <img :src="item.pic"  v-for="(item,index) in msg" class="rollshop_1"/>
        </div>
       <!-- 六张图 -->
        <div class="roll_2">
          
             <div v-for="item in msg2" class="img"> 
                 <router-link :to="'/detail/'+item.x_record"> 
                 <img :src="item.pic" />
                 </router-link>
            </div>   
        
          
            <div v-for="item in msg3" class="img">
                <router-link :to="'/detail/'+item.x_record">    
                 <img :src="item.pic" />
                 </router-link>
           </div>
         
        </div>
    <!-- 空白 -->
    <div class="roll_blank"></div>


<swiper :options="swiperOption"  class="swiper-box swiperOption1">
    <!-- slides -->
        <swiper-slide class="swiper-item"> <img src='../image/lunbo_1.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_2.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_3.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_4.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_5.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_6.jpg'/></swiper-slide>
        <!-- Optional controls -->
  </swiper>




    <!-- 今日特价 -->
        <div class="roll_3" >
            <span class="roll_31">今日特价</span><span class="roll_32">SALE</span>
        </div>
    <!-- //轮播图 -->
    
<!-- <swiper></swiper> -->

    <swiper :options="swiperOption"  class="swiper-box swiperOption2">
    <!-- slides -->
        <swiper-slide class="swiper-item"> <img src='../image/lunbo_1.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_2.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_3.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_4.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_5.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../image/lunbo_6.jpg'/></swiper-slide>
        <!-- Optional controls -->
  </swiper>


    <!-- 精选好货 -->
    <div class="roll_4">
          一 精选好货一
    </div>

    <div v-for='(item,index) in msg4' :key="index" class="roll_5">
            <img :src='item.pic_url'/>
            <div v-for='items in item.label_yxlist'  class="roll5_all">
                <span class="roll_51">{{items.text}}</span>
               <span v-for='items in item.label_list' class="roll_52">{{items.text}}</span>
            </div>
            <div >{{item.title}}</div>
            <div >￥<span>{{item.cprice}}</span></div>
             <div class="car_car" > 加入购物车</div>
    </div>










   </div>
</template>
    
<script>
// import swiper from '../components/swiper'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {

    data(){
        return{
	// swiperSlides: [],
        msg:[],
          msg1:[],
          msg2:[],
        msg3:[],
        msg4:[],
        msg5:[],
        swiperOption:{
              autoplay: 500,
              freeMode : true,
              //设一行显示几张图
              slidesPerView : 3,
              loop:true,
            //图片之间间距
                spaceBetween: 20,
                // direction: 'vertical',
            },
            
            
        }
    },
    components:{
        // swiper,

    },

  methods:{
      car(){
        //   console.log('car')
      },
        	//resource
        getData1:function(){
        	this.$http.get('../../static/rollShop.json').then(function(res){
            console.log(res.body.data.block[0].multi_block[1].data[0].child)
            var da=res.body.data.block[0].multi_block[1].data[0].child
            this.msg=res.body.data.block[0].multi_block[1].data[0].child
             this.msg1=res.body.data.block[0].multi_block[0].data[0].child 
             this.msg2=res.body.data.block[0].multi_block[2].data[0].child
             this.msg3=res.body.data.block[0].multi_block[3].data[0].child   
            })
             
        },
        getData2:function(){
            this.$http.get('../../static/jingxuanhaohuo.json').then(function(res1){
                    console.log(res1.body.data.goods)
                    this.msg4=res1.body.data.goods
                    // this.msg5=res1.body.data.goods[0].label_list.text
                     console.log(this.msg4[0].label_yxlist[0].text)
            })
        }
	},	
    created () {
        this.getData1();
         this.getData2();
       
    }

}
</script>
    
<style lang="css" scoped>
*{
    padding: 0;
    margin: 0;
}
.roll_1{
    font-size: 0
}
   .rollshop_1 {
       width: 100%;
       height: 1.5rem;

   }
   .rollshop_1_in{
       width: 100%;
       height: 0.5rem;
      margin-top: 0.4rem;
   }

.img{
    float: left;
    width: 33%;
    /* height: 2rem; */

}
   .roll_2 img{
       width: 100%;
   
   }
   
   .roll_blank{
       height: 0.1rem;
       background: #f4f4f8;
        margin-top: 2.2rem
   }
   .roll_3{
       font-size: 0.15rem;
     width: 100%;
     height: 0.3rem;
     line-height: 0.3rem;
     text-align: left;
    
   }
.roll_31{
    margin-right: 0.05rem;
    margin-left: 0.15rem;
    color: #c4a182
}
.roll_32{
    background-color: #c4a182;
    color: #fff
}
.roll_4{
    font-size: 0.18rem;
    /* background-color: cyan; */
    height: 0.5rem;
    line-height: 0.5rem;

}
.roll_5{
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
 font-size: 0.16rem
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
.car_car{
    font-size: 0.1rem;
    text-align: left;
    background: #e66b01;
    color: #fff;
    width: 0.6rem;
}


 .swiper-box{
     height: 100px;
 }
.swiper-item{
    width: 100%;
}
.swiper-box img{
    width: 100px;
    height: 100px;
}
</style>