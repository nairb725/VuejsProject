<template>
  <div class="home">
    <h1>
      <span class="blue">G</span>
      <span class="red">l</span>
      <span class="yellow">o</span>
      <span class="green">u</span>
      <span class="blue">g</span>
      <span class="red">l</span>
      <span class="yellow">o</span>
      <span class="green">u</span>
    </h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-size: 150px;
  font-family:"Product sans", sans-serif
}
.blue{
  color:#4285f4;
}
.red{
  color:#ea4335;
}

.yellow{color:#fbbc05;}
.green{color:#34a853}
</style>