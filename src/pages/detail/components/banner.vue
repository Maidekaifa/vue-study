<template>
  <div class="banner">
    <img src="../../../../static/imgs/banner4.jpg" />
    <div class="banner_info">
      <div class="banner_title">海南三亚(AAAA景区)</div>
      <div class="banner_number">
        <span class="iconfont banner_icon">&#xe670;</span>5
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style scoped>
.banner{
position: relative;
overflow: hidden;
height: 0;
padding-bottom: 55%;
}
.banner img{
width: 100%;
}
.banner_info{
display: flex;
position: absolute;
left: 0;
right: 0;
bottom: 0;
line-height: .6rem;
color: #FFFFFF;
background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8)); /*背景渐变色top从上到下*/
}
.banner_title{
flex: 1;
font-size: .32rem;
padding: 0 .2rem;
}
.banner_number{
font-size: .24rem;
height: .4rem;
line-height: .32rem;
padding: 0 .32rem;
margin-top: .14rem;
border-radius: .2rem;
background: rgba(0,0,0,.8);
}
.banner_icon{
font-size: .24rem;
}
</style>
