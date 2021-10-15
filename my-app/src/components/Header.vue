<template>
   <div class="navbar">
      <div class="div-header-transparent">
        <div id="div-header-left-transparent">
          <router-link class="link-home" to="/">
            <i class="fa fa-arrow-left"></i>
          </router-link>
          <p id="name-search-result">Search : {{ name_search }}</p>
        </div>
      </div>
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
      <div class="div-header-transparent">
      </div>
      <div class="div-header-transparent">
      </div>
    </div>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {
      name_search: localStorage.getItem("name search")
    }
  }
}
</script>

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

#directional {
  
}

h5 {
  display: block;
  font-size: 50px;
  font-family:"futura TP demi";
  letter-spacing: -5px;
}

.div-headertransparent {
  display: flex;
}

#div-header-left-transparent {
  display: flex;
  align-items: center;
}

#name-search-result {
  margin-bottom: 0.4rem;
  margin-left: 2rem;
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