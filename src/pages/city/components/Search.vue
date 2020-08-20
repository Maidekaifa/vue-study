<template>
  <div>
    <div class="search">
      <input
        :v-model="keyword"
        class="search-input"
        type="text"
        placeholder="请输入城市名或拼音"
      />
    </div>
    <div
      class="search-content"
      ref="searchs"
      v-show="keyword"
    >
      <ul class="search-list">
        <li
          class="searchs border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li
          class="searchs border-bottom"
          v-show="hasList"
        >没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
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
      if (!this.keyword) {
        this.list = []
        return
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
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchs)
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },

}
</script>

<style>
.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: #00bcd4;
}
.search .search-input {
  height: 0.62rem;
  line-height: 0.62rem;
  width: 100%;
  text-align: center;
  border-radius: 0.06rem;
  color: #666;
  padding: 0.1rem;
  box-sizing: border-box;
}
.search-content {
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 1.77rem;
  left: 0;
  bottom: 0;
  z-index: 999;
  background: #eee;
}
.searchs {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  background: #fff;
  color: #666;
}
</style>
