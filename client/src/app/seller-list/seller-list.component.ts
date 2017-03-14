import { Component, OnInit } from '@angular/core';
import { SellersService, Seller} from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from "../seller-dlg/seller-dlg.component";

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  constructor(private service: SellersService,
    private modalService: NgbModal) { }

  private sellers: Seller[];
  private seller: Seller;

  ngOnInit() {
    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });
  }

  addSeller() {
    var modalInstance = this.modalService.open(SellerDlgComponent);
    modalInstance.componentInstance.title = "Adding new seller";
    modalInstance.componentInstance.seller = { };
    modalInstance.result.then(obj => {
      console.log("Dialog was closed using OK");
      console.log(obj);
      this.service.addNewSeller(obj).subscribe(result => {
        //this.seller = result;
        this.service.getSellers().subscribe(result => {
          this.sellers = result;
        });
      });
    })
    .catch(err => {
      console.log("Dialog was cancelled");
      console.log(err);
    });
  }

}
