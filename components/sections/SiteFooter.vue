<template>
    <footer
        class="border-t-2 border-gray-500 bg-gray-100 py-9 text-center"
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
                class="underline-hover"
            >
                GitHub <Icon name="mdi:github" />
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
