import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { LibrariesData } from '@app/core/services';
import { Library } from '@app/core/interfaces';
import { LibraryCard } from '@app/shared/components';
import { LibraryDialog } from '@app/shared/components';
import { Dialog } from '@app/shared/services';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [LibraryCard],
  providers: [Dialog],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomePage {
  private dataService = inject(LibrariesData);
  private dialogService = inject(Dialog);

  readonly title: string = 'Hey developer 👋';
  readonly paragraph: string = 'This is an Angular app with additional setup which includes:';
  readonly message: string = 'This is just the beginning, it is your turn now 🙂...';
  libraries = toSignal(this.dataService.getLibrariesAsObs());

  /**
   * Opens dialog information card
   * @param event Event data
   */
  openLibraryInfo(event: Library): void {
    this.dialogService.openDialog(LibraryDialog, event);
  }
}
