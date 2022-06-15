import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { WelcomeViewRoutingModule } from './welcome-view-routing.module';
import { SharedModule } from '@shared/shared.module';
import { WelcomeViewComponent } from './welcome-view.component';
import { WelcomeViewService } from './welcome-view.service';

@NgModule({
  imports: [MatButtonModule, MatCardModule, WelcomeViewRoutingModule, SharedModule],
  exports: [],
  declarations: [WelcomeViewComponent],
  providers: [WelcomeViewService]
})
export class WelcomeViewModule {}
