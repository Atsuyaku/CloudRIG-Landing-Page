<template>
    <v-app id="app">
        <app-navigation></app-navigation>
        <v-main transition="slide-x-transition">
            <router-view></router-view>
        </v-main>
        <Footer></Footer>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import Footer from './components/Footer';
export default {
    name: 'App',
    components: {
        Footer,
        AppNavigation
    }
};
</script>

<style>
#app {
    background-color: rgb(52, 73, 94);
}
</style>
