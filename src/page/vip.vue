<template>
    <div id="vip">
        <div id="head" class="head">
            <div class="fixtop">
                <span id="t-index">全球购</span>
                <span id="user">
                    <router-link to="classifi" class="btn">
                        <span class="icont"></span>
                    </router-link>
                </span>
            </div>
        </div>
         <router-view></router-view>
        <div id="banner">
            <div class="goods" id="goods">
                <ul class="goods-list clear" id="goods_block" v-for="(datas,index) in dataList" :key="datas.id"  >
                    <li class="brand-home-group"  v-for="(item,index) in datas" :key="item.id"  v-show="item.shop_cover?true:false">
                        <a href="#" class="banner">
                            <div class="top-jiaobiao">
                                低至<br>{{ item.good_rate }}起
                            </div>
                            <img  v-bind:src="item.shop_cover"/>
                        </a>
                        <div class="yinliu-box" >
                            <div class="yinliu-list">
                                <div class="yinliu-good"  v-for="(pro,index) in item.shop_goods" :key="pro.id">
                                    <a :href="pro.target_url" class="good-pic">
                                        <img v-bind:src="pro.pic_url" alt="pro.title" />
                                    </a>
                                    <a href="#" class="good-detail">
                                        <div class="good-price">
                                            <span class="price-new">￥{{ pro.cprice}}</span>
                                            <span class="price-del">￥{{ pro.oprice}}</span>
                                        </div>
                                        <div class="good-name">{{pro.title}}</div>
                                    </a>
                                </div>
                                <div class="yinliu-good good-more">
                                    <a href="#" class="good-pic">
                                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/this_global_more.png?20160825" alt="更多"/>
                                    </a>
                                    </a>
                                </div>
                                <!-- <div class="yinliu-good">
                                    <a href="#" class="good-pic">
                                        <img src="https://goods4.juancdn.com/bao/170724/7/f/59757b67a9fcf85d3e1a1056_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="美迪惠尔针剂补水套装"/>
                                    </a>
                                    <a href="#" class="good-detail">
                                        <div class="good-price">
                                            <span class="price-new">￥198</span>
                                            <span class="price-del">￥560</span>
                                        </div>
                                        <div class="good-name">美迪惠尔针剂补水套装</div>
                                    </a>
                                </div> -->
                                <!-- <div class="yinliu-good">
                                    <a href="#" class="good-pic">
                                        <img src="https://goods4.juancdn.com/bao/170724/7/f/59757b67a9fcf85d3e1a1056_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="美迪惠尔针剂补水套装"/>
                                    </a>
                                    <a href="#" class="good-detail">
                                        <div class="good-price">
                                            <span class="price-new">￥198</span>
                                            <span class="price-del">￥560</span>
                                        </div>
                                        <div class="good-name">美迪惠尔针剂补水套装</div>
                                    </a>
                                </div> -->
                                <!-- <div class="yinliu-good">
                                    <a href="#" class="good-pic">
                                        <img src="https://goods4.juancdn.com/bao/170724/7/f/59757b67a9fcf85d3e1a1056_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="美迪惠尔针剂补水套装"/>
                                    </a>
                                    <a href="#" class="good-detail">
                                        <div class="good-price">
                                            <span class="price-new">￥198</span>
                                            <span class="price-del">￥560</span>
                                        </div>
                                        <div class="good-name">美迪惠尔针剂补水套装</div>
                                    </a>
                                </div> -->
                                <!-- <div class="yinliu-good">
                                    <a href="#" class="good-pic">
                                        <img src="https://goods4.juancdn.com/bao/170724/7/f/59757b67a9fcf85d3e1a1056_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="美迪惠尔针剂补水套装"/>
                                    </a>
                                    <a href="#" class="good-detail">
                                        <div class="good-price">
                                            <span class="price-new">￥198</span>
                                            <span class="price-del">￥560</span>
                                        </div>
                                        <div class="good-name">美迪惠尔针剂补水套装</div>
                                    </a>
                                </div> -->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        msg:'vip专享',
        dataList:[],
        num:4
    }
  },
  methods:{
       getDate2:function(num){
        var _this = this;
        this.$http.jsonp("https://shop.juanpi.com/gsort", {
            params: {
                key: 310,
                type: 6,
                zhouyi_ids: "p8_c4_l1_51_1064_18_5_128",
                machining: "showshopgoods",
                rows: 10,
                page:　"All",
                callback: "gsort_callback"
            }
        }).then(function(res){
            // console.log(res.data.list);
            var data2=res.data.list;
           _this.dataList.push(data2);
            // console.log(  _this.dataList);

        });
    },
    // getDate1:function(){
    //     var _this = this;
    //     this.$http.jsonp("https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c4_l1_51_1064_18_5_128&machining=showshopgoods&page=1&rows=10&callback=gsort_callback", {}).then(function(res){
    //         console.log(res.body.list);
    //        _this.dataList.push( res.body.list);

    //     });
    // },
    
  },
   created(){
        this.getDate2();
    //   this.getDate1();
      
  }
}
</script>
    
<style lang="css" scoped>
#vip{
    width: 100%;
    margin-bottom: .5rem;
}
a{
    color: #666;
}
img{
border:0;
}
#head{
    height:.44rem;
    width:100%;
    position: relative;
    border-bottom: 1px solid #dedede;
}
.fixtop{
    height:100%;
    background: #fff;
    position: absolute;
    width: 100%;
}
.fixtop span{
    display: block;
}
#t-index{
    height: .44rem;
    line-height: .44rem;
    font-size: .18rem;
    padding: 0 0 0 .36rem;
    left: 0;
    width: 90%;
    cursor: default;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
    float: left;
}
#user{
    padding: .1rem .12rem 0 0;
    float:right;
    height: .44rem;
    box-sizing: border-box;
}
#head .btn{
    vertical-align: top;
    height:.24rem;
    background-size:cover;
    display:inline-block;
    overflow: hidden;
    text-decoration: none;
    width: .24rem;
}
#head .btn .icont{
    display: block;
    width: 100%;
    height: 100%;
    background: url("../assets/mulu.png") no-repeat;
    background-size: 100% 100%;
}
#banner{
    width: 100%;
}
#goods{
    width: 100%;
    background-color:#f9f9f9;
    height:100%;
    overflow: hidden;
}
#goods ul{
    width: 100%;
    font-size: 0;
}
.clear:before{
    clear: both;
    content: "";
    display: block;
    font-size: 0;
    visibility: hidden;
    height: 0;
}
.clear:after{
    clear: both;
    content: "";
    display: block;
    font-size: 0;
    visibility: hidden;
    height: 0;
}
.goods-list .brand-home-group{
    width: 100%;
    overflow: hidden;
    margin-top: 0;
    background: #fff;
    margin-bottom: .1rem;
    float: left;
}
.goods-list .brand-home-group .banner{
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    display: block;
}
.goods-list .brand-home-group .banner:before{
    content: "";
    z-index: 2;
    bottom: -.1rem;
    width: 0;
    height: 0;
    left:46%;
    border-width: 0 0.15rem .18rem;
    border-style: none dashed dashed solid;
    border-color: transparent transparent #fff;
    position: absolute;
}
.goods-list .brand-home-group .banner .top-jiaobiao{
    font-size: .12rem;
    height:.32rem ;
    width: .45rem;
    z-index: 2;
    top:0;
    left: 0.2rem;
    line-height: 1.1;
    padding-top: 1.2%;
    background: url('https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/top-jiaobiao.png') no-repeat 50%;
    background-size:contain;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    position: absolute;
}
.goods-list .brand-home-group .banner img{
    width: 100%;
}
.goods-list .brand-home-group .yinliu-box{
    height:1.5rem;
    padding-top:.1rem;
    width: 100%;
    overflow: hidden;
}
.goods-list .brand-home-group .yinliu-box .yinliu-list{
    padding-bottom: .2rem;
    white-space: nowrap;
    font-size: 0;
    overflow: hidden;
    overflow-x: auto;
}
.goods-list .brand-home-group .yinliu-box .yinliu-list .yinliu-good {
    margin-left:.1rem;
    height: 100%;
    width: .9rem ;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
}
.goods-list .brand-home-group .yinliu-box .yinliu-list .yinliu-good .good-pic{
    height:.9rem;
    width: .9rem;
    display: block;
}
.goods-list .brand-home-group .yinliu-box .yinliu-list .yinliu-good .good-pic img{
    margin:0 auto;
    width: 100%;
    height:100%;

}
.goods-list .brand-home-group .yinliu-box .yinliu-list .yinliu-good .good-detail{
    padding: .1rem 0 .14rem;
    text-align: center;
    width: 100%;
    height: auto;
    display: block;
}
.goods-list .brand-home-group .yinliu-box .yinliu-list .yinliu-good .good-price{
    margin-bottom: .03rem;
    height:.14rem;
    color: #bbb;
    font-size:.12rem;
}
.goods-list .brand-home-group .yinliu-box .yinliu-list .yinliu-good .good-price .price-new{
    color: #60e;
    margin-right: .02rem;
}
.goods-list .brand-home-group .yinliu-box .yinliu-list .yinliu-good .good-price .price-del{
    font-size:.1rem;
    color: #bbb;
    vertical-align:middle;
    text-decoration: line-through;
    top:.03rem;
}
.goods-list .brand-home-group .yinliu-box .yinliu-list .yinliu-good .good-name{
    font-size:.12rem;
    height: .28rem;
    color: #666;
    white-space: normal;
    word-break: break-all;
    line-height: 1.2;
}
</style>