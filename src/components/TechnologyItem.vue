<template>
    <a
        :href="url"
        target="_blank"
        class="technology-item transition-colors duration-200 p-4 flex flex-row items-center rounded-lg basis-full"
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

<style lang="scss" scoped>
.technology-item {
    background-color: $card-background-color;

    &:hover {
        background-color: $card-background-color-hover;
    }

    @include breakpoint("s") {
        flex: 0 0 calc(33% - 0.6rem);
    }
}
</style>
