import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServicesModule } from './services.module';
import { DialogService } from './dialog.service';
import { librariesMock } from '@core/data/libraries.mock';
import { LibraryDialogComponent } from '@shared/components/library-dialog/library-dialog.component';

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ServicesModule]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open dialog', () => {
    const dialogRef = service.openDialog(LibraryDialogComponent, librariesMock[0]);

    expect(dialogRef.getState()).toEqual(0);
  });
});
