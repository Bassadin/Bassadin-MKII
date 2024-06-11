<template>
    <header
        class="mb-6 flex w-full flex-row items-center justify-between border-b-2 border-b-gray-500 bg-white py-4"
    >
        <NuxtLink to="/">
            <div class="flex flex-row items-center">
                <img
                    src="@/assets/avatar_logo256x256.png"
                    class="ml-3 h-14 w-auto cursor-pointer rounded-md lg:ml-4"
                    alt="Site Header logo"
                    title="Site Header logo"
                    loading="eager"
                    height="256"
                    width="256"
                    @click="scrollToTop"
                >
            </div>
        </NuxtLink>

        <a
            class="underline-hover mr-5"
            href="https://nuxt.com/"
            target="_blank"
        >
            Built with <Icon
                size="1.6em"
                name="mdi:nuxt"
            />
        </a>
    </header>
</template>

<script setup lang="ts">
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}
</script>
