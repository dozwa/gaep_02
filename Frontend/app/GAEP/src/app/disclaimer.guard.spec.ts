import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { disclaimerGuard } from './disclaimer.guard';

describe('disclaimerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => disclaimerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
