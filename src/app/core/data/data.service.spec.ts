import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { CoreModule } from '@core/core.module';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have libraries observable data', async () => {
    const libraries = await firstValueFrom(service.getLibrariesObs());
    expect(libraries.length).toBeGreaterThan(0);
  });
});
