import { Component } from '@angular/core';

import { libraries } from './libraries';
import { LibraryCard } from '@shared/components/library-card/library-card.component';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent {
  public readonly title: string;
  public readonly paragraph: string;
  public readonly libraries: LibraryCard[];
  public readonly message: string;

  constructor() {
    this.title = 'Hey developer';
    this.paragraph = 'This is custom Angular app setup which includes:';
    this.libraries = libraries;
    this.message = 'This is just the beginning, it is your turn now :)...';
  }
}
