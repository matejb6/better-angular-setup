import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Library } from '@core/interfaces/library';

@Component({
  selector: 'app-library-dialog',
  templateUrl: './library-dialog.component.html',
  styleUrl: './library-dialog.component.scss'
})
export class LibraryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public libraryCard: Library) {}
}
