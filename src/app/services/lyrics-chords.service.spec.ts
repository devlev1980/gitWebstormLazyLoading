import { TestBed, inject } from '@angular/core/testing';

import { LyricsChordsService } from './lyrics-chords.service';

describe('LyricsChordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LyricsChordsService]
    });
  });

  it('should be created', inject([LyricsChordsService], (service: LyricsChordsService) => {
    expect(service).toBeTruthy();
  }));
});
