import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesService } from '@core/routes/routes.service';

const routesService: RoutesService = new RoutesService();
const pathToDefaultView = routesService.getRoutePaths().first;
const routes: Routes = [
  {
    path: '', // no route
    redirectTo: pathToDefaultView,
    pathMatch: 'full'
  },
  {
    path: routesService.getRoutes().first,
    loadChildren: () => import('./views/first-view/first-view.module').then((m) => m.FirstViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
