import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@NgModule({
  imports: [HttpClientModule, MatIconModule, MatToolbarModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
  providers: []
})
export class CoreModule {}
