import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerComponent } from './seller/seller.component';
import { ProductComponent } from './product/product.component';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';
import { ProductDlgComponent } from './product-dlg/product-dlg.component';


@NgModule({
  declarations: [
    AppComponent,
    SellerListComponent,
    SellerComponent,
    ProductComponent,
    SellerDlgComponent,
    ProductDlgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'sellers',
      pathMatch: 'full'
    },  {
      path: 'sellers',
      component: SellerListComponent
    },  {
      path: 'sellers/:id',
      component: SellerComponent
    }])
  ],
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [SellerDlgComponent, ProductDlgComponent]
})
export class AppModule { }
