import { presetWind } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@unocss/nuxt", "nuxt-icon", "@nuxt/eslint"],
    css: ["@/styles/index.scss"],

    unocss: {
        presets: [
            presetWind(),
            presetWebFonts({
                provider: "none",
                fonts: {
                    sans: ["Roboto"],
                    mono: ["Fira Code", "Roboto Mono"],
                    hero: ["Sansita Swashed", "cursive"],
                },
            }),
        ],
    },

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
