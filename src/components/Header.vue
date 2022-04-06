<template>
    <header id="site-header">
        <h1 class="site-title">Bastian Hodapp</h1>
        <!-- <nav id="header-nav">
            <a class="slide-in-underline" href="/">Home</a>
            <a class="slide-in-underline" href="/about">About</a>
        </nav> -->
    </header>
</template>

<script lang="ts">
export default {
    name: "Header",
};
</script>

<style lang="scss" scoped>
#site-header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    background-color: #333;
    color: #eee;

    .site-title {
        margin: 1.1rem 1.3rem;
    }

    nav#header-nav {
        display: flex;
        margin-right: 1rem;

        a {
            margin: 0 0.5rem;
            font-size: 1.3em;
        }
    }
}
</style>
