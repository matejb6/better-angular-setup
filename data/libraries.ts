import { Library } from '@core/interfaces/library';

export const LIBRARIES: Library[] = [
  {
    logoPath: '/logos/material.svg',
    name: 'Angular Material',
    description: 'Material Design components for Angular',
    link: 'https://material.angular.io',
    stepsToAdd: ['Open terminal in root and enter command: ng add @angular/material']
  },
  {
    logoPath: '/logos/eslint.svg',
    name: 'ESLint',
    description: 'Find and fix problems in your JavaScript code',
    link: 'https://eslint.org',
    stepsToAdd: ['Open terminal in root and enter command: ng add @angular-eslint/schematics']
  },
  {
    logoPath: '/logos/github.png',
    name: 'GitHub Actions',
    description: 'Automate your workflow from idea to production',
    link: 'https://github.com/features/actions',
    stepsToAdd: [
      'Check files in ./.github/workflows',
      'File ci.yml is used for continuous integration',
      'File version.yml is used for creating a new version'
    ]
  },
  {
    logoPath: '/logos/prettier.png',
    name: 'Prettier',
    description: 'An opinionated code formatter',
    link: 'https://prettier.io',
    stepsToAdd: [
      'Install Prettier with command: npm install prettier --save-dev',
      'If ESLint is installed, install eslint-config-prettier: npm install eslint-config-prettier --save-dev',
      'In root, create file .prettierignore and add all files and folders which should be ignored',
      'In root, create file .prettierrc.json and add rules you want to override',
      'Check code format with command: npx prettier --check',
      'Format code with command: npx prettier --write'
    ]
  },
  {
    logoPath: '',
    name: 'Husky git hooks',
    description: 'Modern native git hooks made easy',
    link: 'https://typicode.github.io/husky/#/',
    stepsToAdd: [
      'Install Husky with command: npm install husky --save-dev',
      'Init husky with command: npx husky install',
      'In root create file .husky/pre-commit containing commands which should be run'
    ]
  },
  {
    logoPath: '/logos/karma.svg',
    name: 'Karma config',
    description: 'Karma config extended with spec reporter and CI setup',
    link: 'https://karma-runner.github.io/latest/index.html',
    stepsToAdd: [
      'Check karma.conf.js for Karma configuration',
      'Check package.json test scripts',
      'Install Karma spec reporter with command: npm install karma-spec-reporter --save-dev'
    ]
  }
];
