<template>
    <div class="cv-item">
        <mdicon class="cv-item--icon" :name="iconName" size="45" />
        <h3 class="cv-item--title">
            <slot name="title"></slot>
        </h3>
        <p class="cv-item--description">
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
    background-color: $block-background-color;

    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    flex: 0 0 calc(50% - 20px);
    margin: 10px;

    &--title {
        text-align: center;
        margin: 0.7rem 0 0 0;
    }

    &--description {
        text-align: center;
    }
}
</style>
