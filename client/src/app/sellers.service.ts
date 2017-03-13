import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx';

export interface Seller {
  id: number;
  name: string;
  category: string;
  imagePath: string;
}

export interface SellerDetails {
  seller: Seller;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantitySold: number;
  quantityInStock: number;
  imagePath: string;
}

@Injectable()
export class SellersService {

  constructor(private http: Http) { }

  getSellers(): Observable<Seller[]> {
    return this.http.get('http://localhost:5000/api/sellers')
    .map(response => {
      return <Seller[]> response.json();
    });
    //TODO: add response for not found and server not up
  }

  getSellerById(id: number): Observable<Seller> {
    return this.http.get(`http://localhost:5000/api/sellers/${id}`)
    .map(response => {
      return <Seller> response.json();
    });
    //TODO: add response for (ID) not found and server not up
  }

  getProductsBySellerId(id: number): Observable<Product[]> {
    return this.http.get(`http://localhost:5000/api/sellers/${id}/products`)
    .map(response => {
      return <Product[]> response.json();
    });
    //TODO: add response for (ID) not found and server not up
  }

  //TODO: check if these functions do the correct thing
  //console.log checks added to see data
  addNewSeller(newSeller: Seller): Observable<Seller> {
    console.log(newSeller);
    return this.http.post('http://localhost:5000/api/sellers', newSeller)
    .map(response => {
      console.log(response);
      return <Seller> response.json(); //this is very probably wrong
    });
  }
  
  addNewProduct(id: number, newProduct: Product): Observable<Product> {
    console.log(id);
    console.log(newProduct);
    return this.http.post(`http://localhost:5000/api/sellers/${id}/products`, newProduct)
    .map(response => {
      console.log(response);
      return <Product> response.json();
    });
  }

  updateSellerDetails(id: number, updatedSeller: Seller): Observable<Seller> {
    return this.http.put(`http://localhost:5000/api/sellers/${id}`, updatedSeller)
    .map(response => {
      return <Seller> response.json();
    });
  }

  updateProductDetails(sellerID: number, productID: number, updatedProduct: Product): Observable<Product> {
    return this.http.put(`/api/sellers/${sellerID}/products/${productID}`, updatedProduct)
    .map(response => {
      return <Product> response.json();
    });
  }
}
