import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsModule } from '../components.module';
import { LibraryCardComponent } from './library-card.component';
import { librariesMock } from '@core/data/libraries.mock';
import { LibraryCardComponentQuery } from './library-card.component.query.spec';

describe('LibraryCardComponent', () => {
  let fixture: ComponentFixture<LibraryCardComponent>;
  let component: LibraryCardComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryCardComponent);
    component = fixture.componentInstance;
    component.libraryCard = librariesMock[0];
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

  it('should render card content', () => {
    expect(LibraryCardComponentQuery.getCardContent(nativeElem)).toBeTruthy();
  });

  it('should render card image', () => {
    expect(LibraryCardComponentQuery.getCardContentImage(nativeElem)).toBeTruthy();
  });

  it('should have title', () => {
    expect(LibraryCardComponentQuery.getCardTitle(nativeElem)?.innerText).toEqual(librariesMock[0].name);
  });

  it('should emit an event on card click', () => {
    spyOn(component.cardClick, 'emit');
    LibraryCardComponentQuery.getCard(nativeElem)?.click();

    expect(component.cardClick.emit).toHaveBeenCalledOnceWith(librariesMock[0]);
  });
});
