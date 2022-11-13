# Chapter 2: Cypress Hello World

- **created by**: Sudip Ghimire
- **URL**: [https://www.sudipghimire.com.np](https://www.sudipghimire.com.np)
- **Github**: [https://github.com/ghimiresdp](https://github.com/ghimiresdp)

## Table of Contents

- [Chapter 2: Cypress Hello World](#chapter-2-cypress-hello-world)
  - [Table of Contents](#table-of-contents)
  - [Cypress Test Runner](#cypress-test-runner)
  - [Types of Testing in Cypress](#types-of-testing-in-cypress)
    - [End-to-End Testing (E2E testing)](#end-to-end-testing-e2e-testing)
    - [Component Testing](#component-testing)
    - [API Testing](#api-testing)
    - [Other Testing](#other-testing)
  - [An example of End-to-End testing in Cypress](#an-example-of-end-to-end-testing-in-cypress)
    - [Writing the first E2E test](#writing-the-first-e2e-test)
      - [The `describe` block](#the-describe-block)
  - [Variables and Aliases in cypress](#variables-and-aliases-in-cypress)
    - [Variables](#variables)
    - [Aliases](#aliases)
  - [Cypress Command Line](#cypress-command-line)
    - [The `cypress open` command](#the-cypress-open-command)
      - [opening specific browser with commandline](#opening-specific-browser-with-commandline)
      - [opening e2e test with command line](#opening-e2e-test-with-command-line)
    - [The `cypress run` command](#the-cypress-run-command)
      - [selecting specification file](#selecting-specification-file)
      - [selecting specific browser](#selecting-specific-browser)
    - [Adding cypress commands to `package.json`](#adding-cypress-commands-to-packagejson)

## Cypress Test Runner

Cypress Test runner is an interactive runner that allows you to see
commands as they execute. Test Runner consists of 5 basic components:

1. Test status menu
2. URL Preview
3. Control panel
4. Command log
5. App preview

![TestRunner](https://docs.cypress.io/_nuxt/img/test-runner.89dac0f.png)

The command log previews whatever test is running and the status of
currently running test. It shows nested view of each tests as well as
any command or assertion executed within the test block.

To know more about the test runner, we can check the link below:
<https://docs.cypress.io/guides/core-concepts/cypress-app#The-Test-Runner>

## Types of Testing in Cypress

Ref: <https://docs.cypress.io/guides/overview/why-cypress#Test-types>

### End-to-End Testing (E2E testing)

Cypress was originally designed to run end-to-end (E2E) tests on anything that
runs in a browser. A typical E2E test visits the application in a browser and
performs actions via the UI just like a real user would.

```js
it('adds todos', () => {
  cy.visit('https://todo.app.com')
  cy.get('[data-testid="new-todo"]')
    .type('write code{enter}')
    .type('write tests{enter}')
  // confirm the application is showing two items
  cy.get('[data-testid="todos"]').should('have.length', 2)
})
```

### Component Testing

Component testing refers to the testing of specific components that are used in
supported libraries or frameworks like React JS.

```jsx
import TodoList from './components/TodoList'

it('contains the correct number of todos', () => {
  const todos = [
    { text: 'Buy milk', id: 1 },
    { text: 'Learn Component Testing', id: 2 },
  ]

  cy.mount(<TodoList todos={todos} />)
  // the component starts running like a mini web app
  cy.get('[data-testid="todos"]').should('have.length', todos.length)
})
```

### API Testing

API Testing refers to the HTTP request which will return you the response
accordingly. It is similar to testing requests in
[Postman](https://www.postman.com/).

```js
it('adds a todo', () => {
  cy.request({
    url: '/todos',
    method: 'POST',
    body: {
      title: 'Write REST API',
    },
  })
    .its('body')
    .should('deep.contain', {
      title: 'Write REST API',
      completed: false,
    })
})
```

### Other Testing

Cypress supports a wide range of testing plugins through which you can test
hundreds of other components, libraries, and frameworks. please check
[Plugins directory](https://docs.cypress.io/plugins/directory) to know supported
testing plugins in cypress.

## An example of End-to-End testing in Cypress

> **ref**: <https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test>

To perform an E2E testing, we need to do the following procedure:

1. Open the cypress executable
2. Configure E2E Testing
3. Create a new empty spec
4. Add the test file

once you run your cypress executable with the `npx cypress open`
or `yarn run cypress open` command, you should see the following screen.
![Cypress dashboard](res/c02-001.png).

Once the cypress executable is open, you can simply press the `E2E Testing`
button to initialize your e2e test in your current workspace. This will add
the following files to your workspace:

```
📂 my-project
├──📃 cypress.config.js
├──📂 cypress
│   ├──📂 fixtures
│   │   └──📃 example.json
│   └──📂 support
│       ├──📃 commands.js
│       └──📃 e2e.js
...
```

After  E2E testing is configured, we can select our preferred browser to start
E2E testing.
![Browser Selection Screen](res/c02-002.png)

Once the browser is selected, we can then create a new empty spec to start
writing our first test. This will create a new file `cypress\e2e\spec.cy.js`
which we can edit to add our test specifications.

### Writing the first E2E test

As creating an empty spec creates `cypress/e2e/spec.cy.js` file which contains
a sample test case, which is shown below:

```js
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
```

#### The `describe` block

Here, the `describe()` function takes 2 arguments, i.e. name of the function and
a callback function. The `it()` function contains our actual test procedure. It
also takes 2 arguments which is similar to the `describe` block. the body of
`it()` function contains all the test cases. In the above example we added
`cy.visit()` which browses `https://example.cypress.io` and displays the page
in the browser window.

The code block above will visit <https://example.cypress.io> and the test will be
passed since there is nothing to assert.

If we try to assert something that should fail, then it will fail the test. For
example, if we add a line as shown below, then the test case will fail.

```diff
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
++  expect(true).to.be.equal(false)
  })
})
```

![Assertion Error](res/c02-003.png)

Similarly, if we write something that should pass, then it should again pass
all the tests. To test this, we replace the line
`expect(true).to.be.equal(false)` with `expect(true).to.be.equal(true)` as shown
below:

```diff
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
--  expect(true).to.be.equal(false)
++  expect(true).to.be.equal(true)
  })
})
```

here, the value `true` is asserted to `true` which means the expected value and
obtained values both are true hence the test passes.

for more lecture examples, please check:
[Chapter 2 Code Samples](https://github.com/ghimiresdp/cypress-notes/blob/main/cypress/e2e/c001-intro.cy.js).

## Variables and Aliases in cypress

### Variables

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

### Aliases

Using `then` might not work in every situation. If we want to get value of a
variable in the next code block, then using alias will be useful. To achieve
such, we need to create an alias using `.as()` method after invoking the
element.

```js

```

---

## Cypress Command Line

### The `cypress open` command

Once cypress is installed globally (or added to path), we can access
the cypress command line feature. Alternatively, if we have added
cypress locally to specific project, then we can access it with our
respective package manager.

**If cypress is globally installed and added to path**

```shell
cypress open
./node_modules/cypress/bin/cypress open
```

**Running cypress binary from `node-modules` directory**

```shell
./node_modules/cypress/bin/cypress open
```

**Using `npx` command**

```shell
npx cypress open
```

**Using `yarn` command**

```shell
yarn cypress open
```

> **Note**: This tutorial will be assuming you to be using npx or yarn
> package manager. so you would expect commands like
> `npx cypress open` or `yarn cypress open`. However, you may use
> your preferred way of running the executable.

#### opening specific browser with commandline

we can pass `--browser` and our preferred browsers to open cypress. the
list of available browsers are:

- `electron`
- `chrome`
- `chromium`
- `chrome:canary`
- `edge`
- `firefox`

> **Note**: You need to have the browser installed before you select
> to test with it.

```shell
npx cypress open --browser electron
```

#### opening e2e test with command line

we can pass `--e2e` command to run e2e test directly from commandline

```shell
yarn cypress open --e2e
yarn cypress open --e2e --browser electron
```

### The `cypress run` command

The `cypress run` command runs all the test files that is defined in
our specification.

```shell
cypress run
```

#### selecting specification file

If we want to run specific test file only, we can pass `--spec` argument
and the path of the specification file to run tests on.

Example:

```shell
npx cypress run --spec cypress/e2e/spec.cy.js
```

#### selecting specific browser

We can select specific browser to run our specification by passing
`--browser` or `-b` argument and the supported browser. we can pass
`--headed` argument to display the browser window if we want.

```shell
npx cypress run --browser edge
npx cypress run --browser electron
npx cypress run --browser electron --headed
npx cypress run --browser electron --headed --spec cypress/e2e/spec.cy.js
```

To know more about cypress `run` commands, you can browse:

<https://docs.cypress.io/guides/guides/command-line#cypress-run>

### Adding cypress commands to `package.json`

Alternatively, we could add `scripts` in  `package.json` file so that
our package manager would automatically run when we try to run our
custom scripts. To do so, we should add some key and the cypress command
as the value of it inside `scripts` object as shown below.

> **Note** the example key `cy:run` can be replaced with any key of our
> choice

```json5
{
  "scripts": {
    "cy:open": "cypress open",

    // we can write any word of our choice as a key for our ease, example:
    "john": "cypress open",

    // complex arguments
    "cy:wow": "cypress open --browser electron --e2e"
  }
}
```

To run the script from the package manager, we can easily use run
command as shown below:

```shell
npm run cy:open   # using npm
yarn cy:open      # using yarn

npm run john # alternative command as shown above
yarn cy:wow    # using simple command to run complex arguments
```

Please visit the page:
[Command Line | Cypress Documentation](https://docs.cypress.io/guides/guides/command-line#What-you-ll-learn)
to know more about cypress command line.
