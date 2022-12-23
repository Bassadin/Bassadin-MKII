<template>
    <footer
        class="text-center py-9 color-primary border-grey-200 bg-footer bg-white border-t-1 border-gray-500"
    >
        <h2 class="m-0 font-bold text-2xl">Social</h2>
        <SocialIcons class="my-8" />
        <p>
            Source code available on
            <a
                href="https://github.com/Bassadin/Bassadin-MKII"
                target="_blank"
                class="underline-hover"
            >
                GitHub <mdicon name="github" />
            </a>
        </p>
        <p>
            <router-link to="/legal" class="legal">
                Legal info and data protection
            </router-link>
        </p>
        <p class="mt-10">©️2022 by Bastian Hodapp</p>
    </footer>
</template>

<script setup lang="ts">
import SocialIcons from "@components/SocialIcons.vue";
</script>
