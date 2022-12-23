<template>
    <section class="mb-8">
        <h2>Favorite Technologies</h2>
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
import TechnologyItem from "@/components/TechnologyItem.vue";

interface TechnologyItemData {
    title: string;
    iconName: string;
    url: string;
}

const technologyItems: TechnologyItemData[] = [
    {
        iconName: "vuejs",
        url: "https://vuejs.org/",
        title: "Vue.js",
    },
    {
        iconName: "language-typescript",
        url: "https://www.typescriptlang.org/",
        title: "Typescript",
    },
    {
        iconName: "microsoft-visual-studio-code",
        url: "https://code.visualstudio.com/",
        title: "Visual Studio Code",
    },
    {
        iconName: "laravel",
        url: "https://laravel.com/",
        title: "Laravel",
    },
    {
        iconName: "nodejs",
        url: "https://nodejs.org/",
        title: "Node.js",
    },
    {
        iconName: "github",
        url: "https://github.com/",
        title: "GitHub",
    },
    {
        iconName: "unity",
        url: "https://unity.com/",
        title: "Unity",
    },
    {
        iconName: "docker",
        url: "https://www.docker.com/",
        title: "Docker",
    },
    {
        iconName: "kubernetes",
        url: "https://kubernetes.io/",
        title: "Kubernetes",
    },
    {
        iconName: "git",
        url: "https://git-scm.com/",
        title: "Git",
    },
];
</script>
