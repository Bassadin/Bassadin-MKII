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

            <h2 class="coming-soon">More content coming soon...</h2>
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

.coming-soon {
    color: #aaa;
    margin: 4rem 0;
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
