import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsModule } from '../components.module';
import { LibraryCard, LibraryCardComponent } from './library-card.component';

describe('LibraryCardComponent', () => {
  let fixture: ComponentFixture<LibraryCardComponent>;
  let component: LibraryCardComponent;
  let nativeElem: HTMLElement;

  const libraryCard: LibraryCard = {
    logoPath: '',
    name: 'Library',
    description: 'Super awesome library you can use',
    link: 'https://www.example.com/link'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardComponent);
    component = fixture.componentInstance;
    component.libraryCard = libraryCard;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render card', () => {
    expect(getCard(nativeElem)).toBeTruthy();
  });

  it('should render card title', () => {
    expect(getCardTitle(nativeElem)).toBeTruthy();
  });

  it('should render card content', () => {
    expect(getCardContent(nativeElem)).toBeTruthy();
  });

  it('should render card image', () => {
    expect(getCardImage(nativeElem)).toBeTruthy();
  });

  it('should have title', () => {
    expect(getCardTitle(nativeElem)?.innerText).toEqual('Library');
  });
});

const getCard = (parentElem: HTMLElement): HTMLElement | null => parentElem.querySelector('mat-card.card');

const getCardTitle = (parentElem: HTMLElement): HTMLElement | null | undefined =>
  getCard(parentElem)?.querySelector('mat-card-title');

const getCardContent = (parentElem: HTMLElement): HTMLElement | null | undefined =>
  getCard(parentElem)?.querySelector('mat-card-content');

const getCardImage = (parentElem: HTMLElement): HTMLImageElement | null | undefined =>
  getCardContent(parentElem)?.querySelector('img.logo');
