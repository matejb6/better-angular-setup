import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { Library } from '@app/core/interfaces';

@Component({
  selector: 'app-library-card',
  standalone: true,
  imports: [MatCardModule, MatRippleModule],
  templateUrl: './library-card.component.html',
  styleUrl: './library-card.component.scss',
})
export class LibraryCardComponent {
  readonly libraryCard = input<Library>({
    logoPath: '',
    name: '',
    description: '',
    link: '',
    stepsToAdd: [],
  });
  readonly cardClick = output<Library>();
  readonly defaultImage: string = '/logos/image.svg';

  /**
   * When card clicked, emits and event of current library card data
   */
  clickCard(): void {
    this.cardClick.emit(this.libraryCard());
  }
}
