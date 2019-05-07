<template>
  <div class="zimubiao">
    <ul class="list-zimu">
      <li class="item"
        @click="handleLetterClick"
        @touchstart="handleTouchstart"
        @touchmove="handleTouchmove"
        @touchend="handleTouchend"
        v-for="item in letters" :key="item" :ref="item"
        >
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Zimubiao',
  props: {
    cities: Object
  },
  data () {
    return {
      touchstatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      // 子组件向外触发事件
    },
    handleTouchstart () {
      this.touchstatus = true
    },
    handleTouchmove (e) {
      if (this.touchstatus) {
        if (this.timer) { // 为了提高函数的性能  做*****函数节流******
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop// A距离顶部的距离  为了提高性能，把startY在渲染页面之后直接算出来
          // console.log(startY)
          const touchY = e.touches[0].clientY - 89// 手指距离顶部的距离  顶部蓝色区域总高度43+46px
          // console.log(touchY)
          // 获取字母下标   （手距离搜索框顶部的距离-A距离顶部的距离）=手滑动的距离   然后手滑动的距离÷字母高度=字母下标
          const indexs = Math.floor((touchY - this.startY) / 20)
          // console.log(indexs)
          if (indexs >= 0 && indexs < this.letters.length) {
            this.$emit('change', this.letters[indexs])
          }
        }, 16)
      }
    },
    handleTouchend () {
      this.touchstatus = false
    }
  }
}
</script>

<style scoped>
.list-zimu{
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
top: 1.77rem;
right: 0;
bottom: 0;
width: .4rem;
}
.item{
text-align: center;
line-height: .4rem;
color: #25A4BB;
}
</style>
