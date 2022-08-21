<template>
    <section class="hero-image">
        <img
            src="@/assets/Bastian_white_blackBG.webp"
            width="1280"
            height="1280"
            alt="Bastian Hodapp Image in edge circuit board style"
        />
        <h1 class="hero-name">Bastian Hodapp</h1>
    </section>
</template>

<style lang="scss" scoped>
.hero-name {
    font-family: $hero-title-font-family;
}

.hero-image {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    margin-top: 1rem;
    flex-direction: column;

    @include breakpoint("m") {
        flex-direction: row;
        margin-top: 2.5rem;
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
        width: auto;
    }
}
</style>
