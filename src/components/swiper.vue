<template>
    <div >  
        <swiper :options="swiperOption">
            <swiper-slide ><img src='../image/lunbo_1.jpg'/></swiper-slide>
             <swiper-slide ><img src='../image/lunbo_1.jpg'/></swiper-slide>
              <swiper-slide ><img src='../image/lunbo_1.jpg'/></swiper-slide>
               <swiper-slide ><img src='../image/lunbo_1.jpg'/></swiper-slide>
        	<div class="swiper-pagination" slot="pagination"></div>
        </swiper>		 
   </div>
</template>
    
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components:{
    swiper,swiperSlide
  },
  data () {
    return {
          swiperOption:{
              // autoplay: 3500,
              setWrapperSize :true,
              pagination : '.swiper-pagination',
              paginationClickable :true,
              mousewheelControl : true,
              observeParents:true,
              direction:horizontal
			},
			swiperSlides: []
    	}
    }
  }

</script>
    
<style lang="css" >
 .swiper-container{
  height: 0.64rem;
}
.swiper-container img{
	display: block;
	width: 1rem;
	height: 1rem;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  margin: 0 auto
}
 
</style>