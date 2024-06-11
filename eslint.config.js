import pluginVue from "eslint-plugin-vue";
import tailwind from "eslint-plugin-tailwindcss";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    ...pluginVue.configs["flat/recommended"],
    ...tailwind.configs["flat/recommended"],
    {
        rules: {
            "vue/multi-word-component-names": "off",
        },
    },
);
