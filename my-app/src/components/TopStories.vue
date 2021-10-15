<template>
    <div id="top-stories">
        <div class="card-body" v-for="(tab, index) in stories" :key="index">    
            <p id="name_top-stories"><a :href="getLink(tab.url)" target="_blank">{{tab.title}}</a></p>
        </div>
    </div>
</template>

<script>

export default {
    name: "TopStories",
    props: {
        stories : Array
    },
    methods: {
        getLink(arg) {
            return "https://www.google.com" + arg
        }
    }
}
</script>

<style scoped>
.card-body {
    margin-top: 2.5rem;
    border: 1px solid rgb(0, 0,0 ,.125);
    width: 95%;
}

#name_top-stories {
    margin-bottom: 25%;
}
</style>