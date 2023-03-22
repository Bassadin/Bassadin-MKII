import SiteFooter from "./SiteFooter.vue";

describe("<SiteFooter />", () => {
    beforeEach(() => {
        cy.mount(SiteFooter);
    });
    it("render required strings", () => {
        cy.contains("Source code available");
        cy.contains("by Bastian Hodapp");
    });
});
