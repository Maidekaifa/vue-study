<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrap">
              <div class="button">广州</div>
            </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrap" v-for="item in hot" :key="item.id">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom"  v-for="inneritem in item" :key="inneritem.id">{{inneritem.name}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style>
.list{
position: absolute;
left: 0;
top: 1.8rem;
right: 0;
bottom: 0;
overflow: hidden;
}
.title{
line-height: .54rem;
font-size: .26rem;
background: #eee;
padding-left: .2rem;
color: #666;
}
.button-list{
padding: .1rem;
overflow: hidden; /*重要*/
padding: .1rem .6rem .1rem .1rem;
}
.button-wrap{
float: left;
width: 33.33%;
}
.button-wrap .button{
text-align: center;
margin: .1rem;
border: .02rem solid #ccc;
padding: .1rem 0;
border-radius: .06rem;
}
.item-list .item{
line-height: .76rem;
color: #666;
padding-left: .2rem;
}
.border-bottom{
border-bottom: 0.1px solid #ccc;
}
</style>
