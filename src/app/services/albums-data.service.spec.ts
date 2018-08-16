import { TestBed, inject } from '@angular/core/testing';

import { AlbumsDataService } from './albums-data.service';

describe('AlbumsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumsDataService]
    });
  });

  it('should be created', inject([AlbumsDataService], (service: AlbumsDataService) => {
    expect(service).toBeTruthy();
  }));
});
