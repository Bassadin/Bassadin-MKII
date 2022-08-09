<template>
    <footer>
        <p class="social-heading">Social</p>
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
import SocialIcons from "@components/SocialIcons.vue";
export default {
    name: "SiteFooter",
    components: { SocialIcons },
};
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
    color: $text-color;
    border-top: 2px solid #252500;
    padding-bottom: 0.5rem;
    background-color: #151500;
}
</style>
