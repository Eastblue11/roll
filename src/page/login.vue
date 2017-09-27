<template>
    <div id="login">
      <div class="app notfull vip">
        <div class="go-app-new">
          <a href="#">
            <img src="https://jp.juancdn.com/jpwebapp/images/go_load_new.png?20161115"/>
          </a>
        </div>
        <div class="head">
        <div class="fixtop">
          <a href="javascript:history.go(-1)" class="btnback">
          </a>
           <span class="index">登录</span>
            <a href="#" class="t-user">注册
          </a>
          </div>
          </div>
        <div class="wap-login">
        <ul id="login-switch" class="login-txt">
          <li :class="{'active': colorShow}" @click="showFn">卷皮账号登录</li>
           <li @click="showFn" :class="{'active': !colorShow}">手机快速登录</li>
        </ul>
        <form id="normal-logo" actrion="" method="post" class="login" v-show="divShow">
          <div class="login-info">
              <ul class="info-input clear">
                <li class="clear">
                <input type="tel" placeholder="手机号/邮箱/用户名" id="mobile" name="mobile" class="txt ninput"/>
                </li>
                 <li class="clear">
                <input type="tel" placeholder="密码" id="mobile" name="mobile" class="txt ninput "/>
                </li>
              </ul>
              <a hrf="#" class="btn-code">登录</a>
            </div>
        </form>
          <form id="qick-login" method="post" action="" v-show="!divShow">
            <div class="login-info">
              <ul class="info-input clear">
                <li class="clear">
                <input type="tel" placeholder="请输入手机号码" id="mobile" name="mobile" class="txt ninput"/>
                </li>
                 <li class="clear">
                <input type="tel" placeholder="请输入验证码" id="mobile" name="mobile" class="txt ninput f1"/>
                <a href="#" class="f2">获取验证码</a>
                </li>
              </ul>
              <a hrf="#" class="btn-code">登录</a>
              <div class="quick"></div>
            </div>
          </form>
      </div>
   </div>
</div>
</template>  
<script>
export default {
  name: "component_name",
  data () {
    return {
      colorShow: true,
      divShow: true
    };
  },
  methods:{
    showFn(){
      this.colorShow = ! this.colorShow;
      this.divShow= ! this.divShow;
    }
  }
}
</script>
    
<style lang="css" scoped>
ul,li{
  list-style: none;
}
input{
  outline: none;
}
.app{
  font-size: .14rem;
  padding-bottom: .557rem;
  background: #fff;
  width: 100%;
}
.go-app-new{
  width: 100%;
  background: hsla(0, 0%, 100%, .7);
  height: .5625rem;
}
.go-app-new a{
  display: block;
  position: relative;
}
.go-app-new img{
  width: 100%;
  vertical-align: middle;
}
 .head{
    height: .44rem;
    z-index:201;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #dedede;
  }
 .fixtop{
     width: 100%;
    background: -webkit-gradient(linear,left top,right bottom,color-stop(0,#ff5a61),color-stop(1,#fd631c));
   }
 .btnback{
      font-size: .14rem;
      padding: 10px;
      height:.25rem;
      width: .25rem;
      position: absolute;
      left: 0;
      top:0;
      background: url("../assets/btnback.png") no-repeat;
      background-size: .25rem .25rem;
     transform: rotate(180deg);
     background-position: center center;
     color: #fff;
    }
    .t-user{
      padding: 10px 10px 10px 0;
      font-size: .14rem;
      position: absolute;
      right:0;
      top:0;
     color: #fff;
     background:#ff5a61;
    }
 .index{
      float:right;
    cursor: default;
    width: 100%;
    text-indent: 5%;
      padding: 0 .36rem;
      text-align: center;
      font-size: .18rem;
      line-height: .44rem;
      height: .44rem;
      color: #fff;
      box-sizing: border-box;
      background:#ff5a61;
    }
  .wap-login{
       padding:0  .12rem;
     }
   .wap-login #login-switch{
       line-height: .44rem;
       font-size: .14rem;
       margin-bottom: 20px;
       color: #999;
       height: .44rem;
     }
     #login-switch li{
       width: 50%;
       float: left;
       box-sizing:border-box;
       height: 100%;
       border-bottom: none;
       position: relative;
     }
      #login-switch .active{
        color: #ff464e;
      }
      #login-switch .active:after{
        content: "";
        height:.02rem;
        bottom: 0;
        left: 0.3rem;
        right: .3rem;
        background: #ff464e;
        position: absolute;

      }
    .wap-login .clear{
        clear:both;
      }
     .wap-login ul{
          box-sizing: border-box;
      }
      .wap-login ul li{
        border-bottom: 1px solid #ebebeb;
        height: .48rem;
      
      }
     .wap-login ul li input{
        height: .48rem;
        font-size: .13rem;
        border:0;
        width: 100%;
        box-sizing: border-box;
        color: #999;
      }
   .wap-login ul li .f1{
        float: left;
        width: 64%;
      }
     .wap-login ul li .f2{
        float: right;
        height: .48rem;
        font-size: .14rem;
        border:0;
        box-sizing: border-box;
        color: #999;
        line-height: .44rem;
      }
       .wap-login .btn-code{
         display: block;
         margin-top:.25rem;
         background-color: #dbdbdb;
         font-size: .18rem;
         text-align: center;
         color: #fff;
         line-height: .48rem;
         height: .48rem;
       }
</style>