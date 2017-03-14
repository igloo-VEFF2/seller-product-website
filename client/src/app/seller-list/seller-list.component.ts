import { Component, OnInit } from '@angular/core';
import { SellersService, Seller} from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from "../seller-dlg/seller-dlg.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  constructor(private service: SellersService,
    private modalService: NgbModal,
    private toastrService: ToastrService) { }

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
    modalInstance.componentInstance.seller = { 
      name: ""
    };
    modalInstance.result.then(obj => {
      this.toastrService.success('Seller succesfully added!', 'Success!');
      this.service.addNewSeller(obj).subscribe(result => {
        //this.seller = result;
        this.service.getSellers().subscribe(result => {
          this.sellers = result;
        });
      });
    })
    .catch(err => {
      this.toastrService.error('There was an error while adding a new individual!', 'Failure!');
      console.log(err);
    });
  }
}
