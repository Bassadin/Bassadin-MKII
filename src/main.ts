import { createApp } from "vue";
import i18n from "./i18n";
import { createMetaManager, plugin as vueMetaPlugin } from "vue-meta";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import App from "@/App.vue";

const app = createApp(App);

app.use(i18n);

// Load vue-meta plugin
const metaManager = createMetaManager();
app.use(metaManager);
app.use(vueMetaPlugin); // optional, only needed for OptionsAPI (see below)

app.use(mdiVue, {
    icons: mdijs,
});

// Mount to app div
app.mount("#app");
