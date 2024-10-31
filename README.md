# Ng Custom Setup

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/matejb6/ng-custom-setup/ci.yml)
![GitHub last commit](https://img.shields.io/github/last-commit/matejb6/ng-custom-setup)
![GitHub package.json version](https://img.shields.io/github/package-json/v/matejb6/ng-custom-setup)
![GitHub repo size](https://img.shields.io/github/repo-size/matejb6/ng-custom-setup)
![GitHub](https://img.shields.io/github/license/matejb6/ng-custom-setup)

![App screenshot](./src/assets/img/app-screenshot.png 'App screenshot')

## About
Default Angular app extended with additional libraries and setup to help develop better apps.
Main idea is to present an Angular app with additional setup and practices as a reference for developers.
Includes GitHub Actions workflows, code formatting, code linting, pre commit hooks, unit tests, code separation by modules, Karma setup for better looking test reports, etc.

## Content
This app consists of one view with library cards, which represents libraries added to default Angular app.
By clicking on card, dialog opens with additional information and link to library homepage.
Also, there is a Page Not Found view for unavailable routes.

## App creation
This app was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Package
### Scripts
* `start`: Starts Angular development server and serves the app
* `build`: Builds Angular app
* `watch`: Builds Angular app when files change with development configuration
* `prettier:check`: Checks code formatting with Prettier
* `prettier:write`: Formats code with Prettier
* `lint`: Lints code with ESLint
* `test`: Tests Angular app with Karma
* `test:ci`: Tests Angular app with Karma in headless mode
* `test:coverage`: Tests Angular app with Karma in headless mode and outputs code coverage
* `prepare`: Prepare script to install Husky

### Additional packages
* `Angular Material` added with: `ng add @angular/material`
* `ESLint` added with: `ng add @angular-eslint/schematics`
* `Husky` added with: `npx husky init`
* `Prettier` added with: `npm install prettier --save-dev`

## Commit hooks
Pre commit hooks are used to check code with `Prettier` and `ESLint`.
Before each commit, staged files are checked with defined scripts and committing of unchecked code will be prevented.
To commit code successfully, check `Prettier` and `Lint` paragraphs of this file.

## Git branching strategy
Two branches are present always and they should be merged from pull request:
* `main` branch containing code ready for new versions
* `dev` branch containing development advancements

Other branches (dynamic branches) contain specific changes should have following prefixes, depending on type of changes they contain. Brief and descriptive description should be added after slash (e.g. feature/about-view):
* `feature/` for new features
* `issue/` for issues
* `update/` for updates (files, dependencies, code, etc.)
* `other/` for other changes

## GitHub Actions
Defined workflows:
* `CI` as a general CI workflow
* `Version` for creating new versions

For more details see `.github/workflows/`.

## Requirements
* node.js ^18.13.0 || ^20.9.0

## Setup
* In root run `npm install` to install dependencies
* Script `prepare` should run with `npm install` to install husky, if not, run `npm run prepare`

## Start
* In root run `npm start` to start dev server
* Navigate to `http://localhost:4200/`
* The app will automatically reload if you change any of the source files

## Build
* In root run `npm run build` to build the app

## Prettier
* In root run `npm run prettier:check` to check if files are formatted with [Prettier](https://prettier.io)
* In root run `npm run prettier:write` to format files

## Lint
* In root run `npm run lint` to lint the app with [ESLint](https://eslint.org)

## Test
* Add `Karma config` by running the following command: `ng generate config karma`
* In root run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
* In root run `npm run test:ci` to execute the unit tests in headless mode
* In root run `npm run test:coverage` to execute the unit tests in headless mode with coverage

## New version
* Go to GitHub repo
* Click on `Actions`
* Click on `Version` workflow
* Click `Run workflow`
* Select branch and enter next version (eg. major, minor, patch)
* New version is created, commit and tag are pushed to repo
