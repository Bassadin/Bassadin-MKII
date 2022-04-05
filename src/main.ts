import { createApp } from "vue";
import i18n from "./i18n";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";

import App from "./App.vue";

import "./index.scss";

const app = createApp(App);

const metaManager = createMetaManager();

app.use(i18n);

app.use(metaManager);
app.use(metaPlugin); // optional, only needed for OptionsAPI (see below)

// Mount to app div
app.mount("#app");
