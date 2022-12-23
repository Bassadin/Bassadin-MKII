<template>
    <div
        class="cv-item rounded-lg transition-colors duration-200 p-4 flex flex-col items-center flex-1 min-w-60 bg-stone-200"
    >
        <mdicon class="cv-item--icon" :name="iconName" size="45" />
        <h3 class="text-center mt-1">
            <slot name="title"></slot>
        </h3>
        <p class="lg:mb-3 mb-0 text-center">
            <slot name="description"></slot>
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    iconName: {
        type: String,
        required: true,
    },
});
</script>
