<template>
  <div>
      <KnowledgeGraph v-bind:dataKnowledge="dataKnowledge.knowledge_graph"/>
      <Question />
  </div>
</template>

<script>
import Question from '@/components/Question.vue';
import KnowledgeGraph from '@/components/KnowledgeGraph.vue';
export default {
    name: 'LeftPart',
    data(){return{
        dataKnowledge: this.$store.getters.getCurrentResult,
    }},
    components: {
        KnowledgeGraph,
        Question,
    }
}
</script>

<style scoped>

</style>