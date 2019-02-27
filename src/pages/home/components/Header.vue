<template>
<div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe601;</div></div>
    <div class="header-mid"><span class="iconfont">&#xe644;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont download-icon">&#xe64a;</span></div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>
.header{
width: 100%;
display: flex;
line-height: .86rem;
background: #00bcd4;
color: #FFFFFF;
}
.header-left{
width: .64rem;
float: left;
}
.header-mid{
flex: 1;
height: .64rem;
margin-top: .12rem;
margin-left: .2rem;
background: #FFFFFF;
border-radius: .1rem;
color: #CCCCCC;
line-height: .64rem;
padding-left: .2rem;
}
.header-right{
width: 1.24rem;
float: right;
text-align: center;
}
.back-icon{
font-size: .4rem;
text-align: center;
}
.download-icon{
text-align: center;
font-size: .24rem;
margin-left: -0.01rem;
}
</style>
