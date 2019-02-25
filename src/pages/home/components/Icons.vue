<template>
<div>
    <div class="icons">
<!--*****************************这是一个首页图标菜单的组件**************************-->
        <div class="icon">
            <div class="icon-img">
                <img class="icon-content" src="" />
            </div>
            <p class="icon-desc"></p>
        </div>
    </div>
</div>
</template>

<script>
export default{
  name: 'HomeIcons'
}
</script>

<style scoped>
.icons{
margin-top: .1rem;
}
.icons .icon{
position: relative;
overflow: hidden;
float: left;
width: 25%;
height: 0;
padding-bottom: 25%;
background: darkmagenta;
}
.icons .icon .icon-img{
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: .44rem;
box-sizing: border-box;
padding: .1rem;
}
.icons .icon .icon-img .icon-content{
display: block;
margin: 0 auto;
height: 100%;
background: #333333;
}
.icons .icon .icon-desc{
position: absolute;
left: 0;
right: 0;
bottom: 0;
height: .44rem;
line-height: .44rem;
text-align: center;
color: $darkTextColor;
background: #000000;
}

</style>
