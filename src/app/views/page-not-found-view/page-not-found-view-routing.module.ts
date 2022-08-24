import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundViewComponent } from './page-not-found-view.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundViewRoutingModule {}
