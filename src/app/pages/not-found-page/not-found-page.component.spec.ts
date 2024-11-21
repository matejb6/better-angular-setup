import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageComponentQuery } from './not-found-page.component.query.spec';

describe('NotFoundPageComponent', () => {
  let fixture: ComponentFixture<NotFoundPageComponent>;
  let component: NotFoundPageComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render message', () => {
    expect(NotFoundPageComponentQuery.getMessage(nativeElem)).toBeTruthy();
  });

  it('should have message', () => {
    expect(NotFoundPageComponentQuery.getMessage(nativeElem)?.innerText).toContain(
      'URL you try to access is not available'
    );
  });
});
