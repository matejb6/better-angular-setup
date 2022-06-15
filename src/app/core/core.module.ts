import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@NgModule({
  imports: [MatToolbarModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
  providers: []
})
export class CoreModule {}
