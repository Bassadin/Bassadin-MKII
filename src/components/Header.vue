<template>
    <header id="site-header">
        <img
            src="@\assets\avatar_logo512x512.png"
            class="header-logo"
            alt="site header logo"
        />

        <a class="vue-icon" href="https://vuejs.org/" target="_blank">
            Built with <mdicon name="vuejs" />
        </a>
    </header>
</template>

<script lang="ts">
export default {
    name: "Header",
};
</script>

<style lang="scss" scoped>
#site-header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 0;

    @include breakpoint("m") {
        padding: 0.8rem 0;
    }

    border-bottom: 4px solid #665;
    background-color: $header-background-color;
    color: $text-color;

    .header-logo {
        margin-left: 0.7rem;
        border-radius: 0.2rem;
        height: 40px;

        @include breakpoint("m") {
            margin-left: 1rem;
            height: 50px;
        }
    }

    .vue-icon {
        margin-right: 1.3rem;
    }
}
</style>
