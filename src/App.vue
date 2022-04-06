<template>
    <div class="super-main">
        <Header />

        <div class="hero-image">
            <img src="@/assets/Bastian_white_blackBG.jpg" />
            <h1>Bastian Hodapp</h1>
        </div>

        <SocialIcons />
    </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import SocialIcons from "./components/SocialIcons.vue";

export default {
    name: "App",
    components: { Header, SocialIcons },
    metaInfo: {
        title: "Bastian Hodapp",
    },
};
</script>

<style lang="scss" scoped>
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
        margin-top: 15rem;
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
