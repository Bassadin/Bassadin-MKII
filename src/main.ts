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

const siteTitle = "Bastian Hodapp - Software Developer";
const canonicalLink = "https://bassadin.de";
const metaDescription = "Bastian Hodapp: Portfolio, work history and education";

const head = createHead({
    title: siteTitle,
    meta: [
        {
            name: "description",
            content: metaDescription,
        },
        // OpenGraph
        { property: "og:title", content: siteTitle },
        { property: "og:site_name", content: "Bassadin" },
        { property: "og:type", content: "website" },
        {
            property: "og:url",
            content: canonicalLink,
        },
        {
            property: "og:image",
            content: "/Bastian_white_blackBG-59902.webp",
        },
        {
            property: "og:description",
            content: metaDescription,
        },
        // Theme Color
        { name: "theme-color", content: "#D99F78" },
    ],
    link: [{ rel: "canonical", href: canonicalLink }],
});

app.use(head);

// Vue router
import router from "@/router/index";
app.use(router);

// Mount to app div
app.mount("#app");
