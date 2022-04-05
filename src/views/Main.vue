<template>
    <div>
        <Header />

        <div class="hero-image">
            <img src="@/assets/Bastian_white_blackBG.jpg" />
            <h1>Bastian Hodapp</h1>
        </div>
    </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";

export default {
    name: "About",
    components: { Header },
    metaInfo: {
        title: "About",
    },
};
</script>
<style lang="scss" scoped>
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
