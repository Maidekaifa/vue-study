<template>
  <div class="city">
    <div><!--父组件数据传给子组件-->
      <CityHeader></CityHeader>
      <CitySearch></CitySearch>
      <CityList :letter='letter' :cities='cities' :hot='hotCities'></CityList>
      <CityZimu :cities='cities' @change="handleLetterchange"></CityZimu>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityZimu from './components/Zmbiao'
export default{
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityZimu
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityinfo()
  },
  methods: {
    getCityinfo () {
      axios.get('/api/city.json')
        .then(this.handleCitysuccess)
    },
    handleCitysuccess (res) {
      // console.log(res, '获取城市列表数据成功')
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
        // console.log(this.hotCities)
      }
    },
    handleLetterchange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  }
}
</script>
