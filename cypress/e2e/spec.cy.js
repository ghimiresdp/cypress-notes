describe('Example Spec', () => {
  it('passes', () => {
    const domain = 'https://example.cypress.io';
    cy.visit(domain);
    cy.get('button.navbar-toggle.collapsed').then($btn => {
      let value = $btn.text();
      console.log(value);
      // expect(value).to.be.equal('')
    });
  });

  it('heading test', () => {
    cy.get('div.banner').then($banner => {
      cy.get('h1').then($heading => {
        let value = $heading.text();
        expect(value).to.be.equal('Kitchen Sink');
      });
    });

  });
});


describe('Alias Test', () => {
  beforeEach(() => {
    cy.wrap('heading').as('head');
  });
  it('heading alias', () => {
    context('banner', () => {
      cy.get('div.banner').then($b => {
        const heading  = cy.get('h1').then($h=> $h.text())
      });
    });
    context('banner alt', () => {
      cy.get('div.banner-alt').then($b => {
        const heading = cy.get('h2').then($h => $h.text())
      });
    });
  });
});
