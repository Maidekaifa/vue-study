<template>
<div>
    <div class="recommend">推荐</div>
    <ul>
        <li class="item">
            <img class="item-img" src="#" alt="img" />
            <div class="item-info">
                <p class="item-title"></p>
                <p class="item-desc"></p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
</div>

</template>

<script>
export default{
  name: 'HomeRecommdend'
}

</script>

<style scoped>
.recommend{
margin-top: .6rem;
line-height: .8rem;
text-indent: .2rem;
background: #eee;
}
.item{
display: flex;
overflow: hidden;
height: 1.8rem;
background: #000000;
}
.item-img{
width: 1.7rem;
height: 1.7rem;
padding: .1rem;
}
</style>
