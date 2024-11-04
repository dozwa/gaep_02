import { TestBed } from '@angular/core/testing';

import { GeapBackendService } from './geap-backend.service';

describe('GeapBackendService', () => {
  let service: GeapBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeapBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
