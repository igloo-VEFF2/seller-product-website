import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})
export class SellerDlgComponent implements OnInit {

  sellerName: string;

  constructor() { }

  ngOnInit() {
  }

}
