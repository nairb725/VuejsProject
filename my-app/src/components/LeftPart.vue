<template>
  <div>
      <KnowledgeGraph v-bind:dataKnowledge="dataKnowledge.knowledge_graph"/>
      <Question v-bind:dataQuestion="dataKnowledge.related_questions"/>
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