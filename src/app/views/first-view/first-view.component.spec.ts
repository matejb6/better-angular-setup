import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstViewModule } from './first-view.module';
import { FirstViewComponent } from './first-view.component';

describe('FirstViewComponent', () => {
  let fixture: ComponentFixture<FirstViewComponent>;
  let component: FirstViewComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstViewModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should have title', () => {
    expect(component.title).toEqual('First view');
  });
});
