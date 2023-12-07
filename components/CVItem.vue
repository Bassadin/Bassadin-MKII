<template>
    <div
        class="rounded-lg transition-colors duration-200 p-4 flex flex-col items-center bg-stone-200"
    >
        <Icon :name="iconName" size="45" />
        <h3 class="text-center my-1">
            <slot name="title"></slot>
        </h3>
        <p v-if="slots.location" class="text-center my-1 text-s">
            <Icon name="mdi:map-marker" /> <slot name="location"> </slot>
        </p>
        <p v-if="slots.dateRange" class="text-center my-1 text-xs">
            <Icon name="mdi:calendar" /> <slot name="dateRange"></slot>
        </p>
        <div
            v-if="slots.description"
            class="mt-3 mb-1 h-2px w-75% bg-gray"
        ></div>
        <p class="lg:mb-3 mb-0 text-center leading-snug">
            <slot name="description"></slot>
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
