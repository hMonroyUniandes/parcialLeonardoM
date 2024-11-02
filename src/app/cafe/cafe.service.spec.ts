/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';
import { environment } from '../../environment/environment.development';

describe('Service: Cafe', () => {
  let service: CafeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    });
    service = TestBed.inject(CafeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should ...', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
