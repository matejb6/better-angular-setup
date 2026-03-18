import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { CoreModule } from '../core.module';
import { LibrariesData } from './libraries-data';

describe('LibrariesData', () => {
  let service: LibrariesData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(LibrariesData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have libraries observable data', async () => {
    const libraries = await firstValueFrom(service.getLibrariesAsObs());
    expect(libraries.length).toBeGreaterThan(0);
  });
});
