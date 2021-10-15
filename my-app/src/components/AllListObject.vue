<template>
    <div class="search">
        <div>
            <div v-for="known_att,index in dataorganic_results" v-bind:key="index">
                <div>
                    <div class="title mx-5"><a class="titleUrl" :href="known_att.url" target="_blank">{{known_att.title}}</a></div>
                    <div class="display_url mx-5">{{ getNameLink(known_att.displayed_url) }} {{known_att.displayed_url}}</div> 
                    <div class="url mx-5"><input class="searchbar" type="text" :value="known_att.url"></div>
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
        getNameLink(googleLink){
            let linkName = googleLink.split("&q=").pop()
            return linkName.substring(0, linkName.indexOf("&")).replace("+", " ");
        }
    }
}
</script>

<style scoped>
.title{
    font-size: 40px;
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
.display_url{
    font-size: 15px;
}
.url{
    font-size: 20px;
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
border-radius: 10px 0 0 10px;
border-color: #d4d4d4;
border-style:solid;
border-right: none;
padding-top: 4px;
padding-bottom: 7px;
padding-left:10px;
background-color: #eeeeee;
color: black;
font-style:italic;
}

</style>