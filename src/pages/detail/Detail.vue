<template>
  <div>
    <DetailHeader></DetailHeader>
    <DetailBanner></DetailBanner>
    <DetailList :list="list"></DetailList>
    <div class="test"></div>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
export default{
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三景点联票',
          children: [{title: '（最下级）成人单票'}]
        }, {
          title: '成人五景点联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style scoped>
.test{
height: 50rem;
}
</style>
