import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSearch:'',
    result: {},
  },
  mutations: {
    setCurrentSearch(state,search){
      state.currentSearch=search;
    },
    setCurrentResult(state, apiResult){
      state.result = apiResult;
      router.push("Result")
    },
  },
  getters: {
    getCurrentResult: state => {
      return state.result;
    },
  },
  actions: {
    searchResultWithApi(){
      const API_KEY = '4a98cf1d2875e450bb3fc62eeb29c049';
      let url = `http://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${this.state.currentSearch}`;

      axios.get(url)
        .then(r=>{
          this.commit('setCurrentResult', r.data);
          console.log(this.getters.getCurrentResult)
        })
    }
  },
})
