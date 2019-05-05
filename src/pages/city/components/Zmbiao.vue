<template>
  <div class="zimubiao">
    <ul class="list-zimu">
      <li class="item" v-for="(item,key) in cities" :key="item.id">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Zimubiao',
  props: {
    cities: Object
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
