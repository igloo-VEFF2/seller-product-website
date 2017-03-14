import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../sellers.service'; //gave warnings about not finding Product in sellers.service

/*export class Product {
  name: string;
  price: number;
  quantityInStock: number;
  imagePath: string;
}*/

@Component({
  selector: 'app-product-dlg',
  templateUrl: './product-dlg.component.html',
  styleUrls: ['./product-dlg.component.css']
})
export class ProductDlgComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  product: Product;
  title: string;
  notEditing: boolean;

  /*constructor(public activeModal: NgbActiveModal,
    private product: Product) { }*/

  ngOnInit() {
  }
  
  onCancel() {
    this.activeModal.dismiss();
  }

  onOk() {
    this.activeModal.close(this.product);
  }

}
