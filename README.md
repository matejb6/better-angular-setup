# Ng Custom Setup

![GitHub package.json version](https://img.shields.io/github/package-json/v/matejb6/ng-custom-setup)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/matejb6/ng-custom-setup/CI)
![GitHub repo size](https://img.shields.io/github/repo-size/matejb6/ng-custom-setup)

## About
An Angular app with custom setup. Includes additional libraries, GitHub Actions CI setup, pre commit hooks, etc.

## App creation
Project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Requirements
* node.js v14.0 and higher
* npm v6.0 and higher

## Additional packages
* Angular Material added with: `ng add @angular/material`
* ESLint added with: `ng add @angular-eslint/schematics`

## CI setup
CI is run by GitHub Actions. See `.github/workflows/main.yml` for further details.

## Setup
* In project root run `npm install` to install dependencies
* Script `prepare` should run with `npm install` to install husky, if not, run `npm run prepare`

## Commit hooks
Pre commit hooks are used to check code with Prettier and ESLint.
Before each commit, staged files will be checked with prettier and lint scripts and committing of unchecked code will be prevented.
To commit code successfully, check `Prettier` and `Lint` paragraphs of this file.

## Start
* In project root run `npm start` to start dev server
* Navigate to `http://localhost:4200/`
* The app will automatically reload if you change any of the source files

## Build
* In project root run `npm run build` to build the project

## Prettier
* In project root run `npm run prettier:check` to check if files are formatted
* In project root run `npm run prettier:write` to format files

## Lint
* In project root run `npm run lint` to lint the project

## Test
* In project root run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
* In project root run `npm test:ci` to execute the unit tests in headless mode
* In project root run `npm test:coverage` to execute the unit tests in headless mode with coverage

## New version and release
* In project root run `npm run version:major` or `npm run version:minor` or `npm run version:patch` to create new version
* Go to GitHub Releases to make a new release with changelog notes

## App structure
App has following structure:
* App root located in `src/app`
* App core located in `src/app/core`
* App core located in `src/app/shared`
* App core located in `src/app/views`
### Root
This is the app root setup.
### Core
This module contains core setup, used for singleton services, data services, auth, etc.
### Shared
This module is used for storing shared functionality, such as various services, pipes, etc.
### Views
This folder contains all views.

## Developer
**Matej Buljan**
