import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VUE_APP_I18N_LOCALE || "en",
    fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
    globalInjection: true,
    messages
});

export default i18n;
