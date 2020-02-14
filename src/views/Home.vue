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
                    <v-card :color="item.color" :dark="item.dark">
                        <v-card-title>{{ item.cardTitle }}</v-card-title>
                        <v-card-subtitle :v-if="item.timeRangeString">{{
                            item.timeRangeString
                        }}</v-card-subtitle>
                        <v-card-text class="white text--primary pt-4 pb-1">
                            <p
                                v-for="(html, i) in item.cardTexts"
                                :key="i"
                                v-html="html"
                            ></p>
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
                timeRangeString: "2007-2015",
                dark: true,
                cardTitle: "Abitur MSG Breisach",
                cardTexts: [
                    "Abitur am <a href='https://msg-breisach.de/' target='blank'>Martin-Schongauer-Gymnasium in Breisach am Rhein</a>",
                    "Note: 1,8"
                ]
            },
            {
                color: "blue darken-3",
                icon: "mdi-school",
                timeRangeString: "2015-2018",
                dark: true,
                cardTitle: "Studium Wirtschaftsinformatik (B.Sc.) DHBW Lörrach",
                cardTexts: [
                    "Duales Studium beim Unternehmen <a href='https://www.hrworks.de/' target='blank'>HRworks</a> in Freiburg im Breisgau",
                    "Nicht abgeschlossen"
                ]
            },
            {
                color: "yellow darken-2",
                icon: "mdi-school",
                timeRangeString: "2018-2019",
                cardTitle: "Smalltalk Entwickler HRworks GmbH",
                cardTexts: [
                    "Ein Jahr zusätzliche Arbeitserfahrung beim Unternehmen <a href='https://www.hrworks.de/' target='blank'>HRworks</a> in Freiburg im Breisgau"
                ]
            }
        ]
    })
};
</script>

<style scoped>
/* Temporary Hack because of issue https://github.com/vuetifyjs/vuetify/issues/9130 */
.v-card__text,
.v-card__title {
    word-break: normal; /* maybe !important  */
}
</style>
