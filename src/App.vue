<template>
    <div class="site">
        <metainfo>
            <template #title="{ content }">{{ content }}</template>
        </metainfo>
        <SiteHeader />
        <div class="content">
            <HeroImage />
            <AboutMe />
            <CurriculumVitae />
            <FavoriteTechnologies />
        </div>

        <SiteFooter />
    </div>
</template>

<script lang="ts">
import SiteHeader from "@/sections/SiteHeader.vue";
import SiteFooter from "@/sections/SiteFooter.vue";
import CurriculumVitae from "@/sections/CurriculumVitae.vue";
import AboutMe from "./sections/AboutMe.vue";
import HeroImage from "./sections/HeroImage.vue";
import FavoriteTechnologies from "./sections/FavoriteTechnologies.vue";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteFooter,
        CurriculumVitae,
        AboutMe,
        HeroImage,
        FavoriteTechnologies,
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
    margin: 2rem 1rem;

    @include breakpoint("m") {
        width: 50vw;
        margin: 5rem auto;
    }

    > * {
        margin-top: 3rem;
    }
}
</style>
