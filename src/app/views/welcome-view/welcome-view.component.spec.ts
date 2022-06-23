import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeViewModule } from './welcome-view.module';
import { WelcomeViewComponent } from './welcome-view.component';

describe('WelcomeViewComponent', () => {
  let fixture: ComponentFixture<WelcomeViewComponent>;
  let component: WelcomeViewComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeViewModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should have title', () => {
    expect(component.title).toContain('Hey developer');
  });

  it('should render title', () => {
    expect(nativeElem.querySelector('h1')).toBeTruthy();
  });

  it('should render multiple library cards', () => {
    expect(getLibraryCards(nativeElem).length).toBeGreaterThan(0);
  });
});

const getLibraryCards = (parentElem: HTMLElement): NodeListOf<HTMLElement> =>
  parentElem.querySelectorAll('app-library-card');
