import { TestBed } from '@angular/core/testing';

import { Routes, RoutesService } from './routes.service';

describe('RoutesService', () => {
  let service: RoutesService;

  // Test data
  const routes: Routes = {
    first: 'first'
  };
  const routePaths: Routes = {
    first: '/' + routes.first
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesService]
    });
    service = TestBed.inject(RoutesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have getRoutes method', () => {
    expect(service.getRoutes()).toEqual(routes);
  });

  it('should have getRoutePaths method', () => {
    expect(service.getRoutePaths()).toEqual(routePaths);
  });
});
