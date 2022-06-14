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
    expect(service.getRoutes()).toEqual({
      welcome: 'welcome'
    });
  });

  it('should have routePaths', () => {
    expect(service.getRoutePaths()).toEqual({
      welcome: '/welcome'
    });
  });
});
