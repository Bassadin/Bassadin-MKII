import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";

import { presetWind, presetAttributify } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";

const hash = Math.floor(Math.random() * 90000) + 10000;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Unocss({
            presets: [
                presetWind(),
                presetWebFonts({
                    provider: "none",
                    fonts: {
                        sans: "Roboto",
                        mono: ["Fira Code", "Roboto Mono"],
                        hero: ["Sansita Swashed", "cursive"],
                    },
                }),
                presetAttributify(),
            ],
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                // https://stackoverflow.com/a/68123263/3526350
                entryFileNames: `[name]-` + hash + `.js`,
                chunkFileNames: `[name]-` + hash + `.js`,
                assetFileNames: `[name]-` + hash + `.[ext]`,
            },
        },
    },
});
