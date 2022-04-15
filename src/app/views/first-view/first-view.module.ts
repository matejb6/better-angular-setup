import { NgModule } from '@angular/core';

import { FirstViewRoutingModule } from './first-view-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FirstViewComponent } from './first-view.component';
import { FirstViewService } from './first-view.service';

@NgModule({
  imports: [FirstViewRoutingModule, SharedModule],
  exports: [],
  declarations: [FirstViewComponent],
  providers: [FirstViewService]
})
export class FirstViewModule {}
