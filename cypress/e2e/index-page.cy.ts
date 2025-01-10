describe("template spec", () => {
    it("passes", () => {
        cy.visit("/");

        cy.contains("Bastian Hodapp").should("be.visible");
        cy.contains("About me").scrollIntoView().should("be.visible");
        cy.contains("Education").scrollIntoView().should("be.visible");
        cy.contains("Work Experience").scrollIntoView().should("be.visible");
        cy.contains("Favorite Technologies")
            .scrollIntoView()
            .should("be.visible");
        cy.contains("by Bastian Hodapp")
            .scrollIntoView()
            .should("be.visible");
    });
});
