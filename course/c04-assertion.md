# Chapter 4: Variables and aliases

- **created by**: Sudip Ghimire
- **URL**: [https://www.sudipghimire.com.np](https://www.sudipghimire.com.np)
- **Github**: [https://github.com/ghimiresdp](https://github.com/ghimiresdp)

## Table of Contents

- [Chapter 4: Variables and aliases](#chapter-4-variables-and-aliases)
    - [Table of Contents](#table-of-contents)
    - [Chai Assertions](#chai-assertions)
        - [BDD Assertion](#bdd-assertion)
        - [TDD Assertion](#tdd-assertion)
        - [chaining with `should`](#chaining-with-should)
            - [Common Assertions](#common-assertions)

## Chai Assertions

Chai Assertion contains TDD and BDD assertions with different syntax to achieve
similar results. An example of Chai assertion is shown in the snippet below:

```js
// example assertion that asserts `2 + 2` to be equal to `4`
it('This test passes', () => {
    let result = 2 + 2;
    expect(result).to.be.equal(4);
})

// Example assertion that asserts the text `John Doe` contains `John`.
it('comparing string values', () => {
    let singer = "John Doe"
    expect(singer).to.include('John')
})

```

### BDD Assertion

BDD stands for Behavior Driven Development. BDD assertion uses syntax that is
similar to the english grammar. each word are separated with `.` to invoke
different chainer.

To know more about BDD in cypress, please refer to the following urls

- <https://docs.cypress.io/guides/references/assertions#BDD-Assertions>
- <https://www.chaijs.com/api/bdd/>

**Examples:**

```js
// equal assertion
it(".equal assertion", () => {
    cy.get('.pt-5 > h2').then(($heading) => {
        expect($heading.text()).to.equal("Getting Started");
    });
});

// not assertion
it(".not assertion", () => {
    cy.get('.pt-5 > h2').then(($heading) => {
        expect($heading.text()).to.not.equal("Cypress API");
    });
});

// ordered assertion
it(".ordered", () => {
    let x = [1, 2, 4, 5, 6]
    let y = [1, 4, 3, 2]
    expect(x).to.not.have.ordered.members(y)

    // length assertion
    expect(x).to.have.length.of.at.least(4)
});
```

### TDD Assertion

TDD stands for Test Driven Development. TDD uses `expect` keyword where all
assertion chainer are written in `camelCase`.

To know m

- <https://docs.cypress.io/guides/references/assertions#TDD-Assertions>
- <https://www.chaijs.com/api/assert/>

**Examples:**

```js

it("TDD Assertions", () => {
    cy.get('.pt-5 > h2').then(($heading) => {
        // equal assertion
        assert.equal($heading.text(), "Getting Started now");

        // notEqual assertion
        assert.notEqual($heading.text(), "Cypress API");

        // deepEqual, notDeepEqual, deepInclude assertions
        let person = {
            name: "John Doe",
            age: 20,
            address: "NJ"
        };
        assert.deepEqual(person, person);
        assert.notDeepEqual(person, {some_key: 'some value'});
        assert.deepInclude(person, {age: 20}, "this test should pass here");

        // hasAllDeepKeys, hasAnyDeepKeys
        assert.hasAllDeepKeys(person1, person2);
        assert.hasAnyDeepKeys(person1, person2);
    });
});
```

## Asserting with `should()` and `chainers`

Cypress also includes assertions with `should()` which has 4 different methods
to assert values.

1. `.should(chainers)`
2. `.should(chainers, value)`
3. `.should(chainers, method, value)`
4. `.should(callbackFn)`

### Common Assertions

| title       | example chainer  | example statement                          |
|-------------|------------------|--------------------------------------------|
| length      | `'have.length'`  | `el.should('have.length', 3)`              |
| class       | `'have.class'`   | `el.should('have.class', 'container')`     |
| value       | `'have.value'`   | `el.should('have.value', 'abc')`           |
| text        | `'have.text'`    | `el..should('have.text', 'Contents')`      |
| include     | `'include.text'` | `el..should('include.text', 'Hello')`      |
| not contain | `'not.contain'`  | `el.should('not.contain', 'World')`        |
| visibility  | `'be.visible'`   | `el..should('be.visible')`                 |
| existence   | `'exist'`        | `el..should('not.exist')`                  |
| state       | `'be.checked'`   | `cy.get(':radio').should('be.checked')`    |
| css         | `'have.css'`     | `el.should('have.css', 'display', 'none')` |
| disabled    | `'be.disabled'`  | `el.should('be.disabled')`                 |

**Examples**:

```js
cy.get('.error').should('be.empty') // Assert that '.error' is empty
cy.contains('Login').should('be.visible') // Assert that el is visible
cy.wrap({ foo: 'bar' }).its('foo').should('eq', 'bar') // Assert the 'foo'
cy.get('form').should('have.class', 'form-horizontal')
cy.get('#header a').should('have.attr', 'href', '/users')


// wrong chainer
cy.should('eq', '42') // Should not be chained off 'cy'

```

### `should()` and `then()`

```js
cy.get('button')
  .should('have.id', 'new-user')
  .then(($button) => {
    // $button is yielded
  })
```

### `should` callbacks

When the inbuilt assertions are not enough, we can create our own assertions
using `should` callback.

```js
cy.get('div').should(($div) => {
  expect($div).to.have.length(1)

  const className = $div[0].className

  // className will be a string like "main-abc123 heading-xyz987"
  expect(className).to.match(/heading-/)
})
```

### `should` callbacks with multiple assertions
We can use multiple assertions with `and` chainer and another callback as shown
below:

```js
cy.get('[data-testid="assertions-link"]')
  .should('have.class', 'active')
  .and('have.attr', 'href')
  .and('include', 'cypress.io')
```
