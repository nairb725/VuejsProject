<template>
  <div>
      <KnowledgeGraph v-bind:dataKnowledge="dataKnowledge.knowledge_graph" v-if="(typeof dataKnowledge.knowledge_graph !== 'undefined')"/>
      <Question v-bind:dataQuestion="dataKnowledge.related_questions" v-if="(typeof dataKnowledge.related_questions !== 'undefined')"/>
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