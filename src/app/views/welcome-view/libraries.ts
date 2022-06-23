import { LibraryCard } from '@core/interfaces/library-card';

export const libraries: LibraryCard[] = [
  {
    logoPath: '../../../assets/logos/router.svg',
    name: 'Angular Router',
    description: 'Angular Router package',
    link: 'https://angular.io/guide/routing-overview',
    stepsToAdd: []
  },
  {
    logoPath: '../../../assets/logos/material.svg',
    name: 'Angular Material',
    description: 'Material Design components for Angular',
    link: 'https://material.angular.io',
    stepsToAdd: []
  },
  {
    logoPath: '../../../assets/logos/eslint.svg',
    name: 'ESLint',
    description: 'Find and fix problems in your JavaScript code',
    link: 'https://eslint.org',
    stepsToAdd: []
  },
  {
    logoPath: '../../../assets/logos/github.png',
    name: 'GitHub Actions',
    description: 'Automate your workflow from idea to production',
    link: 'https://github.com/features/actions',
    stepsToAdd: []
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
