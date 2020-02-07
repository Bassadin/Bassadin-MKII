<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="@/assets/bassadinlogowithpaddingblackbg.svg"
                    transition="scale-transition"
                    width="40"
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
