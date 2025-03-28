import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { DataService } from '@app/core/services';
import { Library } from '@app/core/interfaces';
import { SharedModule } from '@app/shared/shared.module';
import { LibraryCardComponent } from '@app/shared/components';
import { LibraryDialogComponent } from '@app/shared/components';
import { DialogService } from '@app/shared/services';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [CommonModule, SharedModule, LibraryCardComponent],
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
   * Opens dialog when card clicked
   * @param event Event data
   */
  public clickCard(event: Library): void {
    this.dialogService.openDialog(LibraryDialogComponent, event);
  }
}
