describe("template spec", () => {
    it("passes", () => {
        cy.visit("/");
        cy.contains("Bastian Hodapp");
    });
});
