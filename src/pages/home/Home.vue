<template>
  <div>
      <!--首页部分-->
      <home-header :city="city"><!--父组件向子组件传值，通过属性的形式--></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-recommend></home-recommend>
      <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      city: ''
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getuserinfo () {
      axios.get('/api/index.json')
      // 在config的index.js中的proxy已经配置了以api开头的，会自动转发到本地的static文件中的mocks文件夹中,取到里面的文件
        .then(this.getHomeinfo).catch(err => {
          console.log('获取数据异常', err)
        })
    },
    getHomeinfo (res) {
      res = res.data
      console.log('获取数据成功')
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        // console.log(data)
      }
    }
  },
  mounted () {
    this.getuserinfo()
  }
}
</script>

<style scoped>
</style>
