import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePage } from './welcome-page';
import {
  getFirstLibraryCard,
  getLibraryCards,
  getLibraryDialog,
  getLibraryDialogOkButton,
  getTitle,
} from './welcome-page.query.spec';

describe('WelcomePage', () => {
  let fixture: ComponentFixture<WelcomePage>;
  let component: WelcomePage;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePage],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePage);
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
    fixture.detectChanges();

    getLibraryDialogOkButton()?.click();

    // Wait for dialog animation to finish
    setTimeout(() => {
      expect(getLibraryDialog()).toBeFalsy();
      done();
    }, 500);
  });
});
