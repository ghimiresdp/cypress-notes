# Chapter 4: Variables and aliases

- **created by**: Sudip Ghimire
- **URL**: [https://www.sudipghimire.com.np](https://www.sudipghimire.com.np)
- **Github**: [https://github.com/ghimiresdp](https://github.com/ghimiresdp)

## Table of Contents

- [Chapter 4: Variables and aliases](#chapter-4-variables-and-aliases)
  - [Table of Contents](#table-of-contents)
  - [Variables in cypress](#variables-in-cypress)
  - [Aliases in cypress](#aliases-in-cypress)

## Variables in cypress

As cypress scripting is performed using javascript so we can use javascript
style variable declaration using `let`, `var`, and `const`.

> **Note**: To learn cypress, you must have a knowledge of javascript. A
> knowledge of ES6 (also known as ES2015) is recommended for learning this
> course. You can check [ES6 Homepage](https://262.ecma-international.org/6.0/)
> to know more about ES6.

```js
describe('Example Spec', () => {
  it('passes', () => {
    const domain = 'https://example.cypress.io'
    cy.visit(domain)

    it('heading test', () => {
        cy.get('div.banner').then($banner =>{
            cy.get('h1').then($heading => {
                let value = $heading.text()
                expect(value).to.be.equal('Kitchen Sink')
            })
        });
    });
  })
})
```

In the code snippet above, `domain` is defined as a constant. A constant is an
immutable variable whose value can not be changed once initialized.

The snippet above shows that the variable `value` is defined which can be used
in the future without again querying `$heading.text()`.

## Aliases in cypress

Using `then` might not work in every situation. If we want to get value of a
variable in the next code block, then using alias will be useful. To achieve
such, we need to create an alias using `.as()` method after invoking the
element.

```js

```
