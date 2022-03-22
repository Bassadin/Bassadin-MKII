<template>
    <div>
        <h1>{{ Test }}</h1>
        <button @click="count++">count is: {{ count }}</button>
        <p>
            Edit <code>components/HelloWorld.vue</code> to test hot module
            replacement.
        </p>
        {{ $t("homepage.timelineDescription") }}
    </div>
</template>

<script lang="ts">
import { useMeta } from "vue-meta";

export default {
    name: "HelloWorld",
    data() {
        return {
            count: 0
        };
    },
    setup() {
        useMeta({
            title: "Hello World!"
        });
    }
};
</script>
