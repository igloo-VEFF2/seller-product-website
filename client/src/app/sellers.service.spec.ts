/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellersService } from './sellers.service';

describe('SellersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellersService]
    });
  });

  it('should ...', inject([SellersService], (service: SellersService) => {
    expect(service).toBeTruthy();
  }));
  it('should fetch sellerlist data from server');
  it('should add a new seller to server');
  it('should get information about seller');
  it('should get a list of products a seller has');
  it('should add a new product to sellers product list');
  it('should edit product information');
});
