import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from '@core/routes/app-routes';

const routes: Routes = [
  {
    path: appRoutes.welcome,
    title: 'Ng Custom Setup • Welcome',
    loadChildren: () => import('./views/welcome-view/welcome-view.module').then((m) => m.WelcomeViewModule)
  },
  {
    path: '',
    redirectTo: appRoutes.welcome,
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'Ng Custom Setup • Page not found',
    loadChildren: () =>
      import('./views/page-not-found-view/page-not-found-view.module').then((m) => m.PageNotFoundViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
