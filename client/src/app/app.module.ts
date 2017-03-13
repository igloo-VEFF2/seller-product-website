import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerComponent } from './seller/seller.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerListComponent,
    SellerComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SellersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
