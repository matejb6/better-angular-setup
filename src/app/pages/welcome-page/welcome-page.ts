import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { LibrariesData } from '@app/core/services';
import { Library } from '@app/core/interfaces';
import { LibraryCard } from '@app/shared/components';
import { LibraryDialog } from '@app/shared/components';
import { Dialog } from '@app/shared/services';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [CommonModule, LibraryCard],
  providers: [Dialog],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss',
})
export class WelcomePage implements OnInit {
  private dataService = inject(LibrariesData);
  private dialogService = inject(Dialog);

  readonly title: string = 'Hey developer 👋';
  readonly paragraph: string = 'This is an Angular app with additional setup which includes:';
  readonly message: string = 'This is just the beginning, it is your turn now 🙂...';
  libraries$: Observable<Library[]> = new Observable<Library[]>();

  ngOnInit() {
    this.libraries$ = this.dataService.getLibrariesAsObs();
  }

  /**
   * Opens dialog when card clicked
   * @param event Event data
   */
  clickCard(event: Library): void {
    this.dialogService.openDialog(LibraryDialog, event);
  }
}
