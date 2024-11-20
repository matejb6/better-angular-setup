import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LIBRARIES_MOCK } from '@data/libraries.mock';
import { LibraryCardModule } from './library-card.module';
import { LibraryCardComponent } from './library-card.component';
import { LibraryCardComponentQuery } from './library-card.component.query.spec';

describe('LibraryCardComponent', () => {
  let fixture: ComponentFixture<LibraryCardComponent>;
  let component: LibraryCardComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryCardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryCardComponent);
    component = fixture.componentInstance;
    component.libraryCard = LIBRARIES_MOCK[0];
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card', () => {
    expect(LibraryCardComponentQuery.getCard(nativeElem)).toBeTruthy();
  });

  it('should render card title', () => {
    expect(LibraryCardComponentQuery.getCardTitle(nativeElem)).toBeTruthy();
  });

  it('should render card image', () => {
    expect(LibraryCardComponentQuery.getCardImage(nativeElem)).toBeTruthy();
  });

  it('should have title', () => {
    expect(LibraryCardComponentQuery.getCardTitle(nativeElem)?.innerText).toEqual(LIBRARIES_MOCK[0].name);
  });

  it('should emit an event on card click', () => {
    spyOn(component.cardClicked, 'emit');
    LibraryCardComponentQuery.getCard(nativeElem)?.click();

    expect(component.cardClicked.emit).toHaveBeenCalledOnceWith(LIBRARIES_MOCK[0]);
  });
});
