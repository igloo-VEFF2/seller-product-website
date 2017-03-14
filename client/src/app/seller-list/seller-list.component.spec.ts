/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';

import { SellerListComponent } from './seller-list.component';

class SellerServiceMock {
  sellers = { };
};

describe('SellerListComponent', () => {
  let component: SellerListComponent;
  let fixture: ComponentFixture<SellerListComponent>;
  let mockService = new SellerServiceMock();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerListComponent ],
      providers: [
        {provide: SellersService, 
          useValue: mockService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('should succesfully', () =>{
    it('get a list of sellers on load up');
    it('open a modal window to add a new seller');
    it('display new info when seller list has been updated');
  });

  describe('should give error messages when', () => {
    it(`server isn't up`);
    it(`seller list is empty`);
    it(`modal window doesn't open`);
    it(`creating a new seller is unsuccessful`);
  });

});
