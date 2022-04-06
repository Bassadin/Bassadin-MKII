<template>
    <header id="site-header">
        <img
            src="@\assets\avatar_logo512x512.png"
            class="header-logo"
            alt="site header logo"
        />
        <span class="vue-icon"
            >Built with
            <a href="https://vuejs.org/" target="_blank">
                <mdicon name="vuejs" />
            </a>
        </span>
        <!-- <h1 class="site-title">Bastian Hodapp</h1> -->
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
    padding: 0.8rem 0;
    border-bottom: 4px solid #665;

    background-color: #333;
    color: #eee;

    .vue-icon {
        margin-right: 1.3rem;
    }

    .header-logo {
        margin-left: 1.3rem;
        border-radius: 0.2rem;
        height: 50px;
    }

    .site-title {
        margin: 0 1.3rem;
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
