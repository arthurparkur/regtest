<template>
    <div class="details-content">
        <div class="details-content__title">{{ item.title }}</div>
        <div class="details-content__text">{{ item.text }}</div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return { item: {} }
        },
        methods: {
            loadData: function () {
                this.$http.get('/api/tiles').then(this.getById);
            },
            getById: function (res) {
                this.item = res.body.tiles[this.$route.params.id];
            }
        },
        created: function () {
            this.loadData();
        }
    }
</script>

<style>
    .details-content {
        padding: 0 10%;
        color  : #30ba63;
        font-family: Tahoma, Verdana, Segoe, sans-serif;
    }
    .details-content__title {
        font-size : 20px;
        margin-top: 30px;
        color     : #000000;
    }
    .details-content__text {
        font-size : 18px;
        margin-top: 20px;
        color     : #918c8c;
    }
</style>
