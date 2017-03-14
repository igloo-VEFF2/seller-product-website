/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SellersService } from '../sellers.service';
import { Router } from '@angular/router'

import { SellerComponent } from './seller.component';

class SellerServiceMock {

}

describe('SellerComponent', () => {
  let component: SellerComponent;
  let fixture: ComponentFixture<SellerComponent>;
  let mockService = new SellerServiceMock();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on init', () => {
    it('should load up seller information');
    it('should load up an all products list of products if seller has products');
    it('should load up a top 10 list of most sold products if seller has products');
    it('should display a message in all products tab if seller has no products');
    it('should display a message in top 10 tab if seller has no products');
    it('should display a message in top 10 tab if seller has no most sold products');
  });

  describe('on editing seller information', () => {
    it('should open a modal window');
    it('should display a message if successfully edited');
    it('should update relevant information if successfully edited');
    it('should display an error if edit was unsuccessful');
    it('should not change information if modal window was closed without pushing OK');
  });
});
