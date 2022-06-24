import { LibraryCard } from '@core/interfaces/library-card';

export const libraries: LibraryCard[] = [
  {
    logoPath: '../../../assets/logos/router.svg',
    name: 'Angular Router',
    description: 'Angular Router package',
    link: 'https://angular.io/guide/routing-overview',
    stepsToAdd: [
      'Create new Angular app with command: ng new app-name',
      'Accept Angular Router when prompted',
      'If adding to existing app, install package with: npm install @angular/router'
    ]
  },
  {
    logoPath: '../../../assets/logos/material.svg',
    name: 'Angular Material',
    description: 'Material Design components for Angular',
    link: 'https://material.angular.io',
    stepsToAdd: ['Open terminal in root and enter command: ng add @angular/material']
  },
  {
    logoPath: '../../../assets/logos/eslint.svg',
    name: 'ESLint',
    description: 'Find and fix problems in your JavaScript code',
    link: 'https://eslint.org',
    stepsToAdd: ['Open terminal in root and enter command: ng add @angular-eslint/schematics']
  },
  {
    logoPath: '../../../assets/logos/github.png',
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
    logoPath: '../../../assets/logos/prettier.png',
    name: 'Prettier',
    description: 'An opinionated code formatter',
    link: 'https://prettier.io',
    stepsToAdd: []
  },
  {
    logoPath: '',
    name: 'Husky git hooks',
    description: 'Modern native git hooks made easy',
    link: 'https://typicode.github.io/husky/#/',
    stepsToAdd: []
  },
  {
    logoPath: '../../../assets/logos/karma.svg',
    name: 'Karma config',
    description: 'Karma config extended with spec reporter and CI setup',
    link: 'https://karma-runner.github.io/latest/index.html',
    stepsToAdd: []
  }
];
