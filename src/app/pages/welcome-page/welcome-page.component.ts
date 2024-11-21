import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
import { Library } from '@core/interfaces/library';
import { SharedModule } from '@shared/shared.module';
import { LibraryCardComponent } from '@shared/components/library-card/library-card.component';
import { LibraryDialogComponent } from '@shared/components/library-dialog/library-dialog.component';
import { DialogService } from '@shared/services/dialog/dialog.service';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [SharedModule, LibraryCardComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent implements OnInit {
  public readonly title: string = 'Hey developer 👋';
  public readonly paragraph: string = 'This is an Angular app with additional setup which includes:';
  public readonly message: string = 'This is just the beginning, it is your turn now 🙂...';
  public libraries$: Observable<Library[]> = new Observable<Library[]>();

  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.libraries$ = this.dataService.getLibrariesObs();
  }

  /**
   * Opens dialog on card click
   * @param event Event data
   */
  public cardClick(event: Library): void {
    this.dialogService.openDialog(LibraryDialogComponent, event);
  }
}
