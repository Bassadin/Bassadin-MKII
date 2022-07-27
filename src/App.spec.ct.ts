/// <reference types="cypress" />

import { mount } from "@cypress/vue";
import App from "@/App.vue";

describe("basic main page tests", () => {
    beforeEach(() => {
        mount(App);
    });

    it("displays the site title", () => {
        cy.contains("Bastian Hodapp");
    });
});
