import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) { }

  baseURL = 'http://localhost:8080/customer/api/customer';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9]')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required)
  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      city: '',
      age: '',
      email: '',
      gender: ''
    });
  }
  populateForm(customer: Customer) {
    this.form.setValue(customer);
  }
  getCustomers(): any {
    return this.http.get(this.baseURL);
  }

  getCustomer(id) {
    return this.http.get(this.baseURL + '/' + id);
  }
  saveCustomer(customer) {
    return this.http.post(this.baseURL, customer);
  }
  updateCustomer(id, customer) {
    return this.http.put(this.baseURL + '/' + id, customer);
  }
  deleteCustomer(id) {
    return this.http.delete(this.baseURL + '/' + id);
  }
}

export class Customer {
  id: string;
  name: string;
  city: string;
  age: string;
  email: string;
  gender: string;
}
