import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@shared/shared.module';
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
      imports: [SharedModule]
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

  it('should render card image', () => {
    expect(getCardImage(nativeElem)).toBeTruthy();
  });

  it('should render card content description', () => {
    expect(getCardContentDescription(nativeElem)).toBeTruthy();
  });

  it('should render card content link button', () => {
    expect(getCardContentLinkButton(nativeElem)).toBeTruthy();
  });

  it('should have title', () => {
    expect(getCardTitle(nativeElem)?.innerText).toEqual(libraryCard.name);
  });

  it('should have description', () => {
    expect(getCardContentDescription(nativeElem)?.innerText).toEqual('Super awesome library you can use');
  });

  it('should have link button text', () => {
    expect(getCardContentLinkButton(nativeElem)?.innerText).toEqual('More Info');
  });

  it('should have link button link', () => {
    expect(getCardContentLinkButton(nativeElem)?.href).toEqual('https://www.example.com/link');
  });
});

const getCard = (parentElem: HTMLElement): HTMLElement | null => parentElem.querySelector('mat-card.card');

const getCardTitle = (parentElem: HTMLElement): HTMLElement | null | undefined =>
  getCard(parentElem)?.querySelector('mat-card-title');

const getCardImage = (parentElem: HTMLElement): HTMLImageElement | null | undefined =>
  getCard(parentElem)?.querySelector('img.logo');

const getCardContent = (parentElem: HTMLElement): HTMLElement | null | undefined =>
  getCard(parentElem)?.querySelector('mat-card-content');

const getCardContentDescription = (parentElem: HTMLElement): HTMLParagraphElement | null | undefined =>
  getCardContent(parentElem)?.querySelector('p');

const getCardContentLinkButton = (parentElem: HTMLElement): HTMLAnchorElement | null | undefined =>
  getCardContent(parentElem)?.querySelector('a');
