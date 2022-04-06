<template>
    <div class="social-icons-container">
        <a
            class="link-button"
            v-for="eachIconData in socialFooterIcons"
            :key="eachIconData.href"
            :href="eachIconData.href"
            target="blank"
        >
            <mdicon :name="eachIconData.iconName" size="50" />
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
                iconName: "email",
                href: "mailto:bastianhodapp@gmail.com",
            },
        ],
    }),
};
</script>

<style lang="scss" scoped>
.social-icons-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 4rem;
    padding-bottom: 5rem;

    .link-button {
        background-color: #bbb;
        color: #111;
        border-radius: 50%;
        transition: background-color 0.2s;
        padding: 0.4rem;

        margin: 0.5rem;

        &:hover {
            background-color: #ddd;
        }
    }
}
</style>
