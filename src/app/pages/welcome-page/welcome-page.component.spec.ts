import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WelcomePageComponent } from './welcome-page.component';
import {
  getFirstLibraryCard,
  getLibraryCards,
  getLibraryDialog,
  getLibraryDialogOkButton,
  getTitle
} from './welcome-page.component.query.spec';

describe('WelcomePageComponent', () => {
  let fixture: ComponentFixture<WelcomePageComponent>;
  let component: WelcomePageComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, WelcomePageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePageComponent);
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

  it('should open dialog when card clicked', () => {
    getFirstLibraryCard(nativeElem)?.click();

    expect(getLibraryDialog()).toBeTruthy();
  });

  it('should close dialog when OK button clicked', (done) => {
    getFirstLibraryCard(nativeElem)?.click();
    getLibraryDialogOkButton()?.click();

    setTimeout(() => {
      expect(getLibraryDialog()).toBeFalsy();
      done();
    }, 500);
  });
});
