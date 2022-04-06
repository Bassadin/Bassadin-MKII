import { createApp } from "vue";
import i18n from "./i18n";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import App from "@/App.vue";

import "@/scss/index.scss";

const app = createApp(App);

const metaManager = createMetaManager();

app.use(i18n);

app.use(metaManager);
app.use(metaPlugin); // optional, only needed for OptionsAPI (see below)

app.use(mdiVue, {
    icons: mdijs,
});

// Mount to app div
app.mount("#app");
