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

        <SocialIcons />

        <footer>
            <p>
                Source code available on
                <a
                    href="https://github.com/Bassadin/Bassadin-MKII"
                    target="_blank"
                >
                    GitHub <mdicon name="github" />
                </a>
            </p>
        </footer>
    </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import SocialIcons from "./components/SocialIcons.vue";

export default {
    name: "App",
    components: { Header, SocialIcons },
    metaInfo() {
        return {
            title: "Bastian Hodapp",
            description: "Bastian Hodapp Portfolio",
        };
    },
};
</script>

<style lang="scss" scoped>
footer {
    padding-bottom: 0.5rem;
}

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
