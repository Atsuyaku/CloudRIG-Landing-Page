<template>
    <v-footer dark color="rgb(33, 37, 41)">
        <v-card-text class="py-2 white--text text-center">
            Made with &#10084; in Toulouse
        </v-card-text>
        <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>&copy;CloudRIG</strong>
        </v-card-text>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style scoped></style>
