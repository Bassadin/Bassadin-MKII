import router from "./router";
import i18n from "./i18n";
import CountryFlag from "vue-country-flag";
import VueMeta from "vue-meta";
import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App";

const app = createApp(App);

app.component("country-flag", CountryFlag);

app.use(vuetify);
app.use(router);
app.use(i18n);
app.use(VueMeta);

app.mount("#app");
