/// <reference types="cypress" />

import { mount } from "@cypress/vue";
import App from "@/App.vue";

describe("basic main page tests", () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        mount(App);
    });

    it("displays the site title", () => {
        cy.contains("Bastian Hodapp");
    });
});
