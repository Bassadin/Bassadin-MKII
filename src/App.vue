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
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        //
    })
};
</script>
