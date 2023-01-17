import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { WelcomeViewRoutingModule } from './welcome-view-routing.module';
import { WelcomeViewComponent } from './welcome-view.component';

@NgModule({
  imports: [SharedModule, WelcomeViewRoutingModule],
  exports: [],
  declarations: [WelcomeViewComponent],
  providers: []
})
export class WelcomeViewModule {}
