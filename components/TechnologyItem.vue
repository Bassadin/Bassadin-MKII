<template>
    <a
        :href="url"
        target="_blank"
        class="flex flex-auto flex-row items-center rounded-lg bg-stone-200 px-2 py-0.5 text-inherit transition-all duration-200  hover:bg-stone-300 hover:text-inherit  md:px-3 md:py-1 dark:bg-stone-700 dark:hover:bg-stone-600"
    >
        <Icon
            :name="iconName"
            size="45"
        />
        <h3 class="ml-2">
            <slot name="title" />
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
