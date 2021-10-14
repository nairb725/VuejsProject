import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
      console.log(state.result);
    },
  },
  actions: {
    searchResultWithApi(){
      const API_KEY = 'ce18cc5fc5222e293b85e1dfd0410640';
      let url = `http://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${this.state.currentSearch}`;

      axios.get(url)
        .then(r=>{
          this.commit('setCurrentResult', r.data);
        })
    }
  },
  modules: {
  }
})
