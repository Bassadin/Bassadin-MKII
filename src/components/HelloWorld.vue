<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="count++">count is: {{ count }}</button>
        <p>
            Edit <code>components/HelloWorld.vue</code> to test hot module
            replacement.
        </p>
        {{ $t("homepage.timelineDescription") }}
    </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
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
