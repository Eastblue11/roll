<template>
    <div id="good">
        <div class="img">
            <img src="https://goods2.juancdn.com/bao/170806/2/1/5986a4ca8150a166fc5c211e_800x800.jpg?imageMogr2/quality/88!/format/jpg">
        </div>
        <div class="price">
            <span>¥35.1</span><label>¥222</label>
            <h1>男士字母拼色休闲卫衣</h1>
            <ul>
                <li>包邮</li>
                <li>705人团购</li>
                <li>江苏苏州</li>                                
            </ul>
        </div>
        <div class="greyline"></div>
        <div class="sale">
            <p><span></span>199元大礼包限时配送</p>
            <p><span>24小时发货</span><span>24小时发货</span><span>24小时发货</span></p>
        </div>
        <div class="greyline"></div>
        <div class="color"><p>请选择颜色、尺码</p></div>
        <div class="greyline"></div>
        <div class="shop">
            <div class="pic"><img src="https://goods6.juancdn.com/bao/170223/b/b/58aeb3c8151ad1c3768b45c0_180x90.png?imageMogr2/quality/88!/format/png"></div>
            <div class="text">
                <p>服装小店</p>
                <p>27.2万人已购</p>
            </div>
            <a href="#">进入店铺</a>
        </div>
        <div class="greyline"></div>
        <div class="num">
            <ul>
                <li>图文详情</li>
                <li>商品参数</li>
                <li>资讯与售后</li>                                
            </ul>
        </div>
        <div class="greyline"></div>
        <footer>
            <a href="#" class="rem">收藏</a>
            <a href="#" class="car">购物车</a>
            <a href="#" class="buy">立即购买</a>
            <a href="#" class="tocar">加入购物车</a>
        </footer>
        <div class="bottomdiv"></div>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        msg:'购物车'
    };
  }
}
</script>
    
<style lang="css" scoped>
    footer{
        width: 100%;
        height: 0.48rem;
        position: fixed;
        bottom: 0;
        z-index: 100;
        background-color: white;
        font-size: 0;
    }
    footer a{
        font-size: 0.1rem;
        line-height: 0.48rem;
        text-decoration: none;
        color: #333333;
    }
    footer .rem,footer .car{
        width: 15%;
        height: 100%;
        display: inline-block;
    }
    footer .buy{
        width: 30%;
        height: 100%;
        display: inline-block;
    }
    footer .tocar{
        width: 40%;
        height: 100%;
        display: inline-block;
        background-color: #ff464e;
        color: white;
    }
    .img{
        width: 100%;
        height: 3.75rem;
    }
    .img img{
        width: 100%;
    }
    .price{
        width: 100%;
        height: 1.07rem;
        padding: 0.12rem 0.14rem 0.1rem 0.14rem;
        font-size: 0;
        text-align: left;
    }
    .price span{
        font-size:0.24rem;
        color: #ff464e;
        font-weight: bold;
    }
    .price label{
        font-size:0.12rem;
    }
    .price h1{
        font-size:0.16rem;
        font-weight: normal;
        margin: 0.04rem 0 0.1rem 0;
    }
    .price li{
        font-size: 0.12rem;
        list-style: none;
        width: 33.3%;
        float: left;
    }
    .greyline{
        width: 100%;
        height: 0.1rem;
        background-color: rgb(244, 244, 248);
    }
    .sale{
        width: 100%;
        height: 0.96rem;
        padding: 0 0.14rem;
    }
    .sale p{
        width: 100%;
        height: 50%;
        font-size: 0.12rem;
        line-height: 0.48rem;
        text-align: left;
    }
    .color{
        width: 100%;
        height: 0.48rem;;
    }
    .color p{
        width: 100%;
        height: 100%;
        font-size: 0.15rem;
        line-height: 0.48rem;
        text-align: left;
        padding: 0 0.14rem;
    }
    .bottomdiv{
        width: 100%;
        height: 0.48rem;
    }
    .shop{
        width: 100%;
        height: 0.74rem;
        padding: 0.14rem;
        font-size: 0;
        position: relative;
    }
    .pic{
        width: 0.46rem;
        height: 0.46rem;
        float: left;
    }
    .pic img{
        width: 100%;
        margin-top: 25%;
    }
    .text{
        width: 2.09rem;
        height: 100%;
        float: left;
        margin-left: 0.1rem;
        
    }
    .text p{
        font-size: 0.12rem;
        text-align: left;
    }
    .text p:first-of-type{
        font-size: 0.16rem;
    }
    .shop a{
        width: 0.82rem;
        height: 0.29rem;
        display: inline-block;
        font-size: 0.12rem;
        text-decoration: none;
        line-height: 0.29rem;
        text-align: center;
        color: #333333;
        position: absolute;
        right: 0.14rem;
        bottom:0.22rem;
        border:1px solid #333333;
    }
    .num{
        width: 100%;
        height: 0.53rem;
        padding: 0.11rem 0.10rem;
        font-size: 0;
    }
    .num ul{
        width: 100%;
        height: 100%;
        border: 1px solid #b2b2b2;
        border-radius: 0.03rem;
    }
    .num li{
        list-style: none;
        width: 33.3%;
        height: 100%;
        text-align: center;
        line-height: 0.31rem;
        float: left;
        font-size: 0.14rem;
    }
    .num li:nth-of-type(2){
        border-left: 1px solid #b2b2b2;
        border-right: 1px solid #b2b2b2;
    }
    .num li:nth-of-type(1){
       background-color: #666666;
       color: white;
    }
</style>