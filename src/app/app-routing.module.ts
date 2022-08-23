import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesService } from '@core/routes/routes.service';

const routesService: RoutesService = new RoutesService();

const routes: Routes = [
  {
    path: '',
    redirectTo: routesService.getRoutes().welcome,
    pathMatch: 'full'
  },
  {
    path: routesService.getRoutes().welcome,
    loadChildren: () => import('./views/welcome-view/welcome-view.module').then((m) => m.WelcomeViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
