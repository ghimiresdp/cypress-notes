describe('Basic Assertion', () => {
  // const base_url = 'https://example.cypress.io'
  describe('Asserting True to True', () => {
    it('This test Passes', () => {
      // cy.visit(Cypress.env('baseUrl'));
      expect(true).to.be.eq(true)
    });
  });

  describe('Asserting True to False', () => {
    it('This Test Fails', () => {
      expect(true).to.be.eq(false)
    });
  });

  describe('Asserting Mathematical Calculation', () => {
    it('This Test Passes', () => {
      expect(2 + 3).to.be.eq(5)
    })
  })

  describe('Asserting string', () => {
    it('This Test Passes', () => {
      expect("Hello World").to.include('Hello')
    })

    it('This Test Fails', () => {
      expect("Hello World").to.include('Hi')
    })
  })

});
