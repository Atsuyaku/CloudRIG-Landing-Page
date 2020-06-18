<template>
        <span>
        <UsageContent></UsageContent>
        <Footer></Footer>
    </span>
</template>

<script>
    import UsageContent from "../components/UsageContent";
    import Footer from "../components/Footer";
    export default {
        name: "Usage",
        components: {Footer, UsageContent}
    }
</script>

<style scoped>

</style>