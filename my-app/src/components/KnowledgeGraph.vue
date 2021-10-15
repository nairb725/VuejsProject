<template>
    <div class="card">
        <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">{{dataKnowledge.title}}</h4>
            <p class="card-text">{{dataKnowledge.description}}<br><a :href="dataKnowledge.source.url">{{dataKnowledge.source.name}}</a></p>
            <hr>
            <h6>Linked Research</h6>
            <ol>
                <li v-for="known_att,index in dataKnowledge.known_attributes" v-bind:key="index">
                    <div class="flexBetween" v-if="known_att.value === ''">
                        <div>
                            <div><span v-if="known_att.attribute !== 'kc:/location/country:attractions'">{{ getNameLink(known_att.link) }}</span> <span v-if="known_att.attribute === 'kc:/location/country:attractions'">Point of Interest</span></div>
                        </div>
                        <a :href="known_att.link" target="_blank">{{known_att.name}}</a>
                    </div>
                    <div v-if="known_att.value !== ''">
                        <span class="bold">{{known_att.name}}</span>{{known_att.value}}
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
//this.getNameLink("https://www.google.com/search?q=programming&oq=programming&aqs=chrome.0.69i59j0i433i512j0i131i433i512j0i433i512j0i512j0i433i512j0i512j69i60.3411j0j7&sourceid=chrome&ie=UTF-8")

export default {
    name: 'knowledge-graf',
    props: {
        dataKnowledge: Object,
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
.card{
    max-width: 320px;
    margin-left: 1em;
    text-align: start;
}
.flexBetween{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.bold{
    font-weight: 550;
}
</style>