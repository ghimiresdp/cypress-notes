- **created by**: Sudip Ghimire
- **URL**: [https://www.sudipghimire.com.np](https://www.sudipghimire.com.np)
- **Github**: [https://github.com/ghimiresdp](https://github.com/ghimiresdp)

# Chapter 1: Introduction

> **Note**: Most of the information below has references from the
> [official documentation](https://docs.cypress.io/) page of cipher. If you want
> to know more about cypress or learn yourself, you can check
> [https://docs.cypress.io/](https://docs.cypress.io/).

**Table of Contents**
- [Chapter 1: Introduction](#chapter-1-introduction)
    - [Introduction to Cypress](#introduction-to-cypress)
        - [Advantages of cypress](#advantages-of-cypress)
        - [Disadvantages of Cypress](#disadvantages-of-cypress)
    - [Installing Cypress](#installing-cypress)
        - [1. Installing via npm or yarn](#1-installing-via-npm-or-yarn)
        - [2. Downloading cypress binary](#2-downloading-cypress-binary)
    - [Opening the cypress executable](#opening-the-cypress-executable)
        - [1. Using command line:](#1-using-command-line)
        - [2. adding run scripts in the package.json file](#2-adding-run-scripts-in-the-packagejson-file)
    - [Installing Visual Studio code](#installing-visual-studio-code)

## Introduction to Cypress

Cypress is a next generation front end testing tool built for the modern web.
Usually, developers or QA engineers that use Javascript as their primary
programming language uses cypress as the testing tool. It is basically used
for the following purposes:
1. Set up tests
2. Write tests
3. Run tests
4. debug tests

**Types of tests done with the help of cypress**

1. End-to-end test
2. Integration Test
3. Unit Test

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


## Installing Cypress

As a beginner, we can install cypress by 2 different ways:

### 1. Installing via npm or yarn

we can easily install the cypress inside our node project with the following
command:

```shell
$ cd your/project/path  # you can choose your project folder
$ # if the node.js project is not initialized, you need to initialize it
$ npm init  # If the project is not initialized
$ npm install cypress

$ # if you are a front-end developer and want to save it
$ # as a dev dependency

$ npm install cypress --save-dev
```

If you want to install cypress globally, you can run the command:

```shell
$ npm install --global cypress
```

similarly, if you use yarn package manager, you can use the following commands:

```shell
$ yarn add cypress
$ yarn add cypress --dev    # dev dependency
$ yarn global add cypress   # global install
```

> **Note**: It is recommended to install node.js greater than 14 to make sure
> that cypress runs smoothly on your system. You can learn more about LTS
> Versions of node.js from
> [Node.JS release schedule](https://github.com/nodejs/release#release-schedule)
> page.

### 2. Downloading cypress binary

You can directly download the cypress binary from
[https://download.cypress.io/desktop](https://download.cypress.io/desktop) if
you do not want to install it from `npm` or `yarn` package managers. Remember
installing cypress by direct download might need manual changes in environment
variables.

> **Note**: It is always recommended to install cypress through package managers
> like `npm` or `yarn` since it is easy to manage the version and update it
> whenever needed_


## Opening the cypress executable
You can easily open the cypress executable using different ways:

### 1. Using command line:

You can go to your project directory in your terminal and run any of the
following commands:

```shell
$ npx cypress open  # using npx
$ yarn run cypress open # using yarn
```

### 2. adding run scripts in the package.json file

If you are already familiar with node.js scripts, you can just add `cypress run`
as your run configuration in your `package.json` file.

📃 `package.json`:
```json5
{
  "name": "my-project",
  "packageManager": "yarn@3.2.0",
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


## Installing Visual Studio code

Although you can use any text editor to write your automation scripts, vscode
will be much more easier since it has first-class support for javascript and is
open source code editor. you can download and install VS Code from the following
link:

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)