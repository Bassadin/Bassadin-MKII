<template>
    <div class="home">
        <v-container fluid>
            <v-layout text-center column ma-4>
                <h1 class="display-2 font-weight-bold mb-3">
                    My name is Bastian. I do
                    <vue-typer
                        :text="[
                            'Photography',
                            'Programming',
                            'Webdesign',
                            'Gaming'
                        ]"
                        :shuffle="true"
                        pre-type-delay="400"
                    ></vue-typer
                    >.
                </h1>
                <p class="subheading font-weight-regular">
                    The location-based qr code network
                </p>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
    name: "home",
    components: {
        VueTyper
    }
};
</script>
