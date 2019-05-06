<template>
  <div class="zimubiao">
    <ul class="list-zimu">
      <li class="item"
        @click="handleLetterClick"
        @touchstart="handleTouchstart"
        @touchmove="handleTouchmove"
        @touchend="handleTouchend"
        v-for="(item,key) in cities" :key="item.id"
        >
      {{key}}
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
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      // 子组件向外触发事件
    },
    handleTouchstart () {
        console.log(1)
    },
    handleTouchmove () {
        console.log(2)
    },
    handleTouchend () {
        console.log(3)
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
