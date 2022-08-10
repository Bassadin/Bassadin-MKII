import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const hash = Math.floor(Math.random() * 90000) + 10000;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "sass:color";
                    @import "@/scss/variables.scss";
                    @import "@/scss/breakpoints";
                `,
            },
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
