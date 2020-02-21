module.exports = {
    transpileDependencies: ["vuetify"],

    pluginOptions: {
        i18n: {
            locale: "de",
            fallbackLocale: "en",
            localeDir: "locales",
            enableInSFC: false,
            returnObjects: true,
            joinArrays: true
        }
    }
};
