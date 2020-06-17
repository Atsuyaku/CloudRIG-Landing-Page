<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
        <Footer></Footer>
    </span>
</template>

<script>
import HomeHero from '../components/HomeHero';
import HomeDetails from '../components/HomeDetails';
import HomePlans from "../components/HomePlans";
import Footer from "../components/Footer";
export default {
    name: 'Home',
    components: {Footer, HomePlans, HomeDetails, HomeHero }
};
</script>

