<template>
    <footer
        class="border-t-2 border-stone-400 bg-stone-100 py-9 text-center dark:bg-stone-700"
    >
        <h2 class="m-0 text-2xl font-bold">
            Social
        </h2>
        <SocialIcons class="mb-6 mt-2" />
        <p>
            Source code available on
            <a
                href="https://github.com/Bassadin/Bassadin-MKII"
                target="_blank"
                class="inline-flex items-center"
            >
                GitHub
            </a>
        </p>
        <p>
            <NuxtLink to="/legal">
                Legal info and data protection
            </NuxtLink>
        </p>
        <p class="mt-10">
            ©️{{ currentYear }} by Bastian Hodapp
        </p>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
