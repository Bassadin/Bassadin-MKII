<template>
    <HeroImage />

    <section>
        <h2>About me</h2>
        <p>
            I'm Bastian, a software developer from Germany. While my current
            focus is Full Stack Web Development (buzz word bingo, woop woop),
            I've dabbled in Game Development, Embedded Programming, Home
            Automation and other directions of IT before. I love to learn about
            new technologies. Clean and structured code is very important to me.
        </p>
        <p>
            I enjoy using tools to improve code quality like ESLint or Prettier.
            I also like to improve the deploy time of my project using CI/CD
            tools like GitHub Actions and GitLab CI/CD.
        </p>
        <p>
            At the moment, I'm studying for my
            <a class="underline-hover" href="https://www.hs-furtwangen.de/"
                >master's degree in Computer Science in Furtwangen</a
            >. Additionally, I'm working as a full stack web developer working
            student for
            <a class="underline-hover" href="https://compaile.com/">Compaile</a
            >.
        </p>
    </section>

    <CurriculumVitae />
    <FavoriteTechnologies />

    <section>
        <h2>About this website</h2>
        <p>
            This website was build using Vue.js 3, my favorite and most-used
            frontend JS framework. Using GitHub actions, changes I make to it
            locally are automatically deployed to my webhoster using an FTP
            deployment action.
        </p>
        <p>
            The source code is available on
            <a href="https://github.com/Bassadin/Bassadin-MKII">GitHub</a>.
        </p>
    </section>
</template>

<script lang="ts">
import CurriculumVitae from "@/sections/CurriculumVitae.vue";
import HeroImage from "@/sections/HeroImage.vue";
import FavoriteTechnologies from "@/sections/FavoriteTechnologies.vue";

export default {
    components: {
        CurriculumVitae,
        HeroImage,
        FavoriteTechnologies,
    },
};
</script>
