<template>
    <div
        class="cv-item rounded-lg transition-colors duration-200 p-4 flex flex-col items-center basis-full lg:basis-[calc(50% - 0.5rem)]"
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

<style lang="scss" scoped>
.cv-item {
    background-color: $card-background-color;

    &:hover {
        background-color: $card-background-color-hover;
    }
}
</style>
