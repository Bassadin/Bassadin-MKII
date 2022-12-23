<template>
    <header
        class="sticky top-0 left-0 width-full flex justify-between flex-row items-center py-1 border-b-1 bg-white border-gray-500"
    >
        <router-link to="/">
            <div class="flex flex-row items-center">
                <img
                    src="@/assets/avatar_logo256x256.png"
                    class="ml-3 rounded-md cursor-pointer h-40px w-auto lg:ml-4 lg:h-50px"
                    alt="site header logo"
                    height="256"
                    width="256"
                    @click="scrollToTop"
                />
                <h1 class="font-hero text-2xl ml-5">BH</h1>
            </div>
        </router-link>

        <a
            class="underline-hover mr-5"
            href="https://vuejs.org/"
            target="_blank"
        >
            Built with <mdicon name="vuejs" />
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
