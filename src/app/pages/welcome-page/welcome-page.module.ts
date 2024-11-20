import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LibraryCardComponent } from '@shared/components/library-card/library-card.component';
import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomePageComponent } from './welcome-page.component';

@NgModule({
  imports: [SharedModule, LibraryCardComponent, WelcomePageRoutingModule],
  exports: [],
  declarations: [WelcomePageComponent],
  providers: []
})
export class WelcomePageModule {}
