<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                <span>Autres questions posées</span>
            </h3>
            <div class="card-q">
                <div v-for="question,index in dataQuestion" v-bind:key="index">
                    {{dataQuestion[0].question}}
                        <div class="card-r">{{question}}<br>
                            <a href="dataQuestion.source.url">Recherche</a>
                        </div>

                    <hr WIDTH="160">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        dataQuestion: Object,
    },
    methods: {
        getQuestionLink(questionLink){
            return questionLink.substring(0, questionLink.indexOf("?"));
        }
    }
}
</script>

<style>
.card{
    max-width: 320px;
    margin-left: 1em;
    text-align: start;
}

.hr{
    border: none;
    border-top: 3px double #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
}

hr:after {
    background: #fff;
    padding: 0 4px;
    position: relative;
    top: -13px;
}   
.card-r{
    padding-left: 5px;
}
.card{
    margin-bottom: 1rem;
}
</style>