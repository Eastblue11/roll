<template>
    <div id="mine">
      <!-- 用户中心 -->
      <div class="userCenter">
        <div id="head">
          <div class="userTop">
            <a href="#" class="t-goback">
              <span class="icon"></span>
            </a>
            <span class="text">个人中心</span>
          </div>
          <div class="user-login">
            <router-link to="sigin">注册</router-link>
            <i class="line"></i>
            <router-link to="login">登录</router-link>
          </div>
        </div>
      </div>
          <router-view></router-view>
      <!-- 用户内容 -->
      <div class="userBox">
        <!-- 新增我的订单入口 -->
        <a href="#" class="order">
          <span class="f1 effect">我的订单</span>
          <span class="f2">全部订单</span>
        </a>
        <div class="user-item">
          <!-- 新增横菜单 -->
          <a href="#">
            <i class="icon f1 "></i>
            <span>待付款</span>
          </a>
           <a href="#">
            <i class="icon f1 "></i>
            <span>待成团</span>
          </a>
           <a href="#">
            <i class="icon f1 "></i>
            <span>待收货</span>
          </a>
           <a href="#">
            <i class="icon f1 "></i>
            <span>退款/售后</span>
          </a>
        </div>
        <div class="user-items">
          <a href="#"  class="order">
            <span class="f1 effect">我的收藏</span>
          </a>
           <a href="#" class="order">
            <span class="f1 effect">我的拼团</span>
          </a>
           <a href="#" class="order">
            <span class="f1 effect">VIP砖石卡</span>
            <span class="f2">[199元大礼包限时派送中]</span>
          </a>
           <a href="#" class="order ">
            <span class="f1 effect">我的免单卷</span>
            <span class="f2">0张</span>
          </a>
           <a href="#" class="order no-bottom">
            <span class="f1 effect ">我的优惠券</span>
          </a>
        </div>
         <div class="user-items">
          <a href="#"  class="order">
            <span class="f1 effect">客服中心</span>
          </a>
           <a href="#" class="order no-bottom">
            <span class="f1 effect ">关于卷皮</span>
          </a>
         </div>
      </div>
      <div id="footer">
        <div class="foot-nav">
          <a href="#">返回首页</a>
          <a href="#">客户端</a>
          <a href="#" class=" nobo">电脑版</a>
        </div>
          <div class="line"></div>
          <div class="cr">copyright © 武汉奇米网络科技有限公司</div>
      </div>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
    };
  }
}
</script>
    
<style lang="css" scoped>
     #mine {
       width: 100%;
        color: #666;
        font-family: PingFang-SC-Regular,
        Helvetica Neue,Helvetica,
        Droid Sans Fallback,microsoft yahei,
        sans-serif;
        font-size: .2rem;
        background-color: #f4f4f8;
    }
     #mine #head{
       background: #ff464e;
       background-image: url("https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png");
       background-repeat: no-repeat;
       background-size:100% auto;
       border-bottom: none;
       line-height: .44rem;
       box-sizing: border-box;
       color: #fff;
     }
      #mine #head .userTop{
        position: relative;
        line-height: .44rem;
        text-align: center;
        box-sizing: border-box;
      }
       #mine #head .userTop .t-goback{
         position: absolute;
         left: 0;
         top:0;
         padding:0 .14rem;
         box-sizing: border-box;
         z-index: 2;
       }
        #mine #head .userTop .t-goback .icon{
          vertical-align: middle;
          width:.24rem;
          height: .24rem;
         color: #fff;
         background: url("../assets/back.png") no-repeat;
         background-size: .24rem .24rem;
          display: inline-block;
       }
       #mine #head .userTop .text{
         color: #fff;
         padding: 0 .44rem;
         font-size: .18rem;
       }
       #mine #head .user-login{
     
         line-height: 1rem;
         height: 1rem;
         position: relative;
         font-size: 0;
         text-align: center;
       }
       #mine #head .user-login a{
         padding: 0 .48rem;
         font-size: .2rem;
         display: inline-block;
         color: #fff;
       }
       #mine #head .user-login .line{
         height:.2rem;
         position: absolute;
         top:50%;
         left:50%;
         background-color: #fff;
         width:1px;
         transform: translate(-50%,-50%);
       }
       /* 内容注释 */
      #mine .uesrBox{
       width: 100%;
     }
    .order{
          font-size: .14rem;
          line-height: .48rem;
          height: .48rem;
          display: block;
          position: relative;
          padding: 0 .14rem 0 .18rem;
          background-color: #fff;
          color: #999;
          box-sizing: border-box;
          overflow: hidden;
      }
     .order .f1{
        float: left;
      }
     .order .f2{
        float: right;
      }
    .order .effect{
         font-size: .15rem;
         color: #333;
       }
     .order:after{
         content: "";
         position: absolute;
         left: .18rem;
         right:.14rem;
         bottom: 0;
         height: 1px;
         background-color: #ebebeb;
       }
       #mine .user-item{
         padding: .15rem 0 .12rem 0;
         font-size: 0;
         background-color: #fff;
       }
       #mine .user-item a{
         font-size: .12rem;
         position: relative;
         display:inline-block;
         width: 25%;
         box-sizing: border-box;
         text-align: center;
         vertical-align: top;
       }
      #mine .user-item a .icon{
        width: .28rem;
        height: .28rem;
        margin-bottom: .06rem;
        background: url("../assets/play.png") no-repeat;
        background-size:.28rem .28rem;
      }

       #mine .user-item{
         padding: .15rem 0 .12rem 0;
         font-size: 0;
         background-color: #fff;
       }
       #mine .user-item a{
         font-size: .12rem;
         position: relative;
         display:inline-block;
         width: 25%;
         box-sizing: border-box;
         text-align: center;
         vertical-align: top;
       }
      #mine .user-item a .icon{
        display: inline-block;
        vertical-align: middle;
        width: .28rem;
        height: .28rem;
        margin-bottom: .06rem;
        background: url("../assets/play.png") no-repeat;
        background-size:.28rem .28rem;
      }
       #mine .user-item a span{
         display: block;
         width: 100%;
         text-align:center;
       }
        #mine .user-items{
          margin-top: 10px;
          background-color: #fff;
        }
        .no-bottom:after{
          display: none;
        }
        #mine .user-items a span{
          font-size: .12ren;
        }
        #footer{
          margin-top:.1rem;
          width: 100%;
          margin-bottom: .145rem;
          height: 1.31rem;
          background-color:#fff;
          position: relative;
        }
        #footer .foot-nav{
          padding: .18rem 0;
          line-height: .18rem;
        }
         #footer .foot-nav a{
           color:#666;
           font-size: .12rem;
           margin:0 auto;
           width: 31%;
           border-right: 1px solid #ebebeb;
           text-align: center;
           display:inline-block;
         }
         #footer .foot-nav .nobo{
           border-right:none;
         }
          #footer  .line{
            width:90%;
            border-bottom: 1px solid #ebebeb;
            font-size:0;
            height: 1px;
            text-align:center;
            margin:0 auto;
          }
          #footer .cr{
                font-size: .12rem;
                height: .342rem;
                line-height: .342rem;
                color: #bbb;
                padding: 0 .17067rem;
                font-weight: 400;
          }
</style>