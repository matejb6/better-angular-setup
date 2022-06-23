import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared.module';

import { ComponentsModule } from '../components.module';
import { LibraryDialogComponent } from './library-dialog.component';

describe('LibraryDialogComponent', () => {
  let fixture: ComponentFixture<LibraryDialogComponent>;
  let component: LibraryDialogComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModule, SharedModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
