const apiUrl = Cypress.env("URL_PAGE_TO_TESTING");

describe("Testing Add and Remove Elements in web", () => {
  beforeEach(() => {
    cy.visit(`${apiUrl}/add_remove_elements/`);
  });

  it("Debe agregar un elemento", () => {
    cy.addElement();
  });

  it("Debe verificar si los elementos se crean", () => {
    cy.addElement();
    cy.getElementsCount().should("be.gte", 1);
  });

  it("Debe verificar si los elementos se eliminan", () => {
    cy.addElement();
    cy.getElementsCount().should("be.gte", 1);

    cy.deleteFirstElement();
    cy.get(".added-manually").should("not.exist");
  });
});
