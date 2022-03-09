import router from "./router";
import VueI18n from "vue-i18n";
import CountryFlag from "vue-country-flag";
import VueMeta from "vue-meta";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);

app.component("country-flag", CountryFlag);

const vuetify = createVuetify({
    components,
    directives
});
app.use(vuetify);

app.use(router);
Vue.use(VueI18n);
app.use(VueMeta);

console.log("REEEEE VUE");

app.mount("#app");
