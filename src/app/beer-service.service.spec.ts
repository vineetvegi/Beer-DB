import { TestBed } from '@angular/core/testing';

import { BeerServiceService } from './beer-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BeerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [BeerServiceService]
  }));

  it('should be created', () => {
    const service: BeerServiceService = TestBed.get(BeerServiceService);
    expect(service).toBeTruthy();
  });
});
