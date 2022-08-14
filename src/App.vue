<template>
    <div class="site">
        <metainfo>
            <template #title="{ content }">{{ content }}</template>
        </metainfo>
        <SiteHeader />
        <div class="content">
            <section class="hero-image">
                <img
                    src="@/assets/Bastian_white_blackBG.jpg"
                    alt="Bastian Hodapp Image in edge circuit board style"
                />
                <h1 class="hero-name">Bastian Hodapp</h1>
            </section>
            <section class="more-info">
                <p>
                    I'm Bastian, a software developer from Germany. While my
                    current focus is Full Stack Web Development (buzz word
                    bingo, woop woop), I've dabbled in Game Development,
                    Embedded Programming, Home Automation and other directions
                    of IT before. I love to learn about new technologies. Clean
                    and structured code is very important to me.
                </p>
                <p>
                    At the moment, I'm studying for my
                    <a href="https://www.hs-furtwangen.de/"
                        >master's degree in Computer Science in Furtwangen</a
                    >. Next to that, I'm working as a full stack web developer
                    for <a href="https://compaile.com/">Compaile</a>.
                </p>
            </section>
            <CurriculumVitae />
        </div>

        <SiteFooter />
    </div>
</template>

<script lang="ts">
import SiteHeader from "@/sections/SiteHeader.vue";
import SiteFooter from "@/sections/SiteFooter.vue";
import CurriculumVitae from "@/sections/CurriculumVitae.vue";

export default {
    name: "App",
    components: { SiteHeader, SiteFooter, CurriculumVitae },
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
}

.hero-name {
    font-family: "Sansita Swashed", cursive;
}

.more-info {
    margin: 2rem 0;
}

.hero-image {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    margin-top: 3rem;
    flex-direction: column;

    @include breakpoint("m") {
        flex-direction: row;
        margin-top: 4rem;
    }

    h1 {
        font-size: 4em;
        text-align: center;
        margin: 0;
        margin-top: 2rem;

        @include breakpoint("m") {
            margin: 0 2rem;
        }
    }

    img {
        border-radius: 50%;
        height: 33vh;
    }
}
</style>
