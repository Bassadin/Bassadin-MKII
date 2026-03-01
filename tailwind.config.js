/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#be5025",
                "primary-hover": "#f97316",
            },
            fontFamily: {
                sans: ["Roboto"],
                mono: ["Fira Code", "Roboto Mono"],
                hero: ["Sansita Swashed", "cursive"],
            },
        },
    },
    plugins: [],
};
