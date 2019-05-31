<template>
  <div>
    <router-link tag="div" to="/" class="header-btns" v-show="headershow">
      <div class="iconfont header-back-icon">&#xe601;</div>
    </router-link>
    <div class="header-texts" v-show="!headershow" :style="opacitystyle">
      <router-link tag="span" to="/" class="iconfont handle-balck">&#xe601;</router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      headershow: true,
      opacitystyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      let scrolltops = document.documentElement.scrollTop
      if (scrolltops > 45) {
        let opacity = scrolltops / 125
        opacity = opacity > 1 ? 1 : opacity
        this.opacitystyle = { opacity }
        this.headershow = false
        console.log(opacity)
      } else {
        this.headershow = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 绑定scroll事件，当它被执行的时候,对应的handleScroll方法会被执行
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.header-btns{
width: .7rem;
height: .7rem;
line-height: .7rem;
border-radius: .7rem;
position: absolute;
left: .2rem;
top: .2rem;
background: rgba(0, 0, 0, 0.8);
color: #FFFFFF;
z-index: 999;
text-align: center;
}
.header-texts{
width: 100%;
position: fixed;
left: 0;
top: 0;
right: 0;
line-height: .86rem;
background: #00bcd4;
color: #FFFFFF;
text-align: center;
font-size: .35rem;
z-index: 2;
}
.handle-balck{
color: #FFFFFF;
font-size: .35rem;
position: absolute;
left: .2rem;
}
</style>
