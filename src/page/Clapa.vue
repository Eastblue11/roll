<template>
    <div id="clapa">
      <div class="wrap">
            <div class="third-cate">
              <div class="cate-second" v-for="(pro,idx) in prdetail.secondCateList" :key="pro.id">
                <a href="#" class="daqta-bc">
                  <img v-bind:src="'https://s2.juancdn.com'+item.icon" class="cate-img"/>
                  <span>{{pro.name}}</span>
                </a>
              </div>
            </div>
            </div>
            <!-- <h1>{{this.$route.params.proId}}</h1> -->
    </div>
</template>
    
<script>
export default {
  name: "component_name",
 data () {
    return {
        classDateList:[],

    };
  },
  methods:{
    getData:function(){
           var _this = this;
    this.$http.get("../static/classData.json", {}).then(function(res){
          // console.log(res.data);
       _this. classDateList= res.data;

     });
    }
  },
  created(){
    this.getData();
  },
 computed: {
    product(){
    // console.log(this.$router.params.proId);
    for(var item of this.classDateList){
      if(this.$route.params.proId == item.id){
        return item;
      }
    }
  },
   prdetail(){
      return this.$store.state.activePro;
    }
 }
}
</script>
    
<style lang="css" scoped>
#clapa{
  width: 100%;
   height: 5.6825rem;
  font-size:.12rem;
  float: left;
  width:71%;
  padding-left: 4%;
}
#wrap{
  height: 100%;
  width: 100%;
  text-align: left;
  overflow: hidden;
}
.third-cate{
  margin-top:.1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
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
}
</style>