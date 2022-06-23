import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '@core/core.module';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let fixture: ComponentFixture<ToolbarComponent>;
  let component: ToolbarComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render toolbar', () => {
    expect(getToolbar(nativeElem)).toBeTruthy();
  });

  it('should render toolbar icon', () => {
    expect(getToolbarIcon(nativeElem)).toBeTruthy();
  });

  it('should render toolbar title', () => {
    expect(getToolbarTitle(nativeElem)).toBeTruthy();
  });
});

const getToolbar = (parentElem: HTMLElement): HTMLElement | null => parentElem.querySelector('mat-toolbar');

const getToolbarIcon = (parentElem: HTMLElement): HTMLElement | null | undefined =>
  getToolbar(parentElem)?.querySelector('mat-icon.mat-icon');

const getToolbarTitle = (parentElem: HTMLElement): HTMLElement | null | undefined =>
  getToolbar(parentElem)?.querySelector('span');
