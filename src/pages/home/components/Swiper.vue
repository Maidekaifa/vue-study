<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <swiper-slide>
               <img src="../../../../static/imgs/home_banner_1.jpg" />
            </swiper-slide>
            <swiper-slide>
               <img src="../../../../static/imgs/home_banner_2.jpg" />
            </swiper-slide>
            <swiper-slide>
               <img src="../../../../static/imgs/home_banner_3.jpg" />
            </swiper-slide>
            <swiper-slide>
               <img src="../../../../static/imgs/home_banner_4.jpg" />
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
      swiperOption: {}
    }
  }
}
</script>

<style scoped>

</style>
