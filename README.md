# Ng Custom Setup

## About
An Angular app with custom setup.

## App creation
Project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Requirements
* node.js v14.0 and higher
* npm v6.0 and higher

## Additional packages
* Angular Material added with: `ng add @angular/material`
* ESLint added with: `ng add @angular-eslint/schematics`

## Setup
* In project root run `npm install` to install deps
* Script `prepare` should run with `npm install` to install husky, if not, run `npm run prepare`

## Pre commit hooks
Pre commit hooks are used to check code with Prettier and ESLint.
Before each commit, staged files will be checked with prettier and lint scripts and committing of unchecked code will be prevented.
To commit code successfully, check `Prettier` and `Lint` paragraphs of this file

## Start
* In project root run `npm start` to start dev server
* Navigate to `http://localhost:4200/`
* The app will automatically reload if you change any of the source files

## Build
* In project root run `npm run build` to build the project

## Test
* In project root run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
* In project root run `npm test:coverage` to execute the unit tests with coverage
* In project root run `npm test:ci` to execute the unit tests in headless mode

## Lint
* In project root run `npm run lint` to lint the project

## Prettier
* In project root run `npm run prettier:check` to check if files are formatted
* In project root run `npm run prettier:write` to format files

## Developer
**Matej Buljan**
