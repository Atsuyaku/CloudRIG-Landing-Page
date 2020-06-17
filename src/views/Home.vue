<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <v-divider></v-divider>
        <Footer></Footer>
    </span>
</template>

<script>
import HomeHero from '../components/HomeHero';
import HomeDetails from '../components/HomeDetails';
import Footer from '../components/Footer';
export default {
    name: 'Home',
    components: { Footer, HomeDetails, HomeHero }
};
</script>
