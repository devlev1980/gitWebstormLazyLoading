import { TestBed, inject } from '@angular/core/testing';

import { AlbumInfoService } from './album-info.service';

describe('AlbumInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumInfoService]
    });
  });

  it('should be created', inject([AlbumInfoService], (service: AlbumInfoService) => {
    expect(service).toBeTruthy();
  }));
});
