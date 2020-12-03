<template>
    <v-app>
        <v-app-bar fixed color="primary" dark id="topBar" elevate-on-scroll>
            <router-link to="/">
                <v-img
                    alt="Vuetify Logo"
                    class="mr-3"
                    contain
                    src="@/assets/avatar_logo512x512.png"
                    transition="scale-transition"
                    width="50"
                    style="border-radius:50%"
                />
            </router-link>
            <h2>Bassadin</h2>
            <v-spacer></v-spacer>
            <!-- <v-btn color="lime darken-3" to="/about"
                ><v-icon left>mdi-account</v-icon> About</v-btn
            >
            <v-btn color="light-blue accent-3" class="ml-3"
                ><v-icon left>mdi-camera</v-icon> Photography</v-btn
            >
            <v-btn color="pink accent-3" class="ml-3"
                ><v-icon left>mdi-head-lightbulb</v-icon> Projects</v-btn
            > -->
        </v-app-bar>

        <router-view class="main-content" />
        <v-speed-dial
            v-model="fab"
            id="languageSpeedDial"
            transition="slide-y-reverse-transition"
            right="true"
            bottom="true"
            direction="top"
        >
            <template v-slot:activator>
                <v-btn v-model="fab" color="blue darken-2" large dark fab>
                    <v-icon v-if="fab">mdi-close</v-icon>
                    <v-icon v-else>mdi-translate</v-icon>
                </v-btn>
            </template>
            <v-btn fab dark color="green">
                <country-flag country="gb" size="normal" rounded="true" />
            </v-btn>
            <v-btn fab dark color="indigo">
                <country-flag country="de" size="normal" rounded="true" />
            </v-btn>
        </v-speed-dial>
        -->

        <SocialIconsFooter />
    </v-app>
</template>

<script>
import SocialIconsFooter from "@/components/SocialIconsFooter";

export default {
    name: "App",
    components: {
        SocialIconsFooter
    },
    metaInfo: {
        title: "Home",
        titleTemplate: "%s | Bastian Hodapp",
        meta: [
            { charset: "utf-8" },
            { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1.0"
            },
            {
                name: "description",
                content: "Bastian Hodapp - Web Developer and more..."
            }
        ]
    }
};
</script>

<style lang="scss" scoped>
.main-content {
    padding-top: 60px;
    padding-bottom: 120px;
    width: 100%;
    height: 100%;
}
#languageSpeedDial {
    position: fixed;
    z-index: 10;
    bottom: 1rem;
}
</style>
