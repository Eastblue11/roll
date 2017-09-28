<template>
    <div id="day">
        <header>
            <div class="app">
                <a href="#"><img src="//jp.juancdn.com/jpwebapp/images/go_load_new.png"></a>
            </div>
            <div class="search">
                <div class="bar">
                    <a href="#"><span></span>搜索商品</a>
                </div>
            </div>
        </header>
        <div class="nav">
            <router-link to="/day">上新</router-link>
            <router-link to="/list">女装</router-link>
            <router-link to="/list">鞋包</router-link>
            <router-link to="/list">母婴</router-link>
            <router-link to="/list">数码</router-link>
            <router-link to="/list">居家</router-link>
            <router-link to="/list">男士</router-link>
            <router-link to="/list">美妆</router-link>
            <router-link to="/list">美食</router-link>
            <router-link to="/list">精品配饰</router-link>
            <router-view></router-view>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for='(item,index) in list.banner_ads' :key="item.id"><a href="#"><img :src="item.pic"></a></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" style="font-size:0;"></div>
        </div>
        <div class="greyline"></div>
        <ul id="nav">
            <li><a href="#"><img src="https://goods8.juancdn.com/jas/170828/e/7/59a3f55e8150a1637e478d48_270x267.png?imageMogr2/quality/85!/format/png"></a></li>
            <li><a href="#"><img src="https://goods8.juancdn.com/jas/170809/e/8/598a7504a9fcf866ab51bcfe_270x267.png?imageMogr2/quality/85!/format/png"></a></li>
            <li><a href="#"><img src="https://goods4.juancdn.com/jas/170828/7/1/59a3f5768150a16da3399c8f_270x267.png?imageMogr2/quality/85!/format/png"></a></li>
            <li><a href="#"><img src="https://goods1.juancdn.com/jas/170906/1/c/59af976b8150a15198156939_270x267.png?iopcmd=convert&Q=85&dst=webp"></a></li>                                    
        </ul>
        <div class="greyline"></div>
        <div id="hot">
            <div class="hotbig"><a href="#"><img src="https://goods8.juancdn.com/jas/170922/e/2/59c4f6eb8150a159642acf6c_540x656.png?imageMogr2/quality/85!/format/png"></a></div>
            <div class="hotsmall"><a href="#"><img src="https://goods8.juancdn.com/jas/170922/e/e/59c4f47fa9fcf854472724c2_540x328.png?imageMogr2/quality/85!/format/png"></a></div>
            <div class="hotsmall"><a href="#"><img src="https://goods1.juancdn.com/jas/170925/0/2/59c86299a9fcf82f0a749c74_540x328.png?iopcmd=convert&Q=85&dst=webp"></a></div>
        </div>
        <div class="greyline"></div>
        <div class="sport">
            <a href="#"><img src="https://goods6.juancdn.com/jas/170920/a/c/59c256a68150a10f1f02c1e1_270x360.png?imageMogr2/quality/85!/format/png"></a>
            <a href="#"><img src="https://goods3.juancdn.com/jas/170920/5/5/59c256e18150a10e787b2434_270x360.png?iopcmd=convert&Q=85&dst=webp"></a>
            <a href="#"><img src="https://s2.juancdn.com/jas/170920/0/3/59c256fb8150a10ee71f22cf_270x360.gif"></a>
            <a href="#"><img src="https://goods7.juancdn.com/jas/170920/c/9/59c25736a9fcf8b19540fccc_270x360.png?iopcmd=convert&Q=85&dst=webp"></a>
        </div>
        <div class="greyline"></div>
        <div class="everyday">
            <img src="https://goods1.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&Q=85&dst=webp">
        </div>
        <ul id="main">
            <li v-for='item in list1.list' :key='item.id'>
                <a href="#">
                    <div class="main1">
                        <img :src="item.pic_url">
                    </div>
                    <div class="main2">
                        <h1>1</h1>
                        <h2>{{item.title}}</h2>
                        <span>{{item.residue}}</span>
                        <img :src="item.shop_logo">
                    </div>
                </a>
            </li>
            <div class="clear"></div>
        </ul>
        <div id="bottomdiv"></div>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
       url:'./static/Day.json',
       url1:'../../static/Day1.json',
       list:[],
       list1:[]
    }
  },
    created() {
        this.axios.get(this.url).then(res => {
            console.log(res.data);
            this.list = res.data;
        }, err => {
            console.log(err);
        });
        this.axios.get(this.url1).then(res => {
            console.log(res.data);
            this.list1 = res.data;
        }, err => {
            console.log(err);
        });
    },
    mounted(){
            var mySwiper = new Swiper('.swiper-container', {
            autoplay: 2000,//可选选项，自动滑动
            loop : true,
            //手动操作后，自动继续播放
            autoplayDisableOnInteraction : false,
            //分页器
            pagination : '.swiper-pagination'
            });
    }
}
</script>
    
<style lang="css" scoped>
@import "/static/swiper-3.3.1.min.css";
@import "/static/swiper-3.3.1.min.js";
    *{
         box-sizing: border-box;
    }
    header{
        width: 100%;
       
    }
    header .app{
        width: 100%;
        height: 0.5625rem;
        font-size: 0;
    }
    header .app a{
        display: inline-block;
        width: 100%;
    }
    header .app img{
        width: 100%;
    }
    header .search{
        width: 100%;
        height: 0.44rem;
    }
    .search .bar{
        padding-left: 0.14rem;
        padding-right: 0.44rem;
        width: 100%;
        height: 100%;
        font-size: 0;
    }
    .search .bar a{
        width: 100%;
        height: 0.28rem;
        background-color: #f2f2f2;
        display: inline-block;
        margin-top: 0.1rem;
        border-radius: 0.02rem;
        font-size: 0.12rem;
        text-decoration: none;
        color: #999999;
        line-height: 0.28rem;
        text-align: left;
        padding-left: 0.31rem;
        position: relative;
    }
    .bar a span{
        width: 0.15rem;
        height: 0.15rem;
        display: inline-block;
        position: absolute;
        font-family: iconfont!important;
        top: 0.07rem;
        left: 0.08rem;
        content: "\e62b";
        font-size: 0.15rem;
        background-image: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?ts=390cfa98cd666aa7_1506504699-1&sv=a8351a1e);
        background-size: 0.15rem 0.15rem;
    }
    .nav{
        width: 100%;
        height: 0.38rem;
        font-size: 0;
        white-space: nowrap;
        overflow: auto;
        overflow-y: hidden;
        border-top: 1px solid #f7f7f8;
    }
    .nav a{
        display: inline-block;
        height: 100%;
        font-size: 0.14rem;
        text-align: center;
        line-height:0.38rem;
        text-decoration: none;
        color: #333;
        margin: 0 0.07rem;
        padding: 0 0.05rem;
    }
    
    .swiper-container img{
        width: 100%;
    }
    .swiper-wrapper{
        font-size: 0;
    }
    .greyline{
        width: 100%;
        height: 0.1rem;
        background-color: #f4f4f8;
    }
    #nav{
        width: 100%;
        height: 0.925rem;
        list-style: none;
    }
    #nav li{
        width: 25%;
        height: 0.925rem;
        float: left;
    }
    #nav li a{
        width: 100%;
        height: 0.925rem;
        display: inline-block;
        text-decoration: none;
    }
    #nav img{
        width: 100%;
    }
    #hot{
        width: 100%;
        height: 2.27775rem;
        font-size: 0;
    }
    .hotbig{
        width: 50%;
        height: 100%;
        float: left;
        border-right: 1px solid #ebebeb;
    }
    .hotbig a{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .hotbig img{
        width: 100%;
    }
    .hotsmall{
        width: 50%;
        height: 50%;
        float: left;
        border-bottom: 1px solid #ebebeb;
    }
    .hotsmall a{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .hotsmall img{
        width: 100%;
        height: 100%;
    }
    .sport{
        width: 100%;
        height: 1.25rem;
        font-size: 0;
    }
    .sport a{
        display: inline-block;
        width: 25%;
        height: 1.25rem;
    }
    .sport img{
        width: 100%;
    }
    .everyday{
        width: 100%;
        height: 0.48rem;
        font-size: 0;
    }
    .everyday img{
        width: 100%;
    }
    #bottomdiv{
        width: 100%;
        height: 0.5rem;
    }
    #main{
        width: 100%;
        background-color: #f4f4f8;
    }
    #main li{
        width: 50%;
        float: left;
        list-style: none;
        height: 2.435rem;
        margin-bottom: 0.02rem;
    }
    #main li:nth-of-type(odd){
        border-right: 1px solid #f4f4f8;
    }
    #main li:nth-of-type(even){
        border-left: 1px solid #f4f4f8;
    }
    #main li a{
        width: 100%;
        display: inline-block;
        text-decoration: none;
    }
    #main .main1{
        width: 100%;
        height: 1.875rem;
        font-size: 0;
    }
    .main1 img{
        width: 100%;
    }
    #main .main2{
        width: 100%;
        height: 0.56rem;
        padding: 0.08rem 0.08rem;
        font-size: 0;
        position: relative;
        background-color: white;
    }
    .main2 h1{
        font-size: 0.13rem;
        color: #ff464e;
        text-align: left;
        line-height: 0.2rem;
        font-weight: normal;
    }
    .main2 h2{
        color: #333;
        font-size: 0.12rem;
        text-align: left;
        line-height: 0.2rem;
        font-weight: normal;
    }
    .main2 span{
        font-size: 0.11rem;
        color: #bbb;
        position: absolute;
        right: 0.08rem;
        bottom: 0.12rem;
    }
    .main2 img{
        width: 0.5rem;
        height: 0.25rem;
        position: absolute;
        right: 0.08rem;
        top:-0.125rem;
        background-color: white;
    }
    .clear{
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    ::-webkit-scrollbar {
    width: 0px;
    height: 1px;
    }
</style>