import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomePageComponent } from './welcome-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: WelcomePageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class WelcomePageRoutingModule {}
