import { TestBed } from '@angular/core/testing';

import { HeaderNavbarLinksService } from './header-navbar-links.service';

describe('HeaderNavbarLinksService', () => {
  let service: HeaderNavbarLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderNavbarLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
