import { Routes } from '@angular/router';

export interface AppRoutes {
  welcome: string;
}

export const appRoutes: AppRoutes = {
  welcome: 'welcome',
};

export const routes: Routes = [
  {
    path: appRoutes.welcome,
    title: 'BAS • Welcome',
    loadComponent: () => import('./pages/welcome-page/welcome-page').then((c) => c.WelcomePage),
  },
  {
    path: '',
    redirectTo: appRoutes.welcome,
    pathMatch: 'full',
  },
  {
    path: '**',
    title: 'BAS • Not Found',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page').then((c) => c.NotFoundPage),
  },
];
