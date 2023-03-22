<template>
    <div class="flex justify-center flex-wrap">
        <a
            v-for="eachIconData in socialFooterIcons"
            :key="eachIconData.href"
            class="link-button p-2 m-2 transition-all duration-200 block"
            :href="eachIconData.href"
            :aria-label="eachIconData.iconName"
            target="blank"
        >
            <Icon
                class="link-button--icon"
                :name="eachIconData.iconName"
                size="45"
            />
        </a>
    </div>
</template>

<script setup lang="ts">
interface IconData {
    iconName: string;
    href: string;
}

const socialFooterIcons: IconData[] = [
    {
        iconName: "mdi:twitter",
        href: "https://twitter.com/BasVonBassadin",
    },
    {
        iconName: "mdi:linkedin",
        href: "https://www.linkedin.com/in/basvonbassadin/",
    },
    {
        iconName: "mdi:reddit",
        href: "https://www.reddit.com/user/vadsvads",
    },
    {
        iconName: "mdi:codepen",
        href: "https://codepen.io/bassadin",
    },
    {
        iconName: "mdi:github",
        href: "https://github.com/bassadin",
    },
    {
        iconName: "mdi:email",
        href: "mailto:bastianhodapp@gmail.com",
    },
];
</script>

<style lang="scss" scoped>
.link-button {
    background: none;

    $link-button-icon-color: #eee;
    $link-button-border-color: #222;

    color: $link-button-border-color;

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
</style>
