<template>
    <span>
        <HomeDetails></HomeDetails>
        <Footer></Footer>
    </span>
</template>

<script>
import HomeDetails from '../components/HomeDetails';
import Footer from '../components/Footer';
export default {
    name: 'Sign_in',
    components: { Footer, HomeDetails }
};
</script>

<style scoped></style>
