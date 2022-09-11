import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { LibraryCardModule } from './library-card/library-card.module';
import { LibraryDialogComponent } from './library-dialog/library-dialog.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, LibraryCardModule],
  exports: [LibraryDialogComponent, LibraryCardModule],
  declarations: [LibraryDialogComponent],
  providers: []
})
export class ComponentsModule {}
