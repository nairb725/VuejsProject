<template>
    <div class="search">
      <div>
        <h1 class="title">{{title}}https://openclassrooms.com/forum/sujet/limiter-le-nombre-de-caractere-dans-un-div-width</h1>
            <h2 class="display_url">{{display_url}}https://www.linguee.fr/anglais-francais/traduction/programming.html</h2>
            <h3 class="url">
                <input class="searchbar" type="text" value="http://localhost:8083/Result">
                <button class="btn btn-primary btn-block" v-on:click="search">copy link</button>
            </h3>
            <hr  WIDTH="841">
        </div>
  </div>
</template>

<script>
export default {
    name: 'All-List-Object',
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