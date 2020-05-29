import { TestBed } from '@angular/core/testing';

import { StoursService } from './stours.service';

describe('StoursService', () => {
  let service: StoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
