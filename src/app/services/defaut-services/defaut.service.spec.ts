/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefautService } from './defaut.service';

describe('Service: Defaut', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefautService]
    });
  });

  it('should ...', inject([DefautService], (service: DefautService) => {
    expect(service).toBeTruthy();
  }));
});
