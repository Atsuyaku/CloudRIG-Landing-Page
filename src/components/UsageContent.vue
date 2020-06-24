<template>
    <v-container class="UsageContent">
        <v-container grid-list-md>
            <v-layout column>
                <v-row>
                    <v-col offset="4" cols="4">
                        <v-card flat style="border-radius:0px">
                            <div
                                class="display-3 pa-2 mt-3 white--text font-weight-bold text-md-center"
                                contain
                                style="background-color: rgb(52, 73, 94)"
                            >
                                Usage
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="pa-1">
                    <v-card color="rgb(52, 73, 94)" flat>
                        <v-row>
                            <v-col cols="6">
                                <v-carousel>
                                    <v-carousel-item
                                        max-width="700"
                                        v-for="(item, i) in items"
                                             :key="i"
                                        :src="item.src"
                                         reverse-transition="fade-transition"
                                               transition="fade-transition"
                                    ></v-carousel-item>
                                </v-carousel>
                                </v-col>
                            <v-col cols="6">
                                     <v-card-text class="px-0 white--text">
                                    <div
                                        class="headline pa-2 mt-3 white--text font-weight-bold"
                                    >
                                        Lorem ipsum
                                    </div>
                                    <p class="subheading mt-3 pa-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Cras pulvinar risus
                                        quis mauris interdum, in euismod nibh
                                        pretium. Etiam pulvinar tincidunt
                                        dapibus. Quisque sollicitudin, mauris a
                                        consequat consectetur, turpis nisl
                                        sollicitudin enim, id consectetur neque
                                        neque nec metus. Pellentesque nisi,
                                        vulputate quis lobortis ac
                                    </p>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'UsageContent',
    data() {
        return {
            items: [
                {
                    src:
                        'https://user-images.githubusercontent.com/348091/42406162-814bc76a-81e5-11e8-800d-84fb5e84a413.png'
                },
                {
                    src:
                        'https://user-images.githubusercontent.com/348091/42406163-817fb4d0-81e5-11e8-979f-1918732aca61.png'
                },
                {
                    src:
                        'https://user-images.githubusercontent.com/348091/42406160-80e67fea-81e5-11e8-9c81-31cb07548666.png'
                },
                {
                    src:
                        'https://user-images.githubusercontent.com/348091/42418364-18d057c0-82e2-11e8-9877-c58a3120c0dd.png'
                },
                {
                    src:
                        'https://user-images.githubusercontent.com/348091/42418357-ef8cd33e-82e1-11e8-838c-087e5422c0d5.png'
                }
            ]
        };
    }
};
</script>

<style scoped></style>
