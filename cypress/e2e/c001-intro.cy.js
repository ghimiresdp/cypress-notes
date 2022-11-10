describe('hello world', ()=>{

  // Test 1: browse the homepage if it exists, it will pass the test
  it('browse the homepage', () => {
    cy.visit('https://example.cypress.io');
  });


  //Test 2: browse the non-existent homepage so that it fails the test
  it('browse the non-existent homepage', () => {
    cy.visit('https://example2.cypress.io');  // this url does not exist
  });


  // Test 3: get the heading1 element from the homepage
  it('get the h1 element', ()=>{
    cy.visit('https://example.cypress.io');
    cy.get('h1')  // it there is no h1, it gives error in this test
  })


  // Test 4: Get the heading1 and check whether it contains "Kitchen Sink"
  it('get the h1 element', () => {
    cy.visit('https://example.cypress.io');
    cy.get('h1').then($h1=>{
      let value = $h1.text()

      // the text inside h1 should be `Kitchen Sink` otherwise the test fails.
      expect(value).to.be.equal('Kitchen Sink')
    });
  });
})
