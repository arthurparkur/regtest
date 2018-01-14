<template>
    <div id="app">
        <div class="main-menu">
            <router-link class="main-menu__link" v-bind:to="'/home'">Home</router-link>
            <router-link class="main-menu__link" v-bind:to="'/about'">About</router-link>
            <router-link class="main-menu__link" v-bind:to="'/whatever'">What ever</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style>
    * {
        box-sizing: border-box;
    }

    .main-menu {
        width : 100%;
        height: 80px;
        background   : #3cbc7b;
        padding-left : 10%;
        margin-bottom: 10px;
    }

    .main-menu__link {
        color      : #ffffff;
        line-height: 80px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size  : 20px;
        text-decoration: none;
    }

    .main-menu__link:not(:first-child) {
        margin-left: 20px;
    }

    .main-menu__link:hover {
        text-shadow: 1px 1px 1px #ffffff, 0 0 1em #ffffff;
    }
</style>
