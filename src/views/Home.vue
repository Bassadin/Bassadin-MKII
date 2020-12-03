<template>
    <v-container>
        <v-container fluid>
            <h1 class="ma-5 text-center typerHeadline">
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
                max-width="350px"
            ></v-img>
        </v-container>
        <v-row justify="center">
            <v-col xl="7" lg="8" md="10">
                <p>{{ $t("homepage.timelineDescription") }}</p>

                <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                        v-for="(item, i) in timelineItems"
                        :key="i"
                        :color="item.color"
                        :icon="item.icon"
                        fill-dot
                    >
                        <v-card :color="item.color" :dark="item.dark">
                            <v-card-title>{{
                                $t("timelineItems")[i].cardTitle
                            }}</v-card-title>
                            <v-card-subtitle :v-if="item.timeRangeString">{{
                                item.timeRangeString
                            }}</v-card-subtitle>
                            <v-card-text class="white text--primary pa-4">
                                <ul class="">
                                    <li
                                        v-for="(html, j) in $t('timelineItems')[
                                            i
                                        ].cardTexts"
                                        :key="j"
                                        v-html="html"
                                    ></li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
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
                timeRangeString: "2007 - 2015",
                dark: true
            },
            {
                color: "blue darken-3",
                icon: "mdi-school",
                timeRangeString: "2015 - 2018",
                dark: true
            },
            {
                color: "yellow darken-4",
                icon: "mdi-briefcase",
                dark: true,
                timeRangeString: "2018 - 2019"
            },
            {
                color: "green darken-1",
                icon: "mdi-school",
                dark: true,
                timeRangeString: "2019 - heute"
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
.typerHeadline {
    font-size: 1.8rem;
}
</style>
