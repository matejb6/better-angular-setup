import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent {
  @Input() public libraryCard: LibraryCard;
  public defaultImage: string;

  constructor() {
    this.libraryCard = {
      logoPath: '',
      name: '',
      description: '',
      link: ''
    };
    this.defaultImage = '../../../../assets/logos/image.svg';
  }
}

export interface LibraryCard {
  logoPath: string;
  name: string;
  description: string;
  link: string;
}
