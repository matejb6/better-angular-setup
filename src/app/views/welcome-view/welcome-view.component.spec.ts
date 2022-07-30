import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WelcomeViewModule } from './welcome-view.module';
import { WelcomeViewComponent } from './welcome-view.component';
import { WelcomeViewComponentQuery } from './welcome-view.component.query.spec';

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
    expect(WelcomeViewComponentQuery.getTitle(nativeElem)).toBeTruthy();
  });

  it('should render multiple library cards', () => {
    expect(WelcomeViewComponentQuery.getLibraryCards(nativeElem).length).toBeGreaterThan(0);
  });

  it('should have title', () => {
    expect(WelcomeViewComponentQuery.getTitle(nativeElem)?.innerText).toContain('Hey developer');
  });

  it('should open dialog on card click', () => {
    WelcomeViewComponentQuery.getFirstLibraryCard(nativeElem)?.click();

    expect(WelcomeViewComponentQuery.getLibraryDialog()).toBeTruthy();
  });

  it('should close dialog on OK button click', (done) => {
    WelcomeViewComponentQuery.getFirstLibraryCard(nativeElem)?.click();
    WelcomeViewComponentQuery.getLibraryDialogOkButton()?.click();

    setTimeout(() => {
      expect(WelcomeViewComponentQuery.getLibraryDialog()).toBeFalsy();
      done();
    }, 500);
  });
});
