import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

const hash = Math.floor(Math.random() * 90000) + 10000;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueI18n({ include: path.resolve(__dirname, "./src/locales/**") }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: { additionalData: `@import "@/scss/breakpoints";` },
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
