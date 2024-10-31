import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [MatIconModule, MatToolbarModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
  providers: []
})
export class ToolbarModule {}
