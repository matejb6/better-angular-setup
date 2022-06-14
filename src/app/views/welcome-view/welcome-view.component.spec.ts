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
  });

  beforeEach(() => {
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

  it('should render card', () => {
    expect(getCard(nativeElem)).toBeTruthy();
  });

  it('should render correct number of libraries', () => {
    expect(getCardContent(nativeElem)?.querySelectorAll('li').length).toEqual(6);
  });
});

const getCard = (parentElem: HTMLElement): HTMLElement | null => parentElem.querySelector('mat-card.card');

const getCardContent = (parentElem: HTMLElement): HTMLElement | null | undefined =>
  getCard(parentElem)?.querySelector('mat-card-content');
