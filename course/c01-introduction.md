# Chapter 1: Introduction

- **created by**: Sudip Ghimire
- **URL**: [https://www.sudipghimire.com.np](https://www.sudipghimire.com.np)
- **Github**: [https://github.com/ghimiresdp](https://github.com/ghimiresdp)

> **Note**: Most of the information below has references from the
> [official documentation](https://docs.cypress.io/) page of cypress. If you
> want
> to know more about cypress or learn yourself, you can check
> [https://docs.cypress.io/](https://docs.cypress.io/).

## Table of Contents

- [Chapter 1: Introduction](#chapter-1-introduction)
  - [Table of Contents](#table-of-contents)
  - [Introduction to Software Testing](#introduction-to-software-testing)
    - [Advantages of Software Testing](#advantages-of-software-testing)
  - [Types of testing on the basis of scopes](#types-of-testing-on-the-basis-of-scopes)
    - [Unit Testing](#unit-testing)
    - [Integration Testing](#integration-testing)
    - [System Testing](#system-testing)
    - [User Acceptance Testing (UAT)](#user-acceptance-testing-uat)
  - [Introduction to Cypress](#introduction-to-cypress)
    - [Advantages of cypress](#advantages-of-cypress)
    - [Disadvantages of Cypress](#disadvantages-of-cypress)
  - [Environment Setup](#environment-setup)
    - [Installing Visual Studio code](#installing-visual-studio-code)
    - [Installing Node.js](#installing-nodejs)
    - [Installing Cypress](#installing-cypress)
      - [1. Installing via npm or yarn](#1-installing-via-npm-or-yarn)
      - [2. Downloading cypress binary](#2-downloading-cypress-binary)
    - [Supported Browsers](#supported-browsers)
    - [Opening the cypress executable](#opening-the-cypress-executable)
      - [1. Using command line](#1-using-command-line)
      - [2. adding run scripts in the package.json file](#2-adding-run-scripts-in-the-packagejson-file)

## Introduction to Software Testing

Testing is a process of executing a program to find errors. There are 2 types of
testing:

- **Manual Test**: A Test performed manually by seeing the expected and an
  actual results.
- **Automated Test**: A test performed programmatically to compare expected
  results and the actual one.

Automated test has the ability to repeat the same task after making changes in
the system, also known as **regression testing**, because of which people
prefer automated testing. There are various testing frameworks available in the
market with different purposes which are as follows:

1. Cypress
2. Selenium
3. playwright
4. Webdriver
5. Test Cafe
6. Cucumber, etc

### Advantages of Software Testing

- reusability of code
- low cost
- minimal manual interference
- improved efficiency

## Types of testing on the basis of scopes

### Unit Testing

Unit testing is the process of testing an individual element to check its
functionality. Typically, unit testing is performed by the developer during
software development. Once the unit testing is passed, the component is ready
to integrate with other components. There are 3 techniques of unit testing:

- **Black Box Testing**: This testing process includes testing of the user
  interface elements such as input and output without having the knowledge about
  the internal code structure.
- **White Box Testing**: It includes testing of the behavior of specific
  component such as behavior of the function, internal structure, design, and
  coding.
- **Grey Box Testing**: It is a combination of black box and white box testing
  which requires partial knowledge of internal structure of the code as well as
  the expected behavior.

### Integration Testing

Integration testing is the testing of different modules as a group. This process
tests whether different components are integrable or not when working as a same
unit. The purpose of this testing is to expose defects in the interaction
between different modules.

### System Testing

System Testing validates the complete software product. We can call it as an
end-to-end testing. System testing is capable to test whether the software can
work when interacted with another software.

### User Acceptance Testing (UAT)

A user acceptance testing is the testing process done by the client to verify
whether the system requirement is fulfilled or not. It includes testing the
user experience, usability of the software, fulfillment of requirement, etc to
validate the business flow. This testing involves adding a sample of a
production data. After this testing is completed, the software will be ready to
launch in the market.

----

## Introduction to Cypress

Cypress is a next generation front end testing tool built for the modern web.
Usually, developers or QA engineers that use Javascript as their primary
programming language uses cypress as the testing tool. It is basically used
for the following purposes:

1. Set up tests
2. Write tests
3. Run tests
4. debug tests

Types of tests done with the help of cypress:

1. End-to-end test
2. Integration Test
3. Unit Test
4. API Test

### Advantages of cypress

- Supports test-driven development
- Rich in debugger tools and efficient testing platform
- Provides screenshots for failed tests
- Multi-browser Support
- Gives consistent results
- Can be used with CI tools
- Can check the responsiveness of the page
- Built-in video capture feature for execution
- Can check and manage network traffic
- Friendly application interface
- Test Runner is available

### Disadvantages of Cypress

- It is only Javascript-based testing tools
- It's scope is only front-end testing
- We cannot perform Mobile testing with Cypress
- DOM cannot be accessed

## Environment Setup

### Installing Visual Studio code

Although you can use any text editor to write your automation scripts, vscode
will be much more easier since it has first-class support for javascript and is
open source code editor. you can download and install VS Code from the following
link:

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

### Installing Node.js

As Cypress is a front-end testing framework which is built on the top of
javascript framework, we need node.js to be installed in our system.

To install Node.js we can just download the binary from
 [https://nodejs.org](https://nodejs.org). We are strongly encouraged to
 download the LTS version of Node.js.

### Installing Cypress

Cypress comes both as a standalone binary and as a node.js library. As a
beginner, we can install cypress by 2 different ways:

#### 1. Installing via npm or yarn

We can easily install the cypress inside our workspace with `NPM` or `Yarn`.

> Note: If we have not yet initialized the node project in our workspace, we can
> simply run the command `npm init` or using yarn, we can use `yarn init`
> command into the project path.

```shell
cd your/project/path  # you can choose your project folder
npm install cypress

# if you are a front-end developer and want to save it as a dev dependency
# into your existing project, then you can try the following:

npm install cypress --save-dev
```

If you want to install cypress globally, you can run the command:

```shell
npm install --global cypress
```

similarly, if you use yarn package manager, you can use the following commands:

```shell
yarn add cypress
yarn add cypress --dev    # dev dependency
yarn global add cypress   # global install
```

> **Note**: It is recommended to install node.js greater than 14 to make sure
> that cypress runs smoothly on your system. You can learn more about LTS
> Versions of node.js from
> [Node.JS release schedule](https://github.com/nodejs/release#release-schedule)
> page.

#### 2. Downloading cypress binary

You can directly download the cypress binary from
[https://download.cypress.io/desktop](https://download.cypress.io/desktop) if
you do not want to install it from `npm` or `yarn` package managers. Remember
installing cypress by direct download might need manual changes in environment
variables.

> **Note**: It is always recommended to install cypress through package managers
> like `npm` or `yarn` since it is easy to manage the version and update it
> whenever needed_

### Supported Browsers

Cypress Supports wide varieties of browsers.

1. Chromium
2. Chrome (stable, beta, canary)
3. Edge (stable, beta, canary)
4. Firefox (stable, dev, nightly)
5. Electron
6. Webkit (Experimental)

### Opening the cypress executable

You can easily open the cypress executable using different ways:

#### 1. Using command line

You can go to your project directory in your terminal and run any of the
following commands:

```shell
npx cypress open  # using npx
yarn run cypress open # using yarn
```

#### 2. adding run scripts in the package.json file

If you are already familiar with node.js scripts, you can just add `cypress run`
as your run configuration in your `package.json` file.

📃 `package.json`:

```json5
{
  "name": "my-project",
  // ...,
  "devDependencies": {
    "cypress": "^10.11.0"
  },
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```

> **Note**: If you do not have `package.json` file in your working directory,
> you can initialize project running either of `npm init` or `yarn init` in
> the terminal.

To learn more about opening the app in cypress, you can follow the link:

<https://docs.cypress.io/guides/getting-started/opening-the-app>
