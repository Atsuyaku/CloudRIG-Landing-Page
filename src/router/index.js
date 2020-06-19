import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About';
import Features from '../views/Features';
import Pricing from '../views/Pricing';
import Usage from '../views/Usage';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/AboutUs',
        name: 'About',
        component: About
    },
    {
        path: '/Features',
        name: 'Features',
        component: Features
    },
    {
        path: '/Pricing',
        name: 'Pricing',
        component: Pricing
    },
    {
        path: '/Usage',
        name: 'Usage',
        component: Usage
    }
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes
});

export default router;
