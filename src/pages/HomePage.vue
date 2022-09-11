<template>
    <HeroImage />
    <AboutMe />
    <CurriculumVitae />
    <FavoriteTechnologies />
</template>

<script lang="ts">
import CurriculumVitae from "@/sections/CurriculumVitae.vue";
import AboutMe from "@/sections/AboutMe.vue";
import HeroImage from "@/sections/HeroImage.vue";
import FavoriteTechnologies from "@/sections/FavoriteTechnologies.vue";

export default {
    components: {
        CurriculumVitae,
        AboutMe,
        HeroImage,
        FavoriteTechnologies,
    },
};
</script>
