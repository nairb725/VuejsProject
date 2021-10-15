<template>
  <div>
    <!--<TopStories v-bind:stories="result.top_stories" />-->
  </div>
</template>

<script>
//import TopStories from "./TopStories.vue"

export default {
  name : "Right Part",
  components: {
    //TopStories
  },
  data() {
    return {
      result: this.$store.getters.getCurrentResult,
    }
  }
}
</script>
