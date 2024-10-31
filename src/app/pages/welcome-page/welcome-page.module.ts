import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomePageComponent } from './welcome-page.component';

@NgModule({
  imports: [SharedModule, WelcomePageRoutingModule],
  exports: [],
  declarations: [WelcomePageComponent],
  providers: []
})
export class WelcomePageModule {}
