import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Library } from '@core/interfaces/library';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrl: './library-card.component.scss'
})
export class LibraryCardComponent {
  @Input() public libraryCard: Library = {
    logoPath: '',
    name: '',
    description: '',
    link: '',
    stepsToAdd: []
  };
  @Output() public cardClick: EventEmitter<Library> = new EventEmitter<Library>();
  public readonly defaultImage: string = '/logos/image.svg';

  /**
   * On card click, emits and event of current library card data
   */
  public onCardClick(): void {
    this.cardClick.emit(this.libraryCard);
  }
}
