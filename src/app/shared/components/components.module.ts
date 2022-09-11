import { NgModule } from '@angular/core';

import { LibraryCardModule } from './library-card/library-card.module';
import { LibraryDialogModule } from './library-dialog/library-dialog.module';

@NgModule({
  imports: [LibraryCardModule, LibraryDialogModule],
  exports: [LibraryCardModule, LibraryDialogModule],
  declarations: [],
  providers: []
})
export class ComponentsModule {}
