<template>
    <div class="site">
        <metainfo>
            <template v-slot:title="{ content }">{{ content }}</template>
        </metainfo>
        <Header />
        <div class="content">
            <div class="hero-image">
                <img
                    src="@/assets/Bastian_white_blackBG.jpg"
                    alt="Bastian Hodapp Image in edge circuit board style"
                />
                <h1>Bastian Hodapp</h1>
            </div>
            <div class="more-info">
                <p>
                    I'm Bastian, a software developer from Germany. While my
                    current focus is Full Stack Web Development (buzz word
                    bingo, woop woop), I've dabbled in Game Development,
                    Embedded Programming, Home Automation and other directions
                    of IT before. I love to learn about new technologies. Clean
                    and structured code is very important to me. At the moment,
                    I'm studying for my master's degree in Computer Science.
                </p>
                <p>
                    Next to that, I'm working as a full stack web developer for
                    <a href="https://compaile.com/">Compaile</a>.
                </p>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import "@/scss/index.scss";

export default {
    name: "App",
    components: { Header, Footer },
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

.more-info {
    color: #aaa;
    margin: 4rem 0;
    font-size: larger;
    margin: 5rem 1rem 5rem 1rem;

    @include breakpoint("m") {
        width: 60vw;
        margin-left: auto;
        margin-right: auto;
    }
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    margin-top: 3rem;
    flex-direction: column;

    @include breakpoint("m") {
        flex-direction: row;
        width: 70vw;
        margin-top: 12rem;
    }

    h1 {
        color: white;
        font-size: 4em;

        @include breakpoint("m") {
            margin-left: 4rem;
        }
    }

    img {
        border-radius: 50%;
        height: 35vh;
    }
}
</style>
