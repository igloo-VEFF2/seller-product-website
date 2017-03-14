import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { SellersService, Seller, Product } from '../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';
import { ProductDlgComponent } from '../product-dlg/product-dlg.component';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
//import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: SellersService,
    private modalService: NgbModal,
    private toastrService: ToastrService) { }

  private sellerID: number;
  private name: string;
  private category: string;
  private imagePath: string;
  private productList: Product[];
  private topTen: Product[];
  private product: Product;
  private isEmpty: boolean;

  ngOnInit() {
    this.sellerID = this.route.snapshot.params['id'];
    this.isEmpty = false;

    this.service.getSellerById(this.sellerID).subscribe(info => {
      this.name = info.name;
      this.category = info.category;
      this.imagePath = info.imagePath;
    });

    this.service.getProductsBySellerId(this.sellerID).subscribe(products => {
      if (products.length === 0) {
        this.isEmpty = true;
      }
      else {
        this.productList = products;
        this.topTen = products.slice(0, 10); //the below sorted all product lists, so we use this dirty way for now
        // TODO: find a better way to sort
        /*let sortedProducts = products;
        this.topTen = sortedProducts.sort((p1, p2) => {
            //let total1 = p1.price*p1.quantitySold;
            //let total2 = p2.price*p2.quantitySold;
            return (p1.price*p1.quantitySold) < (p2.price*p2.quantitySold) ? -1 : (
              (p1.price*p1.quantitySold) > (p2.price*p2.quantitySold) ? 1 : 0
            );
        })
        .slice(0, 10);*/
      }
    });
  }

  /*ngOnChanges(changes: SimpleChange) {
    console.log('changes called');
    if (this.productList != changes.currentValue) {
      console.log('changing');
      this.service.getProductsBySellerId(this.sellerID);
    }
  }*/
    /*this.service.getSellerById(this.sellerID);
    console.log('something changed');*/

  editSellerInfo() {
    console.log('editing seller');
    let editSellerInstance = this.modalService.open(SellerDlgComponent);

    editSellerInstance.componentInstance.title = 'Edit Seller Info';

    editSellerInstance.componentInstance.seller = {
      id: this.sellerID,
      name: this.name,
      category: this.category,
      imagePath: this.imagePath
    };

    editSellerInstance.result.then(obj => {
      //console.log(obj.id);
      //console.log(obj);
      this.toastrService.success('Individuals info updated successfully!', 'Success!');
      this.service.updateSellerDetails(this.sellerID, obj).subscribe(result => {
        this.name = result.name;
        this.category = result.category;
        this.imagePath = result.imagePath;
      });
    })
    .catch(err => {
      console.log(err);
      this.toastrService.error('There was an error while updating individuals info!', 'Failure!');
    });

  }

  addNewProduct() {
    console.log('adding new product');
    let newProductInstance = this.modalService.open(ProductDlgComponent);

    newProductInstance.componentInstance.product = { 
      name: "",
      price: 0,
      quantityInStock: 0
    };

    newProductInstance.componentInstance.title = 'Adding new product';
    newProductInstance.componentInstance.notEditing = true;

    newProductInstance.result.then(obj => {
      //console.log(obj);
      this.toastrService.success('New product has been successfully added!', 'Success!');
      this.service.addNewProduct(this.sellerID, obj).subscribe(result => {
        this.product = result;
        this.service.getProductsBySellerId(this.sellerID).subscribe(result => {
          this.productList = result;
          //console.log(result.length);
        });
      });
    })
    .catch(err => {
      console.log(err);
      this.toastrService.error('There was an error while trying to add a new product!', 'Failure!');
    });
  }

  editProduct(currentProduct: Product) {
    console.log('editing product');

    let editProductInstance = this.modalService.open(ProductDlgComponent);

    editProductInstance.componentInstance.title = 'Editing product';
    editProductInstance.componentInstance.notEditing = false;

    editProductInstance.componentInstance.product = {
      id: this.sellerID,
      prodId: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      imagePath: currentProduct.imagePath
    };

    editProductInstance.result.then(obj => {
      this.toastrService.success('Product info updated successfully!', 'Success!');
      //console.log(obj);
      this.service.updateProductDetails(this.sellerID, currentProduct.id, obj).subscribe(result => {
        this.service.getProductsBySellerId(this.sellerID).subscribe(result => {
          this.productList = result;
        });
      });
    })
    .catch(err => {
      console.log(err);
      this.toastrService.error('There was an error while trying to update a product!', 'Failure!');
    });
  }
}
