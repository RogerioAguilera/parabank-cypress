describe("Acesso a Página site Parabank", () => {
  it("deve acessar a página inicial com sucesso", () => {
    cy.paginaInicial();
  });
  it.only("deve validar clique nos menus principais", () => {
    cy.paginaInicial();
    cy.validateClick("Solutions");
    
  });
});
