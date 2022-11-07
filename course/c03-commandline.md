- **created by**: Sudip Ghimire
- **URL**: [https://www.sudipghimire.com.np](https://www.sudipghimire.com.np)
- **Github**: [https://github.com/ghimiresdp](https://github.com/ghimiresdp)

# Chapter 3: Cypress Command Line

**Table of Contents**
- [Chapter 3: Cypress Command Line](#chapter-3-cypress-command-line)
    - [The `cypress open` command](#the-cypress-open-command)
        - [opening specific browser with commandline](#opening-specific-browser-with-commandline)
        - [opening e2e test with command line](#opening-e2e-test-with-command-line)
    - [The `cypress run` command](#the-cypress-run-command)
        - [selecting specification file](#selecting-specification-file)
        - [selecting specific browser](#selecting-specific-browser)
    - [Adding cypress commands to `package.json`](#adding-cypress-commands-to-packagejson)



## The `cypress open` command

Once cypress is installed globally (or added to path), we can access
the cypress command line feature. Alternatively, if we have added
cypress locally to specific project, then we can access it with our
respective package manager.

**If cypress is globally installed and added to path**

```shell
$ cypress open
$ ./node_modules/cypress/bin/cypress open
```

**Running cypress binary from `node-modules` directory**

```shell
$ ./node_modules/cypress/bin/cypress open
```

**Using `npx` command**

```shell
$ npx cypress open
```

**Using `yarn` command**
```shell
$ yarn cypress open
```

> **Note**: This tutorial will be assuming you to be using npx or yarn
> package manager. so you would expect commands like
> `npx cypress open` or `yarn cypress open`. However, you may use
> your preferred way of running the executable.


### opening specific browser with commandline
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


### opening e2e test with command line
we can pass `--e2e` command to run e2e test directly from commandline

```shell
$ yarn cypress open --e2e
$ yarn cypress open --e2e --browser electron
```


## The `cypress run` command

The `cypress run` command runs all the test files that is defined in
our specification.
```shell
$ cypress run
```

### selecting specification file
If we want to run specific test file only, we can pass `--spec` argument
and the path of the specification file to run tests on.

Example:
```shell
$ npx cypress run --spec cypress/e2e/spec.cy.js
```

### selecting specific browser

We can select specific browser to run our specification by passing
`--browser` or `-b` argument and the supported browser. we can pass
`--headed` argument to display the browser window if we want.


```shell
$ npx cypress run --browser edge
$ npx cypress run --browser electron
$ npx cypress run --browser electron --headed
$ npx cypress run --browser electron --headed --spec cypress/e2e/spec.cy.js
```

To know more about cypress `run` commands, you can browse:

https://docs.cypress.io/guides/guides/command-line#cypress-run




## Adding cypress commands to `package.json`

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
$ npm run cy:open   # using npm
$ yarn cy:open      # using yarn

$ npm run john # alternative command as shown above
$ yarn cy:wow    # complex arguments
```
