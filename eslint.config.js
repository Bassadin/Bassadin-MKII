import pluginVue from "eslint-plugin-vue";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(...pluginVue.configs["flat/recommended"], {
	rules: {
		"vue/multi-word-component-names": "off",
	},
});
