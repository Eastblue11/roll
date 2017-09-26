<template>
   <div>
    <div id="sigin">
      <div class="common">
        <div class="head">
        <div class="fixtop">
          <a href="javascript:history.go(-1)" class="btnback">
          </a>
           <span class="index">注册</span>
          </div></div>
        <div class="wap-login">
          <p class="reg">请确保你的手机畅通，用于接收验证码短信</p>
          <form id="mphone" method="post" action="">
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
              <a hrf="#" class="btn-code">下一步</a>
            </div>
          </form>
        </div>
      </div>
   </div>
</div> 
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        msg:"注册"
    };
  }
}
</script>
    
<style lang="css" scoped>

  #sigin{
    width: 100%;
    color: #666;
    background: #fff;
    font-size: .14rem;
  }
  #sigin .common{
    width: 100%;
    font-size: .14rem;
    padding-bottom: .57422rem;
    position: relative;

  }
  #sigin .common .head{
    height: .44rem;
    z-index:201;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #dedede;
  }
   #sigin .common .fixtop{
     width: 100%;
   }
    #sigin .common .btnback{
      font-size: .14rem;
      padding: 10px;
      height:.25rem;
      width: .25rem;
      position: absolute;
      left: 0;
      top:0;
      background: url("../assets/btnback2.png") no-repeat;
      background-size: .25rem .25rem;
     transform: rotate(180deg);
     background-position: center center;
    }
    #sigin .common .index{
      float:right;
    cursor: default;
    width: 100%;
    text-indent: 5%;
      padding: 0 .36rem;
      text-align: center;
      font-size: .18rem;
      line-height: .44rem;
      height: .44rem;
      color: #333;
      box-sizing: border-box;
    }
     #sigin .wap-login{
       padding:0  .12rem;
     }
     #sigin .wap-login .reg{
       line-height: .15rem;
       margin-top:.28rem;
       font-size: .12rem;
       margin-bottom: 20px;
       color: #999;
     }
      #sigin .wap-login .clear{
        clear:both;
      }
      #sigin .wap-login ul{
          box-sizing: border-box;
      }
      #sigin .wap-login ul li{
        border-bottom: 1px solid #ebebeb;
        height: .48rem;
      
      }
      #sigin .wap-login ul li input{
        height: .48rem;
        font-size: .12rem;
        border:0;
        width: 100%;
        box-sizing: border-box;
        color: #999;
      }
      #sigin .wap-login ul li .f1{
        float: left;
        width: 64%;
      }
      #sigin .wap-login ul li .f2{
        float: right;
        height: .48rem;
        font-size: .14rem;
        border:0;
        box-sizing: border-box;
        color: #999;
        line-height: .44rem;
      }
       #sigin .wap-login .btn-code{
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