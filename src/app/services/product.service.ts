import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:8080/product/api/product';
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    cost: new FormControl('', [ Validators.required, Validators.pattern('[0-9]*') , Validators.max(5000000)]),
    quantity: new FormControl('', [ Validators.required, Validators.pattern('[0-9]*') , Validators.max(500)]),
    description: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      cost: '',
      quantity: '',
      description: ''
    });
  }
  populateForm(product: Product) {
    this.form.setValue(product);
  }

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

export class Product {
  id: number;
  name: string;
  cost: number;
  quantity: number;
  description: string;
}
