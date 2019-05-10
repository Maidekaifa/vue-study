<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <div class="search-content">
      <ul class="search-list">
        <li class="searchs">123</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
  	keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)	
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
}
</script>

<style>
.search{
height: .72rem;
padding: 0.1rem;
background: #00BCD4;
}
.search .search-input{
height: .62rem;
line-height: .62rem;
width: 100%;
text-align: center;
border-radius: .06rem;
color: #666;
padding: 0.1rem;
box-sizing: border-box;
}
.search-content{
overflow: hidden;
width: 100%;
position: absolute;
top: 1.77rem;
left: 0;
bottom: 0;
z-index: 999;
background: green;
}
</style>
