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
                    and structured code is very important to me.
                </p>
                <p>
                    At the moment, I'm studying for my
                    <a href="https://www.hs-furtwangen.de/"
                        >master's degree in Computer Science in Furtwangen</a
                    >. Next to that, I'm working as a full stack web developer
                    for <a href="https://compaile.com/">Compaile</a>.
                </p>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

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
    color: $text-color-darker;
    margin: 4rem 0;
    font-size: larger;
    margin: 2rem 1rem;

    @include breakpoint("m") {
        margin: 5rem auto;
        width: 60vw;
    }
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
        width: 70vw;
        margin-top: 4rem;
    }

    h1 {
        color: $text-color;
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
        height: 35vh;
    }
}
</style>
