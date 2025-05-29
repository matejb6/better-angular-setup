import { Component, inject, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { Library } from '@app/core/interfaces';

@Component({
  selector: 'app-library-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './library-dialog.component.html',
  styleUrl: './library-dialog.component.scss'
})
export class LibraryDialogComponent {
  public libraryCard = inject(MAT_DIALOG_DATA as InjectionToken<Library>);
}
