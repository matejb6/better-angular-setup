import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';

import { LibraryCardComponent } from './library-card/library-card.component';
import { LibraryDialogComponent } from './library-dialog/library-dialog.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDialogModule, MatRippleModule],
  exports: [LibraryCardComponent, LibraryDialogComponent],
  declarations: [LibraryCardComponent, LibraryDialogComponent],
  providers: []
})
export class ComponentsModule {}
