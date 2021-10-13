<template>
<div class="row pt-5">
  <div class="col-3"></div>
  <div class="col-6 search">
    <input class="searchbar" type="text" v-model="search_input" id="search" placeholder="search here...">
    <button class="btn btn-danger btn-block" v-on:click="search">Search</button>
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
      this.$store.commit("setcurrent_search", this.search_input)
      this.search_input = '';
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbar {
    width: 500px;
}
.search {
    display: flex;
    justify-content: space-evenly;
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
