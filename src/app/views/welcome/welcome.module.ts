import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { SharedModule } from '@shared/shared.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [SharedModule, WelcomeRoutingModule],
  exports: [],
  declarations: [WelcomeComponent],
  providers: []
})
export class WelcomeModule {}
