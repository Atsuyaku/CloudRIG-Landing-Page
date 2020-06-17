<template>
    <span>
        <FeaturesContent></FeaturesContent>
        <Footer></Footer>
    </span>
</template>

<script>
import FeaturesContent from '../components/FeaturesContent';
import Footer from '../components/Footer';
export default {
    name: 'Features',
    components: { Footer, FeaturesContent }
};
</script>
