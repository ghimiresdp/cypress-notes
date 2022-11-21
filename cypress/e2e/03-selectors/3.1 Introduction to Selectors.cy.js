describe('CSS Selectors introduction', () => {
  it('Selecting element by HTML Tags', () => {
    cy.visit('https://example.cypress.io');

    // <h1> : Heading 1
    let elem1 = cy.get('h1');

    // <h2> : Heading 2
    let elem2 = cy.get('h2');

    // <p> : Paragraph

    let elem3 = cy.get('p');
  });

  it('Selecting element by Class Name', () => {
    // We prepend the class name by a period [ . ] to select it.
    // For example, if an element has class btn, then we select it as ".btn"

    cy.visit('https://example.cypress.io');

    // class: navbar-brand
    let brand = cy.get('.navbar-brand');

    // class: banner
    let banner = cy.get('.banner');

    // class: dropdown-toggle
    let toggle = cy.get('.dropdown-toggle');
  });


  it('Selecting element by ID', () => {
    // We prepend the id of an element by a Hash [ # ] to select it.
    // For example, if an element has class btn, then we select it as ".btn"

    cy.visit('https://example.cypress.io');

    // id: navbar
    let brand = cy.get('#navbar');

    // id: utilities
    let banner = cy.get('#utilities');
  });

  it('Selecting element by attribute', () => {
    cy.visit('https://example.cypress.io');

    // select <a role="button"> element
    let elem1 = cy.get('a[role="button"]');


    let elem2 = cy.get('a[href="/utilities"]');
  });

  //cy.get('.dropdown-menu > :nth-child(1) > a')
  it('Selecting children inside of a specific container', () => {
    // We can separate multiple selectors by  a greater than sign " > " to select the child of a container

    cy.visit('https://example.cypress.io');

    // select <p> inside of the banner
    let elem1 = cy.get('.container > p');


    // selecting <p> inside of #utilities which is inside another .row, which is again inside .container
    let elem2 = cy.get('.container > .row > #utilities > p');
  });

});
