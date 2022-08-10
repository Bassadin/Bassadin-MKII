import { createApp } from "vue";
import { createMetaManager, plugin as vueMetaPlugin } from "vue-meta";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import "@/scss/index.scss";

import App from "@/App.vue";

const app = createApp(App);

// Load vue-meta plugin
const metaManager = createMetaManager();
app.use(metaManager);
app.use(vueMetaPlugin); // optional, only needed for OptionsAPI (see below)

app.use(mdiVue, {
    icons: mdijs,
});

// Mount to app div
app.mount("#app");
