<template>
    <div class="flex flex-wrap justify-center">
        <a
            v-for="eachIconData in socialFooterIcons"
            :key="eachIconData.href"
            class="link-button group m-2 block bg-none text-stone-800 shadow-stone-800 transition-all duration-200 hover:text-stone-800 dark:text-stone-200 dark:shadow-stone-200 dark:hover:text-stone-50"
            :href="eachIconData.href"
            :aria-label="eachIconData.iconName"
            target="blank"
        >
            <Icon
                class="block translate-x-0.5 translate-y-0.5 p-2 text-stone-800 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-stone-50 dark:text-stone-50 dark:group-hover:text-stone-800"
                :name="eachIconData.iconName"
                size="60"
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
        iconName: "mdi:linkedin",
        href: "https://www.linkedin.com/in/bastianhodapp/",
    },
    {
        iconName: "mdi:github",
        href: "https://github.com/bassadin",
    },
    {
        iconName: "mdi:email",
        href: "mailto:mail@bassadin.de",
    },
    {
        iconName: "mdi:mastodon",
        href: "https://freiburg.social/@bassadin",
    },
];
</script>

<style lang="scss" scoped>
.link-button {
    box-shadow:
        0.3em 0.3em 0 0,
        inset 0.3em 0.3em 0 0;

    &:hover,
    &:focus {
        box-shadow:
            0 0 0 0,
            inset 6em 3.5em 0 0;

    }
}
</style>
