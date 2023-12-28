import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
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
  public readonly message: string = 'This is just the beginning, it is your turn now :)...';
  public $libraries: Observable<Library[]> = this.dataService.getLibrariesObs();

  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) {}

  /**
   * Opens dialog on card click
   * @param event Event data
   */
  public onCardClick(event: Library): void {
    this.dialogService.openDialog(LibraryDialogComponent, event);
  }
}
