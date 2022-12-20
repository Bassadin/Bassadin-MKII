<template>
    <a
        :href="url"
        target="_blank"
        class="technology-item transition-colors duration-200 p-4 flex flex-row items-center rounded-lg basis-full sm:basis-[calc(33% - 0.6rem)] background-stone-600 background-stone-400:hover"
    >
        <mdicon class="technology-item--icon" :name="iconName" size="45" />
        <h3 class="ml-2">
            <slot name="title"></slot>
        </h3>
    </a>
</template>

<script setup lang="ts">
defineProps({
    iconName: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});
</script>
