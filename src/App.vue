<template>
    <div class="super-main">
        <metainfo>
            <template v-slot:title="{ content }">{{ content }}</template>
        </metainfo>
        <Header />

        <div class="hero-image">
            <img src="@/assets/Bastian_white_blackBG.jpg" />
            <h1>Bastian Hodapp</h1>
        </div>

        <h2 class="coming-soon">More content coming soon...</h2>

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
.coming-soon {
    color: #aaa;
    margin: 4rem 0;
}

.super-main {
    min-height: 100vh;
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    margin-top: 3rem;
    flex-direction: column;
    width: 100vw;

    @include breakpoint("m") {
        flex-direction: row;
        width: 60vw;
        margin-top: 12rem;
    }

    h1 {
        color: white;
        font-size: 4em;
    }

    img {
        border-radius: 50%;
        height: 40vh;
    }
}
</style>
