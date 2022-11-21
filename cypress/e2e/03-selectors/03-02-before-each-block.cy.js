describe('example to-do app', () => {

  describe('Visiting the homepage', () => {
    beforeEach(() => {
      // if we want to test on the same website url for all tests, then we can use the
      // beforeEach() section which will automatically call the visit() function in each it() block
      cy.visit('https://example.cypress.io')
    });

    it('Selecting Heading 1', () => {
      let heading1 = cy.get('h1');
    });

    it('Selecting class navbar-brand', () => {
      let brand = cy.get('.navbar-brand');
    });
  });

  describe('Visiting the TODO page', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo')
    });

    it('Selecting class navbar-brand', () => {
      cy.get('.todo-list li')
    });

    it('Selecting class navbar-brand', () => {
      cy.get('.todo-list li').first()
    });
  });
})
