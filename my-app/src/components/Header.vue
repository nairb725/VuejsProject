<template>
   <div class="navbar">
      <router-link class="link-home" to="/">
        <i class="fa fa-arrow-left"></i>
      </router-link>
      <h5>
        <span class="blue">G</span>
        <span class="green">l</span>
        <span class="red">o</span>
        <span class="yellow">u</span>
        <span class="blue">g</span>
        <span class="green">l</span>
        <span class="red">o</span>
        <span class="yellow">u</span>
      </h5>
      <div id="div-header-right-transparent">
      </div>
    </div>
</template>


<style scoped>
.navbar{
  display: flex;
  background-color: #ebede7;
  padding: 0.9rem;
  justify-content: space-between;
  align-items: center;
}

.link-home { 
 margin-left: 3rem;
 color: black;
 font-size: 2em;
}

h5 {
  display: block;
  font-size: 50px;
  font-family:"futura TP demi";
  letter-spacing: -5px;
}

#div-header-right-transparent {
  margin-left: 8em
}

.blue {
  color:#4285f4;
}
.red {
  color:#ea4335;
}
.yellow {
  color:#fbbc05;
}
.green {
  color:#34a853
}
</style>