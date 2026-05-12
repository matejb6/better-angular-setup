import { ChangeDetectionStrategy, Component, inject, InjectionToken } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { Library } from '@app/core/interfaces';

@Component({
  selector: 'app-library-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './library-dialog.html',
  styleUrl: './library-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryDialog {
  libraryCard = inject(MAT_DIALOG_DATA as InjectionToken<Library>);
}
