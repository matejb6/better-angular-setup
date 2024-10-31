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
    title: 'NCS • Welcome',
    loadChildren: () => import('./views/welcome-view/welcome-view.module').then((m) => m.WelcomeViewModule)
  },
  {
    path: '',
    redirectTo: appRoutes.welcome,
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'NCS • Page Not Found',
    loadChildren: () =>
      import('./views/page-not-found-view/page-not-found-view.module').then((m) => m.PageNotFoundViewModule)
  }
];
