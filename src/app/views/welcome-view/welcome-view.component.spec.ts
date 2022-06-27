import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WelcomeViewModule } from './welcome-view.module';
import { WelcomeViewComponent } from './welcome-view.component';

describe('WelcomeViewComponent', () => {
  let fixture: ComponentFixture<WelcomeViewComponent>;
  let component: WelcomeViewComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, WelcomeViewModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(getTitle(nativeElem)).toBeTruthy();
  });

  it('should render multiple library cards', () => {
    expect(getLibraryCards(nativeElem).length).toBeGreaterThan(0);
  });

  it('should have title', () => {
    expect(getTitle(nativeElem)?.innerText).toContain('Hey developer');
  });

  it('should open dialog on card click', () => {
    getFirstLibraryCard(nativeElem)?.click();

    expect(getLibraryDialog()).toBeTruthy();
  });

  it('should close dialog on OK button click', (done) => {
    getFirstLibraryCard(nativeElem)?.click();
    getLibraryDialogOkButton()?.click();

    setTimeout(() => {
      expect(getLibraryDialog()).toBeFalsy();
      done();
    }, 500);
  });
});

const getTitle = (parentElem: HTMLElement): HTMLHeadingElement | null => parentElem.querySelector('h1');

const getLibraryCards = (parentElem: HTMLElement): NodeListOf<HTMLElement> =>
  parentElem.querySelectorAll('app-library-card');

const getFirstLibraryCard = (parentElem: HTMLElement): HTMLElement | null =>
  getLibraryCards(parentElem).item(0).querySelector('mat-card.card');

const getLibraryDialog = (): Element | null => document.querySelector('app-library-dialog');

const getLibraryDialogOkButton = (): HTMLButtonElement | null | undefined =>
  getLibraryDialog()?.querySelector('button.mat-primary');
