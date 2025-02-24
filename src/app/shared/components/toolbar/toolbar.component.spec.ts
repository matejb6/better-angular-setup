import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { ToolbarComponent } from './toolbar.component';
import { getToolbar, getToolbarIcon, getToolbarTitle } from './toolbar.component.query.spec';

describe('ToolbarComponent', () => {
  let fixture: ComponentFixture<ToolbarComponent>;
  let component: ToolbarComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should have toolbar title', () => {
    expect(getToolbarTitle(nativeElem)?.innerText).toContain('Better Angular Setup');
  });
});
