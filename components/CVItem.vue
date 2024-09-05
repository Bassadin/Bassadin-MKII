<template>
    <div
        class="flex flex-col items-center rounded-lg bg-stone-200 p-4 transition-colors duration-200 dark:bg-stone-700"
    >
        <Icon
            :name="iconName"
            size="45"
        />
        <h3 class="my-1 text-center">
            <slot name="title" />
        </h3>
        <p
            v-if="slots.location"
            class="my-1 text-center text-sm"
        >
            <Icon name="mdi:map-marker" /> <slot name="location" />
        </p>
        <p
            v-if="slots.dateRange"
            class="my-1 text-center text-xs"
        >
            <Icon name="mdi:calendar" /> <slot name="dateRange" />
        </p>
        <div
            v-if="slots.description"
            class="my-3 h-0.5 w-3/4 bg-gray-400"
        />
        <p class="mb-0 text-center leading-snug lg:mb-3">
            <slot name="description" />
        </p>
    </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();

defineProps({
    iconName: {
        type: String,
        required: true,
    },
});
</script>
