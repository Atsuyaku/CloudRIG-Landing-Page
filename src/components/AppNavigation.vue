import Vue from 'vue' import Vuetify from 'vuetify/lib'
<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="blue-grey lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar  color="indigo lighten-1" dark>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer">
            </v-app-bar-nav-icon>

            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <router-link tag="span" to="/AboutUs"><v-btn text class="hidden-sm-and-down ">About us</v-btn></router-link>
            <v-btn text class="hidden-sm-and-down ">Features</v-btn>
            <v-btn text class="hidden-sm-and-down ">Pricing</v-btn>
            <v-btn text class="hidden-sm-and-down">Sign in</v-btn>
            <v-btn text class="hidden-sm-and-down"
                >Register</v-btn
            >
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'CloudRIG',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Sign in' },
                { title: 'Register' }
            ]
        };
    }
};
</script>

<style scoped>
    span {
        text-decoration: none;
    }
</style>
