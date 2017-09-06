import { TestBed, inject } from '@angular/core/testing';

import { NewServiceService } from './new-service.service';

describe('NewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewServiceService]
    });
  });

  it('should be created', inject([NewServiceService], (service: NewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
