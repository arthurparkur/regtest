import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Home from './components/Home.vue';
import Details from './components/Details.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'},
    {
        path: '/home',
        name: 'home',
        component: Home},
    {
        path: '/details/:id',
        name: 'details',
        component: Details}
];

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router
}).$mount('#app');
