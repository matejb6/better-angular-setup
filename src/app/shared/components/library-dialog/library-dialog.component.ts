import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LibraryCard } from '@core/interfaces/library-card';

@Component({
  selector: 'app-library-dialog',
  templateUrl: './library-dialog.component.html',
  styleUrls: ['./library-dialog.component.scss']
})
export class LibraryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public libraryCard: LibraryCard) {}
}
