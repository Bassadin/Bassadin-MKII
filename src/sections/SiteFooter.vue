<template>
    <footer>
        <p class="social-heading">Social</p>
        <SocialIcons class="social-icons-container" />
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
        <p class="copyright">©️2022 by Bastian Hodapp</p>
        <router-link to="/legal" class="legal">
            Legal info and data protection
        </router-link>
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
.social-icons-container {
    margin-top: 1rem;
}

.social-heading {
    margin-bottom: 0;
    margin-top: 0;
    font-weight: bold;
    font-size: 1.3em;
}

footer {
    text-align: center;
    color: $text-color-primary;
    border-top: 3px solid $footer-border-top-color;
    padding: 2.2rem 0;
    background-color: $footer-background-color;
}

.legal {
    font-size: larger;
}
</style>
