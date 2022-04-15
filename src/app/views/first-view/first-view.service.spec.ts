import { TestBed } from '@angular/core/testing';

import { FirstViewService } from './first-view.service';

describe('FirstViewService', () => {
  let service: FirstViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstViewService]
    });
    service = TestBed.inject(FirstViewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
