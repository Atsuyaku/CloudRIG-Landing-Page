<template>
    <div>
               <div class="home-hero"><home-hero></home-hero></div>
        <home-details></home-details>
                   </div>
</template>

<script>
import HomeHero from '../components/HomeHero';
import HomeDetails from '../components/HomeDetails';

export default {
    name: 'Home',
    components: { HomeDetails, HomeHero }
};
</script>

<styl   e>
.home-hero {
    background-image: url('../assets/cloud.png');
    background-position-x: 50%;
    background-position-y: 100%;
    background-repeat-y: no-repeat;
    background-repeat-x: repeat;
    width: 100%;
    height: 100%;
}
</style>
