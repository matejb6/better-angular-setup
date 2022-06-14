import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent {
  public readonly title: string;
  public readonly paragraph: string;
  public readonly additionalLibraries: string[];
  public readonly message: string;

  constructor() {
    this.title = 'Hey developer';
    this.paragraph = 'This is custom Angular app setup which includes things like:';
    this.additionalLibraries = [
      'Angular Material',
      'ESLint',
      'GitHub CI setup',
      'Prettier',
      'Husky commit hooks',
      'Karma config'
    ];
    this.message = 'This is just the beginning, it is your turn now :)...';
  }
}
