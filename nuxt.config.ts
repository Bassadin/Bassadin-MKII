// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/eslint"],
    css: ["@/styles/index.scss"],

    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
                quotes: "double",
            },
        },
    },

    features: {
        inlineStyles: false,
    },

    compatibilityDate: "2024-07-14",
});
