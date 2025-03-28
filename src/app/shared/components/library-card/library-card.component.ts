import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { Library } from '@app/core/interfaces';

@Component({
  selector: 'app-library-card',
  standalone: true,
  imports: [MatCardModule, MatRippleModule],
  templateUrl: './library-card.component.html',
  styleUrl: './library-card.component.scss'
})
export class LibraryCardComponent {
  @Input() libraryCard: Library = {
    logoPath: '',
    name: '',
    description: '',
    link: '',
    stepsToAdd: []
  };
  @Output() cardClick: EventEmitter<Library> = new EventEmitter<Library>();
  public readonly defaultImage: string = '/logos/image.svg';

  /**
   * When card clicked, emits and event of current library card data
   */
  public clickCard(): void {
    this.cardClick.emit(this.libraryCard);
  }
}
