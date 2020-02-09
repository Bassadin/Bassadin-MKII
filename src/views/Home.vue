<template>
    <div class="home">
        <v-row justify="center">
            <h-layout text-center>
                <h1 class="ma-5 text-center">
                    My name is Bastian. I do
                    <vue-typer
                        :text="[
                            'Photography.',
                            'Programming.',
                            'Webdesign.',
                            'Game Programming.'
                        ]"
                        :shuffle="true"
                        :pre-type-delay="600"
                        :type-delay="80"
                        :pre-erase-delay="2500"
                        :erase-delay="50"
                        erase-style="backspace"
                    ></vue-typer>
                </h1>
                <v-flex class="justify-center">
                    <v-img
                        style="margin: 0 auto; border-radius: 50%; padding: 8px;"
                        src="@/assets/Bastian_white_blackBG.jpg"
                        width="100vw"
                        max-width="350px"
                    ></v-img>
                </v-flex>
            </h-layout>
        </v-row>
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
