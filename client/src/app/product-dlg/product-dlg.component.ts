import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../sellers.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(public activeModal: NgbActiveModal,
  private toastrService: ToastrService) { }

  product: Product;
  title: string;
  notEditing: boolean;

  ngOnInit() {
  }
  
  onCancel() {
    this.toastrService.error("Operation canceled!", "Canceled!");
    this.activeModal.dismiss();
  }

  onOk() {
    if(this.notEditing === true)
    {
      var isNumPrice = /^\d+$/.test(this.product.price.toString());
      var isNumQuantity = /^\d+$/.test(this.product.quantityInStock.toString());

    if(this.product.name.length < 1)
      this.toastrService.info("Name field is required!", "Info!");
    else if(this.product.price < 0)
      this.toastrService.info("Price of a product may not be negative!", "Info!");
    else if(this.product.price.toString().length < 1)
      this.toastrService.info("You must specify a price!", "Info!");
    else if(isNumPrice === false)
      this.toastrService.info("Price must be a number!", "Info!");   
    else if(this.product.quantityInStock.toString().length < 1)
      this.toastrService.info("You must specify how much of the product is in stock!", "Info!");
    else if(this.product.quantityInStock < 0) 
      this.toastrService.info("Quantity of a product may not be negative!", "Info!");
    else if(isNumQuantity === false)
      this.toastrService.info("Quantity must be a number!", "Info!");
    else
      this.activeModal.close(this.product);
    }
    else
    {
      var isNumPrice = /^\d+$/.test(this.product.price.toString());

      if(this.product.name.length < 1)
        this.toastrService.info("Name field is required!", "Info!");
      else if(this.product.price < 0)
        this.toastrService.info("Price of a product may not be negative!", "Info!");
      else if(this.product.price.toString().length < 1)
        this.toastrService.info("You must specify a price!", "Info!");
      else if(isNumPrice === false)
        this.toastrService.info("Price must be a number!", "Info!");        
      else
        this.activeModal.close(this.product);
    }
  }

}
