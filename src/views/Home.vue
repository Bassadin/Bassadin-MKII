<template>
    <div class="home">
        <v-container fluid>
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

            <v-img
                class="mx-auto"
                style="border-radius: 50%; padding: 8px;"
                src="@/assets/Bastian_white_blackBG.jpg"
                width="100vw"
                max-width="350px"
            ></v-img>
            <p class="text-center mt-6">{{ $t("message") }}</p>
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
