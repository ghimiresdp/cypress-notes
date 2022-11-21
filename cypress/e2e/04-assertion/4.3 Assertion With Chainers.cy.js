describe('Asserting HTML Elements', () => {
  describe('Asserting elements from the homepage', () => {
    beforeEach('visit homepage', () => {
      cy.visit('https://example.cypress.io');
    })

    it('This page tests whether the title contains "Kitchen sink"', () => {
      // cy.get('h1').then($element=>{
      //   expect($element.text()).to.eq('Kitchen Sink')
      // })
      cy.get('h1').should('have.text', 'Kitchen Sink')
    });

  });

  describe('Asserting elements from the todo page', () => {
    beforeEach('visit todo page', () => {
      cy.visit('https://example.cypress.io/todo');
    })

    it('This page tests whether the todo list contains 2 elements', () => {
      cy.get('.todo-list li').should('have.length', 2)
    });

  });
})
