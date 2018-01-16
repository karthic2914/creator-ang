import { TestBed, inject } from '@angular/core/testing';

import { MakerService } from './maker.service';

describe('MakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakerService]
    });
  });

  it('should ...', inject([MakerService], (service: MakerService) => {
    expect(service).toBeTruthy();
  }));
});
