import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeViewComponent } from './welcome-view.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: WelcomeViewComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class WelcomeViewRoutingModule {}
