<template>
<div>
    <div class="weekend">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <!--上面class类border-bottom用的就是处理1像素边框那CSS文件的-->
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" alt="img" />
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
    <p class="item-p"><a class="item-a" href="#">查看全部景点</a></p>
</div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [
        {id: '001', imgUrl: 'https://imgs.qunarzz.com/p/tts9/1803/eb/ab21dece1058d502.jpg_160x160_8e23825b.jpg', title: '【7-10-12点】纯玩八达岭长城+往返直通车，门票午餐可选', desc: '出发地：北京'},
        {id: '002', imgUrl: 'https://imgs.qunarzz.com/p/tts8/1901/e8/a3a86dd03bb01702.jpg_160x160_dcc8ea59.jpg', title: '【可订当天】10-12点懒游晚起-八达岭长城自助漫游1日游', desc: '出发地：北京'},
        {id: '003', imgUrl: 'https://imgs.qunarzz.com/p/tts3/1806/ce/69a4638786138902.jpg_160x160_34d87685.jpg', title: '广州岭南纯玩一日游（9大景点/2个正餐/全程导服/旅游大巴）', desc: '出发地：广州'},
        {id: '004', imgUrl: 'https://imgs.qunarzz.com/p/tts3/1811/cb/906065befeb09102.jpg_160x160_64869f56.jpg', title: '【春季钜惠价休闲团】增城白水寨风景名胜区直通车纯玩一日游', desc: '出发地：广州'},
        {id: '005', imgUrl: 'https://imgs.qunarzz.com/p/tts0/1708/b0/29f1a343e085fb02.jpg_160x160_cdca4083.jpg', title: '门票全含，游艇出海环岛+世界之窗或锦绣中华+地王+中英街一日', desc: '出发地：深圳'},
        {id: '006', imgUrl: 'https://imgs.qunarzz.com/p/tts0/1811/77/015af429e32e1202.jpg_160x160_0f385543.jpg', title: '深圳/香港—车行港珠澳大桥+澳门深度美食纯玩1天，大三巴牌坊', desc: '出发地：深圳'}
      ]
    }
  }
}
</script>

<style scoped>
.weekend{
margin-top: .1rem;
line-height: .8rem;
text-indent: .2rem;
font-weight: bold;
font-size: .4rem;
}
.item{
display: flex;
overflow: hidden;
height: 1.9rem;
}
.item-img-wrapper{

}
.item-img{
width: 1.7rem;
height: 1.7rem;
padding: .1rem;
border-radius: .2rem;
}
.item-info{
flex: 1;
padding: .1rem;
}
.item-title{
line-height: .38rem;
}
.item-desc{
line-height: .4rem;
font-size: .16rem;
color: #ccc;
}
.item-button{
margin-top: .06rem;
color: #EEEEEE;
border-radius: .1rem;
padding: 0 .2rem;
background: #00BCD4;
}
.item-a{
border-radius: .2rem;
border:1px solid #00BCD4;
padding: .1rem 2rem;
line-height: .56rem;
}
.item-p{
margin-top: .1rem;
text-align: center;
}
</style>
