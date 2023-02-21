import { TestBed } from '@angular/core/testing';

import { PhoneServiceDataService } from './phone-service-data.service';

describe('PhoneServiceDataService', () => {
  let service: PhoneServiceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneServiceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
