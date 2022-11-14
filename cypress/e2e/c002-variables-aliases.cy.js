describe('', () => {
  const base_url = 'https://example.cypress.io'
  describe('Variables', () => {
    it('Variable Example', () => {
      cy.visit(base_url);
    });
  });
  describe('Aliases', () => {
    it('Alias Example', () => {
      cy.visit(Cypress.env('baseUrl'));
    });
  });
});
