- **created by**: Sudip Ghimire
- **URL**: [https://www.sudipghimire.com.np](https://www.sudipghimire.com.np)
- **Github**: [https://github.com/ghimiresdp](https://github.com/ghimiresdp)

# Chapter 2: Cypress End-to-End Testing

**Table of Contents**
- [Chapter 2: Cypress End-to-End Testing](#chapter-2-cypress-end-to-end-testing)
    - [Introduction to E2E testing](#introduction-to-e2e-testing)
    - [Writing the first e2e test](#writing-the-first-e2e-test)

## Introduction to E2E testing

> **ref**: https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test

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

## Writing the first e2e test
