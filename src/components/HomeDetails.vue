<template>
    <v-card color="white" flat style="border-radius:0px">
        <v-container>
            <v-container grid-list-lg>
                <v-layout column black--text>
                    <v-row>
                        <v-col class="display-2 font-weight-white black--text text-md-center my-5">
                            About us
                        </v-col>
                    </v-row
                    >
                    <v-row>
                        <v-col offset="4" cols="4" align="center">
                        <p class="text-h5 text-md-center" >
                            cloudRIG is the cheapest way to use AWS + Parsec for game and other application streaming.
                            When configured, it will set up the requisite AWS
                            infrastructure for you to boot spot instances preloaded with Parsec.
                        </p>
                        </v-col>
                    </v-row>
                </v-layout>
            </v-container>
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: 'HomeDetails'
};
</script>

<style >
</style>
