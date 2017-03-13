import { Component, OnInit } from '@angular/core';
import { SellersService, Seller} from '../sellers.service';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  constructor(private service: SellersService) { }

  private sellers: Seller[];

  ngOnInit() {
      this.service.getSellers().subscribe(result => {
        this.sellers = result;
  });
}
}
