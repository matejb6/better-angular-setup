import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { LIBRARIES_MOCK } from '@data/libraries';
import { Dialog } from './dialog';
import { LibraryDialog } from '@app/shared/components';

describe('Dialog', () => {
  let service: Dialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), Dialog],
    });
    service = TestBed.inject(Dialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open dialog', () => {
    const dialogRef = service.openDialog(LibraryDialog, LIBRARIES_MOCK[0]);

    expect(dialogRef.getState()).toEqual(0);
  });
});
