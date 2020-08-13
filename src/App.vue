<template>
    <v-app>
        <v-app-bar app color="primary" dark>
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
            <v-btn color="lime darken-3" to="/about"
                ><v-icon left>mdi-account</v-icon> About</v-btn
            >
            <v-btn color="light-blue accent-3" class="ml-3"
                ><v-icon left>mdi-camera</v-icon> Photography</v-btn
            >
            <v-btn color="pink accent-3" class="ml-3"
                ><v-icon left>mdi-head-lightbulb</v-icon> Projects</v-btn
            >
        </v-app-bar>

        <v-main style="position: relative;min-height: 100vh;">
            <router-view style="padding-bottom: 10rem;"></router-view>
        </v-main>
        <SocialIconsFooter />
    </v-app>
</template>

<script>
import SocialIconsFooter from "@/components/SocialIconsFooter";

export default {
    name: "App",
    components: {
        SocialIconsFooter
    }
};
</script>
