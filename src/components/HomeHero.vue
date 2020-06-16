<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-10>
            <v-row no-gutters align="center">
                <v-col offset="2" cols="1">
                    <v-img min-height="300px"
                           min-width="300px"
                        contain
                        src="https://www.cloudrig.io/img/cloudrig-logo.png"
                    ></v-img>
                    <v-col></v-col>
                </v-col>

                <v-col offset="3" cols="1">
                    <div
                        class="display-4 font-weight-black orange--text text-xs-center"
                    >
                        cloudRIG
                    </div>
                    <div
                        class="display-1 font-weight-bold orange--text text-xs-center"
                    >
                        powered by
                    </div>
                    <div
                        class="display-4 font-weight-black orange--text text-xs-center"
                    >
                        parsec
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-btn fab class="mt-5 grey darken-4">
                        <v-icon class="material-icons" large color="white">
                            keyboard_arrow_down
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
    background: url('https://i.redd.it/lfndtoirttvx.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
