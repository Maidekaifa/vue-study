<template>
  <transition>
    <slot></slot>
    <!--公共动画组件-->
  </transition>
</template>

<script>
export default {
  name: 'fade'
}
</script>

<style>
.v-enter,.v-leave-to{
opacity: 0;
}
.v-enter-active,.v-leave-active{
transition: opacity .5s;
}
</style>
