<template>
  <div class="city">
    <div>
      <CityHeader></CityHeader>
      <CitySearch></CitySearch>
      <CityList></CityList>
    </div>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
export default{
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>
