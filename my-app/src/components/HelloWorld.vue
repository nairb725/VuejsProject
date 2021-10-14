<template>
<div class="row pt-5">
  <div class="col-3"></div>
  <div class="col-6 search">
    <input class="searchbar" type="text" v-model="search_input" id="search" placeholder="search here...">
    
    <router-link to="Result">
      <button class="btn btn-primary btn-block" v-on:click="search">
        <i class="fas fa-search"></i>
      </button>
    </router-link>
  </div>
  <div class="col-3"></div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
      return{
        search_input:'',
      }
    },
    methods:{
      search(){
        this.$store.commit("setCurrentSearch", this.search_input)
        this.$store.dispatch("searchResultWithApi");
        this.search_input = '';
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-primary{
  border-radius: 0 10px 10px 0;
}
svg{
  fill:white
}
.searchbar {
    width: 500px;
    border-radius: 10px 0 0 10px;
    padding: 0px 10px;
    border-color: #d4d4d4;
    border-style:solid;
    border-right: none;
}
.search {
    display: flex;
    justify-content: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
