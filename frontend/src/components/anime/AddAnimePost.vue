<template>
    <v-app id="inspire">
        <v-main>
            <v-container style="margin-top: 50px">
                <v-sheet min-height="85vh">
                    <v-container class="form">
                        <!-- <v-card elevation="0">
                            <v-row>
                                <v-col>
                                    <v-flex xs12 sm12 md12>
                                        <picture-input 
                                            ref="pictureInput" 
                                            @change="onChange"
                                            class="pic-btn mb-5"
                                            width="200" 
                                            height="200"
                                            margin="16"
                                            accept="image/jpeg,image/png"
                                            :customStrings="{
                                                upload: '<h1>Bummer!</h1>',
                                                drag: 'Select a photo'
                                            }"
                                        >
                                        </picture-input>
                                    </v-flex>
                                </v-col>
                                <v-col>
                                    <v-flex xs12 sm12 md12>
                                        <v-text-field
                                            label="Name"
                                            color="#2C3A47"
                                            class="text-msg"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm12 md12>
                                        <v-text-field
                                            label="Genre"
                                            color="#2C3A47"
                                            class="text-msg"
                                        ></v-text-field>
                                    </v-flex>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <div class="ml-5">Synopsis</div>
                                    <v-textarea
                                        class="overflow-auto"
                                        solo
                                        height="500"
                                    ></v-textarea>
                                </v-col>
                                <v-col>
                                    <v-row>
                                        <v-col class="d-flex justify-center align-end mb-1">
                                            <div>Director</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Director"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="d-flex justify-center align-end mb-1">
                                            <div>Producer</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Producer"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="d-flex justify-center align-end mb-1">
                                            <div>Music</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Music"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="d-flex justify-center align-end mb-1">
                                            <div>Studio</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Studio"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="d-flex justify-center align-end mb-1">
                                            <div>Episodes</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Episodes"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card> -->
                        <v-card elevation="0">
                            <v-row>
                                <v-col cols="5">
                                    <v-flex xs12 sm12 md12>
                                        <picture-input 
                                            ref="pictureInput" 
                                            @change="onChange"
                                            class="pic-btn mb-5"
                                            width="300" 
                                            height="300"
                                            margin="16"
                                            accept="image/jpeg,image/png"
                                            :customStrings="{
                                                upload: '<h1>Bummer!</h1>',
                                                drag: 'Select a photo'
                                            }"
                                        >
                                        </picture-input>
                                    </v-flex>
                                    <v-row>
                                        <v-col cols="4" class="d-flex justify-center align-end mb-1">
                                            <div>Director</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Director"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4"  class="d-flex justify-center align-end mb-1">
                                            <div>Producer</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Producer"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4"  class="d-flex justify-center align-end mb-1">
                                            <div>Music</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Music"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4"  class="d-flex justify-center align-end mb-1">
                                            <div>Studio</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Studio"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4"  class="d-flex justify-center align-end mb-1">
                                            <div>Episodes</div>
                                        </v-col>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Episodes"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col>
                                    <v-row>
                                        <v-col>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Name"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field
                                                    label="Genre"
                                                    color="#2C3A47"
                                                    class="text-msg"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <div class="ml-5 mt-9 mb-2">Synopsis</div>
                                    <v-col class="overflow-auto text-msg pa-0" style="height:500px;">
                                        <v-textarea
                                            auto-grow
                                            flat
                                        ></v-textarea>
                                    </v-col>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-container>
                </v-sheet>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import PictureInput from 'vue-picture-input'
    export default {
        name: "Signup",
        components: {
            PictureInput
        },
        data() {
            return {}
        },
        methods: {
            onChange () {
                console.log('New picture selected!')
                if (this.$refs.pictureInput.image) {
                    this.currentFile = this.$refs.pictureInput.file;
                    console.log('Picture selected.', this.$refs.pictureInput.file)
                } else {
                    console.log('FileReader API not supported')
                }
            }
        },
    }
</script>

<style>
.text-msg .v-text-field__details {
    display: none !important;
}
.text-msg-rb .v-messages {
    display: none !important;
}
.my-text{
    text-align: center;
    font-size: 19px;
    margin-bottom: 20px;
    line-height: 1.6;
    font-weight: lighter;
}
.pic-btn .btn{
    display: none !important;
}
.pic-btn .picture-inner{
    border: none;
}
</style>