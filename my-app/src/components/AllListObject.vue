<template>
    <div class="search">
      <div>
        <h1 class="title"><a  :href="dataorganic_results[0].url" target="_blank">{{dataorganic_results[0].title}}</a></h1>
            <h2 class="display_url">{{dataorganic_results[0].displayed_url}}</h2>
            <h3 class="url">
                <input class="searchbar" type="text" :value="dataorganic_results[0].url">
                <button class="btn btn-primary btn-block" v-on:click="search">copy link</button>
            </h3>
            <hr  WIDTH="841">
        </div>
  </div>
</template>



<script>
export default {
    name: 'All-List-Object',
    props:{
        dataorganic_results : Object,
    },
    methods: {
        getNameLink(googleLink){
            let linkName = googleLink.split("&q=").pop()
            console.log(linkName);
        }
    }
}
</script>

<style scoped>
.title{
    font-size: 40px;
    margin-left: 50px;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    
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