import { Routes } from '@angular/router';

export interface AppRoutes {
  welcome: string;
}

export const appRoutes: AppRoutes = {
  welcome: 'welcome'
};

export const routes: Routes = [
  {
    path: appRoutes.welcome,
    title: 'BAS • Welcome',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then((m) => m.WelcomePageModule)
  },
  {
    path: '',
    redirectTo: appRoutes.welcome,
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'BAS • Not Found',
    loadChildren: () => import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule)
  }
];
