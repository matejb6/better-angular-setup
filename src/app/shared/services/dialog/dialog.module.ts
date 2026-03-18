import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { Dialog } from './dialog';

@NgModule({
  imports: [MatDialogModule],
  exports: [],
  declarations: [],
  providers: [Dialog],
})
export class DialogModule {}
