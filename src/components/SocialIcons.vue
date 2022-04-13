<template>
    <div class="contact-icons-container">
        <a
            class="link-button"
            v-for="eachIconData in socialFooterIcons"
            :key="eachIconData.href"
            :href="eachIconData.href"
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
    padding: 2rem 0 1rem 0;

    .link-button {
        // background-color: #bbb;
        background: none;
        display: block;
        color: #eee;
        padding: 0.5rem;
        margin: 0.5rem;
        // border-radius: 50%;

        // transition: background-color 0.2s;
        transition: 0.25s;

        box-shadow: 0.3em 0.3em 0 0 #eee, inset 0.3em 0.3em 0 0 #eee;

        &:hover,
        &:focus {
            box-shadow: 0 0 0 0 #eee, inset 6em 3.5em 0 0 #eee;

            .link-button--icon {
                color: #222;
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
