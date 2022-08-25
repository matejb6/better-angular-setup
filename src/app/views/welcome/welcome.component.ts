import { Component } from '@angular/core';

import { libraries } from '@core/data/libraries';
import { Library } from '@core/interfaces/library';
import { DialogService } from '@shared/services/dialog.service';
import { LibraryDialogComponent } from '@shared/components/library-dialog/library-dialog.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public readonly title: string = 'Hey developer';
  public readonly paragraph: string = 'This is custom Angular app setup which includes:';
  public readonly libraries: Library[] = libraries;
  public readonly message: string = 'This is just the beginning, it is your turn now :)...';

  constructor(private dialogService: DialogService) {}

  /**
   * @public
   * @param event Event data
   * @description Opens dialog on card click
   */
  public onCardClick(event: Library): void {
    this.dialogService.openDialog(LibraryDialogComponent, event);
  }
}
