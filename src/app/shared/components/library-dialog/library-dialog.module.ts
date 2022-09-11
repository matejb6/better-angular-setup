import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { LibraryDialogComponent } from './library-dialog.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
  exports: [LibraryDialogComponent],
  declarations: [LibraryDialogComponent],
  providers: []
})
export class LibraryDialogModule {}
