import "@/scss/index.scss";

import { createApp } from "vue";
import App from "@/App.vue";
const app = createApp(App);

// Load vue-meta plugin
import { createMetaManager, plugin as vueMetaPlugin } from "vue-meta";
const metaManager = createMetaManager();
app.use(metaManager);
app.use(vueMetaPlugin); // optional, only needed for OptionsAPI (see below)

// MDI Icons
import * as mdijs from "@mdi/js";
import mdiVue from "mdi-vue/v3";
app.use(mdiVue, {
    icons: mdijs,
});

// Mount to app div
app.mount("#app");
