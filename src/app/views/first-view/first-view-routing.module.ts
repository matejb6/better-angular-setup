import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstViewComponent } from './first-view.component';

const routes: Routes = [
  {
    path: '',
    component: FirstViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstViewRoutingModule {}
