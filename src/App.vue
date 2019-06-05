<template>
  <div id="app">
    <keep-alive exclude="Detail"><!--除了Detail组件的其他页面都会被缓存（那么Detail每次进入页面都会重新执行钩子函数也就是生命周期函数）-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
