<template>
    <h2 class="mt-12">
        <Icon :name="icon" /> {{ title }}
    </h2>
</template>

<script setup lang="ts">
defineProps<{ title: string; icon: string }>();
</script>
