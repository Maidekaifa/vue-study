<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide  v-for="items of swiperList" :key='items.id'>
               <img :src="items.imgurl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {id: '0001', imgurl: '../../../../static/imgs/home_banner_1.jpg'},
        {id: '0002', imgurl: '../../../../static/imgs/home_banner_2.jpg'},
        {id: '0003', imgurl: '../../../../static/imgs/home_banner_3.jpg'},
        {id: '0004', imgurl: '../../../../static/imgs/home_banner_4.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
.wrapper{
overflow: hidden;
width: 100%;
height: 0;
padding-bottom: 25.6%;
background: #eee;
                                       /********** 宽高比自适应,防止图片没加载时,图片下方的内容移到上方 **********/
}
.wrapper>>>.swiper-pagination-bullet-active{
background: #FFFFFF;
/* ">>>"表示样式穿透,让.wrapper下所有的.swiper-pagination-bullet-active,不被scoped限制 */
}
img{
width: 100%;
}
</style>
