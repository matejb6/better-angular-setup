import { TestBed } from '@angular/core/testing';

import { WelcomeViewService } from './welcome-view.service';

describe('WelcomeViewService', () => {
  let service: WelcomeViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeViewService]
    });
    service = TestBed.inject(WelcomeViewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
