<template>
    <div class="primary lighten-1 text-center">
        <button
            v-for="icon in socialFooterIcons"
            :key="icon.key"
            icon
            :href="icon.href"
            target="blank"
        >
            <v-icon size="32px">{{ icon.icon }}</v-icon>
        </button>

        <div>
            {{ new Date().getFullYear() }} —
            <strong>Bassadin</strong>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "SocialIconsFooter",

    data: () => ({
        socialFooterIcons: [
            {
                icon: "mdi-twitter",
                href: "https://twitter.com/BasVonBassadin",
            },
            {
                icon: "mdi-linkedin",
                href: "https://www.linkedin.com/in/basvonbassadin/",
            },
            {
                icon: "mdi-xing",
                href: "https://www.xing.com/profile/Bastian_Hodapp",
            },
            {
                icon: "mdi-instagram",
                href: "https://www.instagram.com/bassadin/",
            },
            {
                icon: "mdi-reddit",
                href: "https://www.reddit.com/user/vadsvads",
            },
            {
                icon: "mdi-codepen",
                href: "https://codepen.io/bassadin",
            },
            {
                icon: "mdi-email",
                href: "mailto:bastianhodapp@gmail.com",
            },
        ],
    }),
};
</script>
