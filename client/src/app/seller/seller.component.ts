import { Component, OnInit } from '@angular/core';
import { SellersService, Seller, Product } from '../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';
import { ProductDlgComponent } from '../product-dlg/product-dlg.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: SellersService,
    private modalService: NgbModal) { }

  private sellerID: number;
  private name: string;
  private category: string;
  private imagePath: string;
  private productList: Product[];
  private topTen: Product[];
  private product: Product;

  ngOnInit() {
    this.sellerID = this.route.snapshot.params['id'];
    let isEmpty = false;

    this.service.getSellerById(this.sellerID).subscribe(info => {
      this.name = info.name;
      this.category = info.category;
      this.imagePath = info.imagePath;
    });

    this.service.getProductsBySellerId(this.sellerID).subscribe(products => {
      if (products.length === 0) {
        isEmpty = true;
      }
      else {
        this.productList = products;
        //this.topTen = products.sort()
      }
    });
  }

  editSellerInfo() {
    console.log('editing seller');
    let editSellerInstance = this.modalService.open(SellerDlgComponent);

    editSellerInstance.componentInstance.seller = {
      id: this.sellerID,
      name: this.name,
      category: this.category,
      imagePath: this.imagePath
    };

    editSellerInstance.result.then(obj => {
      console.log(obj);
      this.service.updateSellerDetails(this.sellerID, obj);
    })
    .catch(err => {
      console.log(err);
    });

  }

  addNewProduct() {
    console.log('adding new product');
    let newProductInstance = this.modalService.open(ProductDlgComponent);

    newProductInstance.componentInstance.product = { };

    newProductInstance.result.then(obj => {
      console.log(obj);
      this.service.addNewProduct(this.sellerID, obj);
    })
    .catch(err => {
      console.log(err);
    });
  }

  editProduct() {
    console.log('editing product');

    this.product = this.route.snapshot.params['id'];

    console.log(this.product);

    let editProductInstance = this.modalService.open(ProductDlgComponent);

    editProductInstance.componentInstance.product = {
      name: this.product.name,
      price: this.product.price,
      quantitySold: this.product.quantitySold,
      quantityInStock: this.product.quantityInStock,
      imagePath: this.product.imagePath
    };

    editProductInstance.result.then(obj => {
      console.log(obj);
      this.service.updateProductDetails(this.sellerID, this.product.id, obj);
    })
    .catch(err => {
      console.log(err);
    })
  }
}
