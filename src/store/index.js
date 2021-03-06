import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '广州'
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCitys', city)
    }
  },
  mutations: {
    changeCitys (state, city) {
      this.state.city = city
    }
  }
})
