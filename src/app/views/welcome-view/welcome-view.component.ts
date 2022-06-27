import { Component } from '@angular/core';

import { libraries } from '@core/data/libraries';
import { Library } from '@core/interfaces/library';
import { DialogService } from '@shared/services/dialog.service';
import { LibraryDialogComponent } from '@shared/components/library-dialog/library-dialog.component';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent {
  public readonly title: string;
  public readonly paragraph: string;
  public readonly libraries: Library[];
  public readonly message: string;

  constructor(private dialogService: DialogService) {
    this.title = 'Hey developer';
    this.paragraph = 'This is custom Angular app setup which includes:';
    this.libraries = libraries;
    this.message = 'This is just the beginning, it is your turn now :)...';
  }

  /**
   * @public
   * @param event Event data
   * @description Opens dialog on card click
   */
  public onCardClick(event: Library): void {
    this.dialogService.openDialog(LibraryDialogComponent, event);
  }
}
