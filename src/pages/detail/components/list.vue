<template>
  <div class="detail-list">
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="iconfont item-span-icon">&#xe644;</span>{{item.title}}
      </div>
      <div class="item-title-children" v-if="item.children">
        <DetailList :list="item.children"></DetailList> <!--递归组件（自己用自己给自己通信）-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style scoped>
.item-title{
line-height: .8rem;
font-size: .32rem;
padding: 0 .2rem;
}
.item-span-icon{
position: relative;
left: .06rem;
top: .06rem;
display: inline-block;
width: .36rem;
height: .36rem;
margin-right: .1rem;
background-size: .4rem .3rem;
}
.item-title-children{
padding: 0 .3rem;
}
</style>
