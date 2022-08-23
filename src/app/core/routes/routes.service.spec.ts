import { TestBed } from '@angular/core/testing';

import { RoutesService } from './routes.service';

describe('RoutesService', () => {
  let service: RoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesService]
    });
    service = TestBed.inject(RoutesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have routes', () => {
    expect(Object.keys(service.getRoutes()).length).toBeGreaterThan(0);
  });
});
