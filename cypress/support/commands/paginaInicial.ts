Cypress.Commands.add("paginaInicial", () => {
  cy.visit("/");
});

Cypress.Commands.add("validateClick", (menuItem: string) => {
  cy.get(".Solutions").click();
  cy.get(".leftmenu > :nth-child(2) > a").should("be.visible").click();
  cy.get(".leftmenu > :nth-child(3) > a").should("be.visible").click();
  cy.get(".leftmenu > :nth-child(4) > a").should("be.visible").click();
  cy.visit("/");
  cy.get(".leftmenu > :nth-child(5) > a").should("be.visible").click();
  cy.visit("/");
  cy.get(".leftmenu > :nth-child(6) > a").should("be.visible").click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      paginaInicial(): Chainable<void>;
      validateClick(menuItem: string): Chainable<void>;
    }
  }
}
