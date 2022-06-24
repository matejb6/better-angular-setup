import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LibraryCard } from '@core/interfaces/library-card';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent {
  @Input() public libraryCard: LibraryCard;
  @Output() public cardClick: EventEmitter<LibraryCard>;
  public readonly defaultImage: string;

  constructor() {
    this.libraryCard = {
      logoPath: '',
      name: '',
      description: '',
      link: '',
      stepsToAdd: []
    };
    this.cardClick = new EventEmitter<LibraryCard>();
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
