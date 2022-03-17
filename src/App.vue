<template>
    <div id="super-main">
        <HelloWorld msg="Hello Vue 3.0 + Vite" />

        <h1 class="main-title">Bastian Hodapp</h1>
    </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld
    }
};
</script>

<style lang="scss" scoped></style>
