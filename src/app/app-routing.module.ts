import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app-routes';

const routes: Routes = [
  {
    path: appRoutes.welcome,
    title: 'NCS • Welcome',
    loadChildren: () => import('./views/welcome/welcome.module').then((m) => m.WelcomeModule)
  },
  {
    path: '',
    redirectTo: appRoutes.welcome,
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'NCS • Page Not Found',
    loadChildren: () => import('./views/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
