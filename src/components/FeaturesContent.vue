<template>
    <v-container class="FeaturesContent">
        <v-container grid-list-lg>
            <v-card dark color="rgb(52, 73, 94)" class="pa-4" flat>
                <v-layout column>
                    <v-flex
                            class="display-2 font-weight-white white--text text-xs-center my-5"
                        >Features</v-flex
                    >
                      <v-flex>
                        <p class="text-h5 mt-3">
                            Stream games and applications for approx. $0.13/hr
                            <br /><br />
                            Schedule shut down for the end of the current
                            billing hour (AWS charges by the hour)<br /><br />
                            2 minute termination warning overlay<br /><br />
                            Auto-saves your rig when you stop or are booted
                            off<br /><br />
                            Attach, extend a separate game drive<br /><br />
                            Choose either g2.2xlarge and g3.4xlarge instance
                            types
                        </p>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'UsageContent',
    components: {}
};
</script>

<style scoped></style>
