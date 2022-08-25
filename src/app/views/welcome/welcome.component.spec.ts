import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WelcomeModule } from './welcome.module';
import { WelcomeComponent } from './welcome.component';
import { WelcomeComponentQuery } from './welcome.component.query.spec';

describe('WelcomeComponent', () => {
  let fixture: ComponentFixture<WelcomeComponent>;
  let component: WelcomeComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, WelcomeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(WelcomeComponentQuery.getTitle(nativeElem)).toBeTruthy();
  });

  it('should render multiple library cards', () => {
    expect(WelcomeComponentQuery.getLibraryCards(nativeElem).length).toBeGreaterThan(0);
  });

  it('should have title', () => {
    expect(WelcomeComponentQuery.getTitle(nativeElem)?.innerText).toContain('Hey developer');
  });

  it('should open dialog on card click', () => {
    WelcomeComponentQuery.getFirstLibraryCard(nativeElem)?.click();

    expect(WelcomeComponentQuery.getLibraryDialog()).toBeTruthy();
  });

  it('should close dialog on OK button click', (done) => {
    WelcomeComponentQuery.getFirstLibraryCard(nativeElem)?.click();
    WelcomeComponentQuery.getLibraryDialogOkButton()?.click();

    setTimeout(() => {
      expect(WelcomeComponentQuery.getLibraryDialog()).toBeFalsy();
      done();
    }, 500);
  });
});
