import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_search:''
  },
  mutations: {
    setcurrent_search(state,search){
      state.current_search=search
      console.log(state.current_search)
    }
  },
  actions: {
  },
  modules: {
  }
})
