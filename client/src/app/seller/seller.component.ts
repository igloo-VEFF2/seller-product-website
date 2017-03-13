import { Component, OnInit } from '@angular/core';
import { SellersService, Seller, Product } from '../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: SellersService) { }

  private sellerID: number;
  private name: string;
  private category: string;
  private imagePath: string;
  private productList: Product[];
  private seller: Seller;

  ngOnInit() {
    this.sellerID = this.route.snapshot.params['id'];
    this.service.getSellerById(this.sellerID).subscribe(info => {
      this.name = info.name;
      this.category = info.category;
      this.imagePath = info.imagePath;
      console.log(info);
    });
  }

}
