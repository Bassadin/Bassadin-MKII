<template>
    <div class="site">
        <metainfo>
            <template #title="{ content }">{{ content }}</template>
        </metainfo>

        <SiteHeader />

        <div class="content">
            <router-view />
        </div>

        <SiteFooter />
    </div>
</template>

<script lang="ts">
import SiteHeader from "@/sections/SiteHeader.vue";
import SiteFooter from "@/sections/SiteFooter.vue";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteFooter,
    },
    metaInfo() {
        return {
            title: "Bastian Hodapp",
            description: "Bastian Hodapp Portfolio",
        };
    },
};
</script>

<style lang="scss" scoped>
.site {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
}

.content {
    margin: 1rem 1rem;

    @include breakpoint("m") {
        width: 50vw;
        margin: 1rem auto;
    }

    > * {
        margin-top: 3rem;
    }
}
</style>
