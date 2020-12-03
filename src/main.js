import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import CountryFlag from "vue-country-flag";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.component("country-flag", CountryFlag);

new Vue({
    router,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount("#app");
