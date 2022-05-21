<template>
    <div class="contact-icons-container">
        <a
            class="link-button"
            v-for="eachIconData in socialFooterIcons"
            :key="eachIconData.href"
            :href="eachIconData.href"
            :aria-label="eachIconData.iconName"
            target="blank"
        >
            <mdicon
                class="link-button--icon"
                :name="eachIconData.iconName"
                size="45"
            />
        </a>
    </div>
</template>

<script lang="ts">
export default {
    name: "SocialIcons",

    data: () => ({
        socialFooterIcons: [
            {
                iconName: "twitter",
                href: "https://twitter.com/BasVonBassadin",
            },
            {
                iconName: "linkedin",
                href: "https://www.linkedin.com/in/basvonbassadin/",
            },
            {
                iconName: "reddit",
                href: "https://www.reddit.com/user/vadsvads",
            },
            {
                iconName: "codepen",
                href: "https://codepen.io/bassadin",
            },
            {
                iconName: "github",
                href: "https://github.com/bassadin",
            },
            {
                iconName: "email",
                href: "mailto:bastianhodapp@gmail.com",
            },
        ],
    }),
};
</script>

<style lang="scss" scoped>
.contact-icons-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1.3rem 0 1rem 0;
    margin: 0 0.5rem;

    .link-button {
        background: none;
        display: block;
        color: $link-button-border-color;
        padding: 0.5rem;
        margin: 0.5rem;

        transition: 0.25s;

        box-shadow: 0.3em 0.3em 0 0 $link-button-border-color,
            inset 0.3em 0.3em 0 0 $link-button-border-color;

        &:hover,
        &:focus {
            box-shadow: 0 0 0 0 $link-button-border-color,
                inset 6em 3.5em 0 0 $link-button-border-color;

            .link-button--icon {
                color: $link-button-icon-color;
                transform: translate(0, 0);
            }
        }

        &--icon {
            display: block;

            transition: color 0.25s;
            transition: transform 0.25s;

            transform: translate(0.15em, 0.15em);
        }
    }
}
</style>
