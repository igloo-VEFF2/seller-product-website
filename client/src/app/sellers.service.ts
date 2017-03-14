import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
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
  addNewSeller(newSeller: Object): Observable<Seller> {
    console.log(newSeller);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:5000/api/sellers', newSeller, options)
    .map(response => {
      console.log(response);
      console.log("Seller added!");
      //return <Seller> response.json(); //this is very probably wrong
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return Observable.throw(err.json().error || 'Server error');
    });
  }
  
  addNewProduct(id: number, newProduct: Product): Observable<Product> {
    console.log(id);
    console.log(newProduct);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 

    return this.http.post(`http://localhost:5000/api/sellers/${id}/products`, newProduct, options)
    .map(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return Observable.throw(err.json().error);
    });
  }

  /*updateSellerDetails(id: number, updatedSeller: Object) {
    console.log(id);
    console.log(updatedSeller);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    this.http.put(`http://localhost:5000/api/sellers/${id}`, JSON.stringify(updatedSeller), options)
    .map(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return Observable.throw(err.json().error);
    })
    .subscribe();
  }*/

    updateSellerDetails(id: number, updatedSeller: Object): Observable<Seller> {
    console.log(id);
    console.log(updatedSeller);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`http://localhost:5000/api/sellers/${id}`, JSON.stringify(updatedSeller), options)
    .map(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return Observable.throw(err.json().error);
    });
  }

  updateProductDetails(sellerID: number, productID: number, updatedProduct: Product): Observable<Product> {
    console.log(sellerID);
    console.log(productID);
    console.log(updatedProduct);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`http://localhost:5000/api/sellers/${sellerID}/products/${productID}`, updatedProduct, options)
    .map(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return Observable.throw(err.json().error);
    });
  }
}
