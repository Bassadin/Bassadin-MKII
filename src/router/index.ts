import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LegalPage from "@/views/LegalPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/legal",
        name: "Legal Information",
        component: LegalPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return { el: to.hash };
        } else {
            return { top: 0 };
        }
    },
});

export default router;
