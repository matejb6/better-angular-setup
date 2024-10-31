import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WelcomePageModule } from './welcome-page.module';
import { WelcomePageComponent } from './welcome-page.component';
import { WelcomePageComponentQuery } from './welcome-page.component.query.spec';

describe('WelcomePageComponent', () => {
  let fixture: ComponentFixture<WelcomePageComponent>;
  let component: WelcomePageComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, WelcomePageModule]
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
    expect(WelcomePageComponentQuery.getTitle(nativeElem)).toBeTruthy();
  });

  it('should render multiple library cards', () => {
    expect(WelcomePageComponentQuery.getLibraryCards(nativeElem).length).toBeGreaterThan(0);
  });

  it('should have title', () => {
    expect(WelcomePageComponentQuery.getTitle(nativeElem)?.innerText).toContain('Hey developer');
  });

  it('should open dialog on card click', () => {
    WelcomePageComponentQuery.getFirstLibraryCard(nativeElem)?.click();

    expect(WelcomePageComponentQuery.getLibraryDialog()).toBeTruthy();
  });

  it('should close dialog on OK button click', (done) => {
    WelcomePageComponentQuery.getFirstLibraryCard(nativeElem)?.click();
    WelcomePageComponentQuery.getLibraryDialogOkButton()?.click();

    setTimeout(() => {
      expect(WelcomePageComponentQuery.getLibraryDialog()).toBeFalsy();
      done();
    }, 500);
  });
});
