<template>
    <footer>
        <SocialIcons />
        <p>
            Source code available on
            <a href="https://github.com/Bassadin/Bassadin-MKII" target="_blank">
                GitHub <mdicon name="github" />
            </a>
        </p>
    </footer>
</template>

<script lang="ts">
import SocialIcons from "@/components/SocialIcons.vue";
export default {
    name: "Footer",
    components: { SocialIcons },
};
</script>

<style lang="scss" scoped>
footer {
    border-top: 2px solid #252500;
    padding-bottom: 0.5rem;
    background-color: #151500;
}
</style>
