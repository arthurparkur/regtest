<template>
    <div class="home-content">
        <div class="home-content__item"
             v-for="item in tiles"
             v-bind:class="{ double: item.type == 'double' }">
            <router-link v-bind:to="{ name: 'details', params: { id: item.id }}">
                <div class="home-content__item-title">{{ item.title }}</div>
                <div class="home-content__item-description">{{ item.description }}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {tiles: []}
        },
        methods: {
            loadData: function () {
                this.$http.get('/api/tiles').then(this.loadSuccess)
            },
            loadSuccess: function (res) {
                this.tiles = res.body.tiles;
            }
        },
        created: function () {
            this.loadData();
        }
    }
</script>

<style>
    .home-content {
        padding: 0 10%;
    }

    .home-content__item {
        float      : left;
        width      : calc(100% / 3);
        height     : 200px;
        background : url(http://lorempixel.com/400/200/) no-repeat center center;
        border     : 2px solid #ffffff;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .home-content__item > a {
        display  : block;
        width    : 100%;
        color    : #ffffff;
        padding  : 10px;
        font-size: 22px;
        height   : 100%;
        text-shadow    : 0 0 15px black, 2px 2px 14px black;
        text-decoration: none;
    }

    .home-content__item-description {
        margin-top: 20px;
    }

    .double {
        width: calc(100% / 3 * 2);
        background: url(http://lorempixel.com/800/200/) no-repeat center center;
    }

    @media (max-width: 1024px) {
        .home-content__item {
            width: calc(100% / 2);
        }

        .double {
            width: 100%;
        }
    }

    @media (max-width: 479px) {
        .home-content__item {
            width: 100%;
        }

        .double {
            width: 100%;
        }
    }
</style>
