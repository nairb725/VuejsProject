<template>
    <div class="search">
        <div>
            <div v-for="known_att,index in dataorganic_results" v-bind:key="index">
                <div>
                    <div class="url mx-5">{{removeLastDisplayUrl(known_att.displayed_url)}}</div> 
                    <div class="title mx-5"><a class="titleUrl" :href="known_att.url" target="_blank">{{known_att.title}}</a></div>
                    <div class="url mx-5"><input class="searchbar py-1 px-2" type="text" :value="known_att.url" readonly></div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'All-List-Object',
    props:{
        dataorganic_results : Array,
    },
    methods: {
        removeLastDisplayUrl(url){
            //sometimes the api gave 2 displayed_url in one string
            return 'http' + url.split('http').pop()
        }
    }
}
</script>

<style scoped>
.title{
    font-size: 25px;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;  
}
.titleUrl{
    text-decoration: none;
    color : black;
}
.titleUrl:hover{
    background-color: #eaeaeaad;
    text-decoration: underline black;
}
.url{
    font-size: 12px;
}
.search{
    text-align: left;
    margin-bottom: 50px;
}
.btn-primary{
    border-radius: 0 10px 10px 0;
}
.searchbar{
    width: 100%;
    border-radius: 10px;
    border-color: #d4d4d4;
    border-style:solid;
    background-color: #eeeeee;
    font-style:italic;
}

</style>