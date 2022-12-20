<template>
    <div class="site grid min-h-100vh grid-rows-[auto 1fr auto] bg-content">
        <metainfo>
            <template #title="{ content }">{{ content }}</template>
        </metainfo>

        <SiteHeader />

        <div class="content m-4 lg:w-50vw lg:my-4 lg:mx-auto">
            <router-view />
        </div>

        <SiteFooter />
    </div>
</template>

<script setup lang="ts">
import SiteHeader from "@/sections/SiteHeader.vue";
import SiteFooter from "@/sections/SiteFooter.vue";
</script>

<style lang="scss" scoped>
.content > * {
    margin-top: 3rem;
}
</style>
