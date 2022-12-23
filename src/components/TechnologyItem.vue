<template>
    <a
        :href="url"
        target="_blank"
        class="transition-colors duration-200 px-3 py-1 flex flex-row items-center rounded-lg flex-auto bg-stone-200 hover:bg-orange-800 c-black hover:c-orange-100"
    >
        <mdicon :name="iconName" size="45" />
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
