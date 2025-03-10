describe("Mi primera prueba con Cypress", () => {
  it("Visita la página principal", () => {
    cy.visit("https://example.com");
    cy.contains("Example Domain").should("be.visible");
  });
});
