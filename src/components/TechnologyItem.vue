<template>
    <a :href="url" target="_blank" class="technology-item">
        <mdicon class="technology-item--icon" :name="iconName" size="45" />
        <h3 class="technology-item--title">
            <slot name="title"></slot>
        </h3>
    </a>
</template>

<script lang="ts">
export default {
    props: {
        iconName: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.technology-item {
    background-color: $card-background-color;

    border-radius: $card-border-radius;

    padding: 1rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    flex: 0 0 100%;

    @include breakpoint("s") {
        flex: 0 0 calc(33% - 0.6rem);
    }

    h3 {
        margin: 0 0 0 0.6rem;
    }
}
</style>
