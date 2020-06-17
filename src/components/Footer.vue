<template>
    <v-footer dark color="rgb(44,62,80)">

        <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>&copy;CloudRIG</strong>
        </v-card-text>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>