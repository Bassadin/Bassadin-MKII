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
