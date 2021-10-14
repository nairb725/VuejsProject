<template>
<div class="row"> 
  <div class="col-4">azeaze</div>
  <div class="home col-4">
    <h1>
      <router-link class="link-home " to="/">
          <span class="blue">G</span>
          <span class="green">l</span>
          <span class="red">o</span>
          <span class="yellow">u</span>
          <span class="blue">g</span>
          <span class="green">l</span>
          <span class="red">o</span>
          <span class="yellow">u</span>
      </router-link>
      </h1>
  </div>
    <div class="col-4">azeaea</div>
</div>
</template>
<script>
// @ is an alias to /src
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "futura TP demi";
  src: url("../assets/font/futura medium bt.ttf");
}
.home{
  margin-top:15vh
}
h1{
  font-size: 100px;
  font-family:"futura TP demi";
   letter-spacing: -7px;
}
.blue{
  color:#4285f4;
}
.red{
  color:#ea4335;
}

.yellow{color:#fbbc05;}
.green{color:#34a853}

.link-home{
 text-decoration:none; 
}

</style>