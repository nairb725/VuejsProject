<template>
    <div class="search">
        <div>
            <div v-for="known_att,index in dataorganic_results" v-bind:key="index">
                <div>
                    <div class="title"><a class="titleUrl" :href="known_att.url" target="_blank">{{known_att.title}}</a></div>
                    <div class="display_url">{{ getNameLink(known_att.displayed_url) }} {{known_att.displayed_url}}</div> 
                    <div class="url">
                        <input class="searchbar" type="text" :value="known_att.url">
                        <button class="btn btn-primary btn-block" v-on:click="search">copy link</button>
                    </div>
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
    font-size: 30px;
    margin-left: 50px;
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
    margin-left: 50px;
}
.url{
    font-size: 20px;
    margin-left: 50px;
}
.search{
    text-align: left;
    margin-bottom: 50px;
}
.btn-primary{
    border-radius: 0 10px 10px 0;
}
.searchbar{
width: 85%;
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