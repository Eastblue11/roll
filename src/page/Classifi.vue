<template>
    <div id="classifi">
      <div id="head" class="head">
            <div class="fixtop">
                <a href="javascript:history.go(-1)" class="btnback">
                </a>
                <span id="t-index">全部分类</span>
                <span id="user">
                </span>
            </div>
        </div>
      <div class="cate-list">
        <!-- 搜索栏 -->
        <div id="search-box">
          <a href="#">
            <div class="box-search">
              <input type="search" id="keyword" name="keyword" placeholder="搜索商品" autocomplete="off" disabled/>
            </div>
            <button id="search-submit" type="submit">
              <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?ts=390cfa98cd666aa7_1506419753-1&sv=a8351a1e"/>
            </button>
          </a>
        </div>
        <!-- 左边栏 -->
        <div class="list-left">
          <ul class="list-title">
            <li class="bc " v-for="(item,index) in classDateList" :key="item.id" @click="showPro(index, item.name)" :class="{'color-red': colorShow==index}">
              <router-link :to="'/classifi/clapa'+item.id">{{ item.name}}</router-link>
              </li>
          </ul>
        </div>
        <!-- 右边栏 -->
        <div class="list-right">
          <router-view></router-view>
          <!-- <clapa></clapa> -->
          <!-- <div class="wrap">
            <div class="third-cate">
              <div class="cate-second">
                <a href="#" class="daqta-bc">
                  <img src="https://s2.juancdn.com/bao/170824/8/d/599e9f6ba9fcf8902a706e88_200x200.png?iopcmd=convert&dst=webp" class="cate-img"/>
                  <span>秋装</span>
                </a>
              </div>
            </div>
            </div> -->
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
        classDateList:[],
        colorShow: 0
    };
  },
  component:{
    // clapa
  },
  methods:{
    getData:function(){
           var _this = this;
    this.$http.get("../static/classData.json", {}).then(function(res){
          // console.log(res.data);
       _this. classDateList= res.data;

     });
    },
    showPro(index, name) {
      this.colorShow=index;
    }
  },
  created(){
    this.getData();
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
.btnback{
      font-size: .14rem;
      padding: 10px;
      height:.25rem;
      width: .25rem;
      position: absolute;
      left: 0;
      top:0;
      background: url("../assets/back2.png") no-repeat;
      background-size: .25rem .25rem;
     background-position: center center;
     color: #fff;
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
.cate-list{
  width: 100%;
  font-size:.15rem;
  color:#333;
  text-align: center;
  background-color: #fff;
}
#search-box{
  margin:.1rem;
  border:1px solid #bbb;
  border-radius: 5px;
  padding:2px 0;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.box-search{
  line-height: .24rem;
  height:.24rem;
  margin-left: 6px;
  width: 98%;
  position: relative;
  padding: 0;
  vertical-align: middle;
  color: #999;
  float: left;
   background-color: #fff;
   box-sizing: border-box;
}
.box-search input{
  font-size:.13rem;
  margin-left: .3rem;
  line-height: .24rem;
  color: #999;
  position: absolute;
  width: 90%;
  left:0;
  background-color:#fff;
  letter-spacing: normal;
  outline: none;
  border:none;
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;

}
#search-box button{
  left: 6px;
  top:2px;
  display: block;
  position: absolute;
  border:0 none;
  cursor: pointer;
  background: #fff;
}
#search-box button img{
  height:24px;
  vertical-align: middle;
  border:0;
}
.list-left{
  height: 5.682rem;
  font-size:.14rem;
  float: left;
  width: 25%;
  background: #f9f9f9;
  overflow: hidden;
}
.list-left ul{
  text-align: left;
  text-indent: .15rem;
}
.list-left ul li{
  line-height: .45rem;
  height: .45rem;
  position: relative;
  border-bottom: .005rem solid #ebebeb;
  cursor: pointer;
}
.list-left ul .color-red{
color: #ff464e;
border-left:.02rem solid #ff464e;
background-color:#fff;
}
.list-right{
  height: 5.6825rem;
  font-size:.12rem;
  float: left;
  width:71%;
  padding-left: 4%;
}
/* #wrap{
  height: 100%;
  width: 100%;
  text-align: left;
  overflow: hidden;
}
.third-cate{
  margin-top:.1rem;
  display: flex;
  flex-wrap: row;
  flex-direction: row;
}
.third-cate .cate-second{
  width: .8512rem;
  display: inline-block;
  text-align: center;
}
.cate-second{
  height: .9375rem;
  padding: 0 5%;
  box-sizing: border-box;
  position: relative;
}
.cate-img{
  width: 100%;
}
.cate-second span{
  line-height: .2rem;
  color: #333;
} */
</style>