import { Component, OnInit } from '@angular/core';
import { SellersService, Seller} from './sellers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

 // private sellers: Seller[];
 private seller: Seller;

  constructor(private service: SellersService) {}

  ngOnInit() {

    this.service.getSellerById(2).subscribe((result) => {
      this.seller = result;
    }, (err) => {
      //TODO
      console.log("There was a failure");
    });

    /*
    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });
    */
  }

}


