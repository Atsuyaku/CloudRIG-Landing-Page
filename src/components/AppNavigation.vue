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
        <v-toolbar color="rgb(44, 62, 80)" dark>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            >
            </v-app-bar-nav-icon>

            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link tag="span" to="/"
                ><v-btn text
                    ><v-toolbar-title>{{ appTitle }}</v-toolbar-title></v-btn
                ></router-link
            >
            <v-spacer class="hidden-sm-and-down"></v-spacer>

            <router-link tag="span" to="/Features"
                ><v-btn text class="hidden-sm-and-down "
                    >FEATURES</v-btn
                ></router-link
            >
            <router-link tag="span" to="/Pricing"
                ><v-btn text class="hidden-sm-and-down "
                    >PRICING</v-btn
                ></router-link
            >

            <router-link tag="span" to="/Usage"
            ><v-btn text class="hidden-sm-and-down "
            >USAGE</v-btn
            ></router-link
            >
            <v-btn text color="rgb(44, 62, 80)">
                <v-icon large color="white">
                    far fa-user-circle
                </v-icon>
            </v-btn>


            <v-btn text color="rgb(44, 62, 80)" href="https://github.com/cloudrig/CloudRIG">
                <v-icon large color="white">
                    fab fa-github
                </v-icon>
            </v-btn>
            <v-btn text color="rgb(44, 62, 80)" href="https://patreon.com">
                <v-icon large color="white">
                    fab fa-patreon
                </v-icon>
            </v-btn>
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
.v-btn {
    text-transform: none;
}
</style>
