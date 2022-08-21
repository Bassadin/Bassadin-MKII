<template>
    <footer>
        <p class="social-heading">Social</p>
        <SocialIcons />
        <p>
            Source code available on
            <a
                href="https://github.com/Bassadin/Bassadin-MKII"
                target="_blank"
                class="underline-hover"
            >
                GitHub <mdicon name="github" />
            </a>
        </p>
    </footer>
</template>

<script lang="ts">
import SocialIcons from "@components/SocialIcons.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "SiteHeader",
    components: { SocialIcons },
});
</script>

<style lang="scss" scoped>
.social-heading {
    margin-bottom: 0;
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1.3em;
}

footer {
    text-align: center;
    color: $light-text-color;
    border-top: 3px solid $footer-border-top-color;
    padding-bottom: 0.5rem;
    background-color: $footer-background-color;
}
</style>
