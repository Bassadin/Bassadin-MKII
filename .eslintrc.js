/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-typescript/recommended",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-inferrable-types": "off",
        "prefer-const": "warn",

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
        ],

        // Remove this later when we're ready
        "@typescript-eslint/no-explicit-any": "off",
        "vue/no-unused-components": "warn",
        "vue/no-unused-properties": [
            "warn",
            {
                groups: ["props", "data", "computed", "methods"],
                deepData: false,
            },
        ],
        "vue/order-in-components": [
            "warn",
            {
                order: [
                    "el",
                    "name",
                    "key",
                    "parent",
                    "functional",
                    ["delimiters", "comments"],
                    ["components", "directives", "filters"],
                    "extends",
                    "mixins",
                    ["provide", "inject"],
                    "ROUTER_GUARDS",
                    "layout",
                    "middleware",
                    "validate",
                    "scrollToTop",
                    "transition",
                    "loading",
                    "inheritAttrs",
                    "model",
                    ["props", "propsData"],
                    "emits",
                    "setup",
                    "asyncData",
                    "data",
                    "fetch",
                    "head",
                    "computed",
                    "watch",
                    "watchQuery",
                    "LIFECYCLE_HOOKS",
                    "methods",
                    ["template", "render"],
                    "renderError",
                ],
            },
        ],
        "vue/attributes-order": [
            "warn",
            {
                order: [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    ["UNIQUE", "SLOT"],
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "OTHER_ATTR",
                    "EVENTS",
                    "CONTENT",
                ],
                alphabetical: false,
            },
        ],
    },
};
