<template>
    <div
        class="cv-item rounded-lg transition-colors duration-200 p-4 flex flex-col items-center basis-full"
    >
        <mdicon class="cv-item--icon" :name="iconName" size="45" />
        <h3 class="text-center mt-1">
            <slot name="title"></slot>
        </h3>
        <p class="cv-item--description mb-0 text-center">
            <slot name="description"></slot>
        </p>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        iconName: {
            type: String,
            required: true,
        },
    },
    data: () => ({}),
};
</script>

<style lang="scss" scoped>
.cv-item {
    background-color: $card-background-color;

    &:hover {
        background-color: $card-background-color-hover;
    }

    @include breakpoint("m") {
        flex: 0 0 calc(50% - 0.5rem);
    }

    &--description {
        @include breakpoint("m") {
            margin-bottom: 0.8rem;
        }
    }
}
</style>
