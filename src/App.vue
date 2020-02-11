<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="mr-3"
                    contain
                    src="@/assets/avatar_logo512x512.png"
                    transition="scale-transition"
                    width="50"
                />

                <h2>Bassadin</h2>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="lime darken-3"
                ><v-icon left>mdi-account</v-icon> About</v-btn
            >
            <v-btn color="light-blue accent-3" class="ml-3"
                ><v-icon left>mdi-camera</v-icon> Photography</v-btn
            >
            <v-btn color="pink accent-3" class="ml-3"
                ><v-icon left>mdi-head-lightbulb</v-icon> Projects</v-btn
            >
        </v-app-bar>

        <v-content>
            <router-view></router-view>
            <v-footer padless="true">
                <v-card
                    flat
                    tile
                    width="100%"
                    class="secondary darken-2 text-center"
                >
                    <v-card-text>
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            icon
                        >
                            <v-icon size="24px" :href="icon.href">{{
                                icon.icon
                            }}</v-icon>
                        </v-btn>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="white--text">
                        {{ new Date().getFullYear() }} —
                        <strong>Bassadin</strong>
                    </v-card-text>
                </v-card>
            </v-footer>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        icons: [
            {
                icon: "mdi-account",
                href: "/"
            }
        ]
    })
};
</script>
