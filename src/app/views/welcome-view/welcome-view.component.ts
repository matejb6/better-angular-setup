import { Component } from '@angular/core';

import { libraries } from '@core/data/libraries';
import { Library } from '@core/interfaces/library';
import { LibraryDialogComponent } from '@shared/components/library-dialog/library-dialog.component';
import { DialogService } from '@shared/services/dialog/dialog.service';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent {
  public readonly title: string = 'Hey developer';
  public readonly paragraph: string = 'This is custom Angular app setup which includes:';
  public readonly libraries: Library[] = libraries;
  public readonly message: string = 'This is just the beginning, it is your turn now :)...';

  constructor(private dialogService: DialogService) {}

  /**
   * Opens dialog on card click
   * @param event Event data
   */
  public onCardClick(event: Library): void {
    this.dialogService.openDialog(LibraryDialogComponent, event);
  }
}
