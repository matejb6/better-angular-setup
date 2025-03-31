import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LIBRARIES_MOCK } from '@data/libraries';
import { LibraryCardComponent } from './library-card.component';
import { getCard, getCardImage, getCardTitle } from './library-card.component.query.spec';

describe('LibraryCardComponent', () => {
  let fixture: ComponentFixture<LibraryCardComponent>;
  let component: LibraryCardComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('libraryCard', LIBRARIES_MOCK[0]);
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should have title', () => {
    expect(getCardTitle(nativeElem)?.innerText).toEqual(LIBRARIES_MOCK[0].name);
  });

  it('should emit an event when card clicked', () => {
    spyOn(component.cardClick, 'emit');
    getCard(nativeElem)?.click();

    expect(component.cardClick.emit).toHaveBeenCalledOnceWith(LIBRARIES_MOCK[0]);
  });
});
