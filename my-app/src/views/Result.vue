<template>
<div class="home row"> 
  <div class="col-4"><LeftPart /></div>
  <div class=" col-4">
  <div><MiddlePart /></div>
  </div>
  <div class="col-4"><RightPart /></div>
</div>
</template>
<script>
// @ is an alias to /src
import LeftPart from '@/components/LeftPart.vue'
import MiddlePart from '@/components/MiddlePart.vue'
import RightPart from '@/components/RightPart.vue'

export default {
  name: 'Result',
  components: {
    LeftPart,
    MiddlePart,
    RightPart,
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