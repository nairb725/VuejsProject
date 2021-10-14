<template>
    <div class="card">
        <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Titre de la connaissance recherché</h4>
            <p class="card-text">Description de la Connaissance Description de la Connaissance Description de la Connaissance Description de la Connaissance Description de la Connaissance<br><a href="#">Source de la Connaissance</a></p>
            <hr>
            <h6>Recherche Associée</h6>
            <ol>
                <li>Nom Recherche</li>
                <li>Nom Recherche</li>
            </ol>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: 'knowledge-graf',
}
</script>

<style>
.card{
    max-width: 320px;
    margin-left: 1em;
    text-align: start;
}
</style>