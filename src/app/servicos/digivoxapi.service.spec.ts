import { TestBed } from '@angular/core/testing';

import { DigivoxapiService } from './digivoxapi.service';

describe('DigivoxapiService', () => {
  let service: DigivoxapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigivoxapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
