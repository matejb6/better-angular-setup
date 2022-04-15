import { Component } from '@angular/core';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.scss']
})
export class FirstViewComponent {
  public title: string;

  constructor() {
    this.title = 'First view';
  }
}
