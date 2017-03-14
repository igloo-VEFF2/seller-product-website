import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

export class Seller {
  name: string;
  category: string;
  imagePath: string;
}

@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})
export class SellerDlgComponent implements OnInit {

  seller: Seller;
  title: string;

  constructor(public activeModal: NgbActiveModal,
  private toastrService: ToastrService) { }

  ngOnInit() {
  }

  onCancel() {
    this.toastrService.error("Operation canceled!", "Canceled!");
    this.activeModal.dismiss();
  }

  onOk() {
    if(this.seller.name.length < 1)
    {
      this.toastrService.info("Name field is required!", "Info!");
    }
    else
    {
      this.activeModal.close(this.seller);
    }
  }
}
