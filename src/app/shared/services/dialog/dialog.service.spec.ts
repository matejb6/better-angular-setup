import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LIBRARIES_MOCK } from '@data/libraries.mock';
import { DialogModule } from './dialog.module';
import { DialogService } from './dialog.service';
import { LibraryDialogComponent } from '@app/shared/components/library-dialog/library-dialog.component';

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, DialogModule]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open dialog', () => {
    const dialogRef = service.openDialog(LibraryDialogComponent, LIBRARIES_MOCK[0]);

    expect(dialogRef.getState()).toEqual(0);
  });
});
