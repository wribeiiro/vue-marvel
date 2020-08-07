<template>
    <md-card class="card-default">
        <h2>{{title}}</h2>
        <img class="comic-image" :src="image"/>
        <p>{{description}}</p>
    </md-card>
</template>

<script>
export default {
    name: 'comic',
    props: {
        image: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    }
}
</script>

<style scoped>
    .card-default {
        padding: 28px;
        margin: 18px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #FFF !important;
        height: auto;
    }

    .card-default h2 {
        text-align: center;
    }

    .card-default p {
        text-align: justify;
    }

    .comic-image {
        width: 120px;
    }
</style>