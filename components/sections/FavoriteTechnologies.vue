<template>
    <section class="mb-8">
        <h2><Icon name="mdi:code-braces" /> Favorite Technologies</h2>
        <p>
            Here are some of my favorite technologies I like to use and/or work
            with:
        </p>
        <div class="flex-wrap flex justify-center gap-4">
            <TechnologyItem
                v-for="eachTechnologyItemData in technologyItems"
                :key="eachTechnologyItemData.title"
                :icon-name="eachTechnologyItemData.iconName"
                :url="eachTechnologyItemData.url"
            >
                <template #title>{{ eachTechnologyItemData.title }}</template>
            </TechnologyItem>
        </div>
    </section>
</template>

<script setup lang="ts">
interface TechnologyItemData {
    title: string;
    iconName: string;
    url: string;
}

const technologyItems: TechnologyItemData[] = [
    {
        iconName: "mdi:vuejs",
        url: "https://vuejs.org/",
        title: "Vue.js",
    },
    {
        iconName: "mdi:language-typescript",
        url: "https://www.typescriptlang.org/",
        title: "Typescript",
    },
    {
        iconName: "mdi:microsoft-visual-studio-code",
        url: "https://code.visualstudio.com/",
        title: "Visual Studio Code",
    },
    {
        iconName: "mdi:nodejs",
        url: "https://nodejs.org/",
        title: "Node.js",
    },
    {
        iconName: "mdi:github",
        url: "https://github.com/",
        title: "GitHub",
    },
    {
        iconName: "mdi:git",
        url: "https://git-scm.com/",
        title: "Git",
    },
    {
        iconName: "mdi:unity",
        url: "https://unity.com/",
        title: "Unity",
    },
    {
        iconName: "mdi:docker",
        url: "https://www.docker.com/",
        title: "Docker",
    },
    {
        iconName: "mdi:server-network",
        url: "https://nestjs.com/",
        title: "NestJS",
    },
    {
        iconName: "mdi:nuxt",
        url: "https://nuxtjs.org/",
        title: "Nuxt.js",
    },
    {
        iconName: "mdi:tailwind",
        url: "https://tailwindcss.com/",
        title: "Tailwind CSS",
    },
    {
        iconName: "mdi:rocket-launch",
        url: "https://astro.build/",
        title: "Astro",
    },
];
</script>
