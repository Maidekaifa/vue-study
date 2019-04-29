<template>
<div>
    <div class="icons">
<!--*****************************这是一个首页图标菜单可滑动的组件**************************-->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-content" :src="item.imgUrl" alt="图标" />
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
      </swiper>
    </div>
</div>
</template>

<script>
export default{
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [
        {imgUrl: 'https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E5%91%A8%E8%BE%B9%E6%B8%B8.png', desc: '周边游', id: '001'},
        {imgUrl: 'https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E4%B8%BB%E9%A2%98%E6%B8%B8.png', desc: '主题游', id: '002'},
        {imgUrl: 'https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E4%BA%B2%E5%AD%90%C2%B7%E6%B8%B8%E5%AD%A6.png', desc: '亲子.游学', id: '003'},
        {imgUrl: 'https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E9%B8%BF%E9%B9%84%C2%B7%E5%A5%A2%E6%B8%B8.png', desc: '奢游', id: '004'},
        {imgUrl: 'https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E6%9C%BA+%E9%85%92.png', desc: '机+酒', id: '005'},
        {imgUrl: 'https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E4%B8%80%E6%97%A5%E6%B8%B8.png', desc: '一日游', id: '006'},
        {imgUrl: 'https://dimg04.c-ctrip.com/images/300l10000000pj3oq76D9.png', desc: '景点.门票', id: '007'},
        {imgUrl: 'https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E5%BD%93%E5%9C%B0%E5%90%91%E5%AF%BC.png', desc: '当地向导', id: '008'},
        {imgUrl: 'https://dimg04.c-ctrip.com/images/300r11000000r4fb16A8F.png', desc: '海岛', id: '009'},
        {imgUrl: 'https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E6%B8%A9%E6%B3%89.png', desc: '温泉', id: '010'}
      ],
      swiperOption: {autoplay: false}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
.icons>>> .swiper-container{
height: 0;
padding-bottom: 50%;
}
.icons{
margin-top: .1rem;
}
.icons .icon{
position: relative;
overflow: hidden;
float: left;
height: 0;
width: 25%;
padding-bottom: 25%;
/* 宽高比自适应,防止图片没加载时,图片下方的内容移到上方 */
}
.icons .icon .icon-img{
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: .44rem;
box-sizing: border-box;
padding: .1rem;
}
.icons .icon .icon-img .icon-content{
display: block;
margin: 0 auto;
height: 100%;
}
.icons .icon .icon-desc{
position: absolute;
left: 0;
right: 0;
bottom: 0;
height: .44rem;
line-height: .44rem;
text-align: center;
color: $darkTextColor;
font-size: 12px;
font-family: "agency fb";
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}
</style>
