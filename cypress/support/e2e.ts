import "./commands/paginaInicial";

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros de scripts de terceiros para não falhar o teste
  return false;
});
