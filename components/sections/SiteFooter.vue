<template>
    <footer
        class="text-center py-9 color-primary border-grey-200 bg-footer bg-white border-t-1 border-gray-500"
    >
        <h2 class="m-0 font-bold text-2xl">Social</h2>
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
            <NuxtLink to="/legal" class="legal">
                Legal info and data protection
            </NuxtLink>
        </p>
        <p class="mt-10">©️{{ currentYear }} by Bastian Hodapp</p>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
