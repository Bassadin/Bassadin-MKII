import "@/scss/index.scss";
import "uno.css";
import "@unocss/reset/normalize.css";

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

// VueUse head
import { createHead } from "@vueuse/head";
const head = createHead({
    title: "Bastian Hodapp",
    meta: [{ name: "description", content: "Bastian Hodapp Portfolio" }],
});

app.use(head);

// Vue router
import router from "@/router/index";
app.use(router);

// Mount to app div
app.mount("#app");
