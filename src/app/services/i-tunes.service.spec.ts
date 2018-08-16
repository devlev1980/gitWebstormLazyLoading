import { TestBed, inject } from '@angular/core/testing';

import { ITunesService } from './i-tunes.service';

describe('ITunesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ITunesService]
    });
  });

  it('should be created', inject([ITunesService], (service: ITunesService) => {
    expect(service).toBeTruthy();
  }));
});
