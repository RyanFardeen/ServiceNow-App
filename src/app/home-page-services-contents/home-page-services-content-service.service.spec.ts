import { TestBed } from '@angular/core/testing';

import { HomePageServicesContentServiceService } from './home-page-services-content-service.service';

describe('HomePageServicesContentServiceService', () => {
  let service: HomePageServicesContentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageServicesContentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
