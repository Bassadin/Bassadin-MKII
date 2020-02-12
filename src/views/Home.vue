<template>
    <div class="home">
        <v-container fluid>
            <h1 class="ma-5 text-center">
                {{ $t("homepage.myNameIsIDo") }}
                <vue-typer
                    :text="$t('homepage.iDoOptions')"
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
        </v-container>
        <v-container>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                    v-for="(item, i) in timelineItems"
                    :key="i"
                    :color="item.color"
                    :icon="item.icon"
                    fill-dot
                >
                    <v-card :color="item.color" dark>
                        <v-card-title class="title">{{
                            item.cardTitle
                        }}</v-card-title>
                        <v-card-text class="white text--primary">
                            <p class="pt-4">
                                {{ item.cardText }}
                            </p>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
    name: "home",
    components: {
        VueTyper
    },
    data: () => ({
        timelineItems: [
            {
                color: "purple",
                icon: "mdi-domain",
                cardTitle: "Abitur",
                cardText:
                    "Abitur am Martin-Schongauer-Gymnasium in Breisach am Rhein - Note 1,8"
            }
        ]
    })
};
</script>
