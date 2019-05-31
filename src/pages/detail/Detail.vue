<template>
  <div>
    <DetailHeader></DetailHeader>
    <DetailBanner></DetailBanner>
    <div class="test"></div>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
export default{
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style scoped>
.test{
height: 50rem;
}
</style>
