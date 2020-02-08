<template>
    <div class="home">
        <v-layout text-center column mt-8>
            <h1 class="display-2 font-weight-bold mb-3">
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
                    :pre-erase-delay="2500"
                    :erase-delay="50"
                    erase-style="backspace"
                ></vue-typer>
            </h1>
            <v-divider></v-divider>
            <v-flex text-center column mt-8>
                <v-img
                    src="@/assets/Bastian_white_blackBG.jpg"
                    max-width="400px"
                ></v-img>
            </v-flex>
        </v-layout>
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
