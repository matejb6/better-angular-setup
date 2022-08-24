import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { PageNotFoundViewRoutingModule } from './page-not-found-view-routing.module';
import { PageNotFoundViewComponent } from './page-not-found-view.component';

@NgModule({
  imports: [SharedModule, PageNotFoundViewRoutingModule],
  exports: [],
  declarations: [PageNotFoundViewComponent],
  providers: []
})
export class PageNotFoundViewModule {}
