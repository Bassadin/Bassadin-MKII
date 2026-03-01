import tailwind from "eslint-plugin-tailwindcss";

export default [
    ...tailwind.configs["flat/recommended"],
    {
        settings: {
            tailwindcss: {
                config: "./tailwind.config.js",
            },
        },
    },
];
