<template>
    <h2 class="my-3 mt-12 text-2xl font-bold">
        <Icon :name="icon" /> {{ title }}
    </h2>
</template>

<script setup lang="ts">
defineProps<{ title: string; icon: string }>();
</script>
