<template>
  <div>
      <AllListObject v-bind:dataorganic_results="dataorganic_results.organic_results"/>
  </div>


</template>

<script>
import AllListObject from '@/components/AllListObject.vue';
export default {
    name: 'MiddlePart',
    data(){return{
        dataorganic_results: this.$store.getters.getCurrentResult,
    }},
    components: {
        AllListObject,
    }
}
</script>

<style scoped>

</style>