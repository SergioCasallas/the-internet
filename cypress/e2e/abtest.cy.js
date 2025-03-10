const apiUrl = Cypress.env("URL_PAGE_TO_TESTING");
it("Testing A/B", () => {
  cy.visit(`${apiUrl}/abtest`);
  // cy.get("div.example h3").then(($title) => {
  //   const text = $title.text();
  //   const versionAText = "A/B Test Control";
  //   const versionBText = "A/B Test Variation 1";

  //   expect([versionAText, versionBText]).to.include(text);
  // });
});
