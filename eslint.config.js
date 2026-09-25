import tailwind from "eslint-plugin-tailwindcss";

export default [
    { ignores: [".astro/"] },
    tailwind.configs.recommended,
    {
        settings: {
            tailwindcss: {
                cssConfigPath: "./src/styles/index.css",
            },
        },
    },
];
