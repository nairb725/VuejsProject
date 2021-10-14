<template>
  <div>
      <KnowledgeGraph />
      <Question />
  </div>
</template>

<script>
import Question from '@/components/Question.vue';
import KnowledgeGraph from '@/components/KnowledgeGraph.vue';
export default {
    name: 'LeftPart',
    components: {
        KnowledgeGraph,
        Question,
    }
}
</script>

<style scoped>

</style>