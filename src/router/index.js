import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About';
import Features from '../views/Features';
import Pricing from '../views/Pricing';
import Sign_in from '../views/Sign_in';
import Register from '../views/Register';
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
        path: '/Sign_in',
        name: 'Sign_in',
        component: Sign_in
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
