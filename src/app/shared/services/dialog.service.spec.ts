import { TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { ServicesModule } from './services.module';
import { DialogService } from './dialog.service';
import { LibraryCard } from '@core/interfaces/library-card';
import { LibraryDialogComponent } from '@shared/components/library-dialog/library-dialog.component';

describe('DialogService', () => {
  let service: DialogService;

  const libraryCard: LibraryCard = {
    logoPath: '',
    name: 'Library',
    description: 'Super awesome library you can use',
    link: 'https://www.example.com/link',
    stepsToAdd: []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, ServicesModule]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open dialog', () => {
    const dialogRef = service.openDialog(LibraryDialogComponent, libraryCard);

    expect(dialogRef.getState()).toEqual(0);
  });
});
