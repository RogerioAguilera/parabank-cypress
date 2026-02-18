
Cypress.Commands.add('paginaInicial', () => {
  cy.visit('/');
});

declare global {
  namespace Cypress {
    interface Chainable {
      paginaInicial(): Chainable<void>;
    }
  }
}

export {};