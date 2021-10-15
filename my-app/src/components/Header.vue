<template>
   <div class="navbar row">
      <div class="col-2">
        <div class="return-button">
          <router-link class="link-home" to="/">
            <i class="fa fa-arrow-left"></i>
          </router-link>
          <p>Search : {{ name_search }}</p>
        </div>
      </div>
      <div class="col-8">
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
      </div>
      <div class="col-2">
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
 color: black;
 font-size: 2em;
}

h5 {
  display: block;
  font-size: 50px;
  font-family:"futura TP demi";
  letter-spacing: -5px;
}
p{
  margin: 0;
}

.return-button {
  display: flex;
  align-items: center;
  justify-content: space-around
}

.blue {color:#4285f4;}
.red {color:#ea4335;}
.yellow {color:#fbbc05;}
.green {color:#34a853}
</style>