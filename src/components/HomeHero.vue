<template>
    <v-container fill-height class="home-hero">
        <v-layout justify-center align-center column pa-10>
            <v-row no-gutters align="center">
                <v-col>
                    <div style="max-width:400px;" class="text-center">
                        <v-img
                            contain
                            src="https://www.cloudrig.io/img/cloudrig-logo.png"
                        ></v-img>
                    </div>
                </v-col>

                <v-col>
                    <div
                        class="display-4 font-weight-black white--text text-center "
                    >
                        CloudRIG
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        class="text-h5 white--text"
                        min-height="60"
                        min-width="250"
                        color="rgb(237,76,103)"
                        href="https://github.com/cloudrig/CloudRIG/releases"
                        ><i class="fa fa-download mr-3"></i>Download
                    </v-btn>
                </v-col>
                <v-col>
                    <router-link tag="span" to="/Usage">
                        <v-btn
                            class="text-h5 white--text"
                            min-height="60"
                            min-width="250"
                            color="rgb(237,76,103)"
                            >Beginner guide
                        </v-btn>
                    </router-link>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-btn
                        fab
                        class="mt-5 grey darken-4"
                        @click="$vuetify.goTo(1000)"
                    >
                        <v-icon large color="blue darken-4">
                            fas fa-angle-down
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background-position-x: 50%;
    background-position-y: 100%;
    background-repeat-y: no-repeat;
    background-repeat-x: repeat;
    width: 100%;
    height: 100%;
}
.v-btn {
    text-indent: initial;
    text-transform: none;
}
</style>
