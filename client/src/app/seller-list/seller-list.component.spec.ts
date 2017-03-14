/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellerListComponent } from './seller-list.component';

describe('SellerListComponent', () => {
  let component: SellerListComponent;
  let fixture: ComponentFixture<SellerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerListComponent ]
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
  });

  describe('should give error messages when', () => {
    it(`server isn't up`);
    it(`seller list is empty`);
    it(`modal window doesn't open`);
    it(`creating a new seller is unsuccessful`);
  });

});
