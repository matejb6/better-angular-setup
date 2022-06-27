import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Library } from '@core/interfaces/library';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent {
  @Input() public libraryCard: Library;
  @Output() public cardClick: EventEmitter<Library>;
  public readonly defaultImage: string;

  constructor() {
    this.libraryCard = {
      logoPath: '',
      name: '',
      description: '',
      link: '',
      stepsToAdd: []
    };
    this.cardClick = new EventEmitter<Library>();
    this.defaultImage = '../../../../assets/logos/image.svg';
  }

  /**
   * @public
   * @description On card click, emits and event of current library card data
   */
  public onCardClick(): void {
    this.cardClick.emit(this.libraryCard);
  }
}
