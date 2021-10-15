<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                <span>Other asked questions </span>
            </h3>
            <div class="card-q">
                <div v-for="question,index in dataQuestion" v-bind:key="index">
                        <div class="card-r">{{getQuestionLink(question.question)}}<br>
                            <router-link to="/spinner"><button class="styled" v-on:click="search(getQuestionLink(question.question))">Search</button></router-link>
                        </div>
                        <div class="mx-4">
                         <hr WIDTH="160">
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        dataQuestion: Array,
    },
    methods: {
        getQuestionLink(questionLink){
            return questionLink.substring(0, questionLink.indexOf("?")+1);
        },
        search(research){
            this.$store.commit("setCurrentSearch", research)
            this.$store.dispatch("searchResultWithApi");
            localStorage.setItem("name search", research)
        }
    }
}
</script>

<style scoped>
.card{
    max-width: 320px;
    margin-left: 1em;
    margin-top: 14px;
    text-align: start;
}

hr{
    border: none;
    border-top: 1px double #333;
    color: rgb(61, 61, 61);
    overflow: visible;
    text-align: center;
    height: 1px;
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
.styled {
    width: 111px;
     height: 21px;
     font-size: 16px;
     text-align: center;
     line-height: 19px;
     color :rgba(255,255,255,0.9);
     border-radius: 50px;
     background :rgb(19, 99, 248);
     border: none;
}

</style>