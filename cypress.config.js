const { defineConfig } = require("cypress");

module.exports = defineConfig({
    component: {
        setupNodeEvents(on, config) {},
        specPattern: "src/**/*.spec.ct.ts",
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
    },
});
