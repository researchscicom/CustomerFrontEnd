import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:8080/product/api/product';
  getAllProducts(): any {
    return this.http.get(this.baseURL);
  }
  getProduct(id) {
    return this.http.get(this.baseURL + '/' + id);
  }
  saveProduct(product) {
    return this.http.post(this.baseURL, product);
  }
  updateProduct(id, product) {
    return this.http.put(this.baseURL + '/' + id, product);
  }
  deleteProduct(id) {
    return this.http.delete(this.baseURL + '/' + id);
  }
}
