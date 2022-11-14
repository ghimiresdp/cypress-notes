# Chapter 3: CSS Selectors

- **created by**: Sudip Ghimire
- **URL**: [https://www.sudipghimire.com.np](https://www.sudipghimire.com.np)
- **Github**: [https://github.com/ghimiresdp](https://github.com/ghimiresdp)

## Table of Contents

- [Chapter 3: CSS Selectors](#chapter-3-css-selectors)
  - [Table of Contents](#table-of-contents)
  - [Introduction to selectors](#introduction-to-selectors)
  - [Selecting HTML tags](#selecting-html-tags)
  - [Selecting elements by class name](#selecting-elements-by-class-name)
  - [Selecting elements by id](#selecting-elements-by-id)
  - [Selecting elements by attributes](#selecting-elements-by-attributes)
  - [Selecting with complex selectors](#selecting-with-complex-selectors)

## Introduction to selectors

CSS Selectors are used to find or select html elements according to different
properties such as id, class, value, attribute, etc. We use different notation
for selecting HTML elements, which are shown in the table below:

| target | Syntax | Example |
| --- | --- | --- |
| Html Tags | `Tagname` | `p` |
| Classes | `.class-name` | `.btn` |
| ID | `#id` | `#button1` |
| attribute | `[attr="value"]` | `[href="abc/def/"]` |
| child | `parent-selector > child-selector` | `.container > p` |

## Selecting HTML tags

 we directly write the tag name as a string to select specific HTML tags in
 cypress. for example if there is an html heading 1 element (`<h1>`), then we
 write the following to select that element:

```js
describe('CSS Selectors introduction', () => {
  it('Selecting element by HTML Tags', () => {
    cy.visit('https://example.cypress.io');

    // <h1> : Heading 1
    let elem1 = cy.get('h1');
  });
);
```

The above code snippet selects the first html element from the homepage.

Some of examples of html tags are as follows:

- heading 1 : `<h1>`
- heading 2 : `<h2>`
- Navigation : `<nav>`
- container : `<div>`
- paragraph: `<p>`
- table: `<table>`
- button: `<button>`
- Anchor (Hyperlink): `<a>`
- input element: `<input>`, etc

## Selecting elements by class name

## Selecting elements by id

## Selecting elements by attributes

## Selecting with complex selectors
