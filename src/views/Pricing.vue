<template>
    <span>
        <PricingContent></PricingContent>
        <Footer></Footer>
    </span>
</template>

<script>
import Footer from '../components/Footer';
import PricingContent from '../components/PricingContent';
export default {
    name: 'Pricing',
    components: { PricingContent, Footer }
};
</script>

<style scoped></style>
