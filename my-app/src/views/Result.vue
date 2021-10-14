<template>
<div> 
  <Header />
  <div class="mt-5 row" v-if="this.$store.result && Object.keys(this.$store.result).lenght!==0 && Object.getPrototypeOf(this.$store.result) !== Object.prototype">
    <div class="col-3"><LeftPart /></div>
    <div class="col-6"><MiddlePart /></div>
    <div class="col-3"><RightPart /></div>
  </div>
</div>
</template>
<script>

//"

// @ is an alias to /src
import LeftPart from '@/components/LeftPart.vue'
import MiddlePart from '@/components/MiddlePart.vue'
import RightPart from '@/components/RightPart.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Result',
  components: {
    LeftPart,
    MiddlePart,
    RightPart,
    Header,
  }
}
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