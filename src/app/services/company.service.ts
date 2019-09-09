import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  BASE_URL = 'http://localhost:8081/api/company';
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required , Validators.pattern('[0-9]*'),
    Validators.maxLength(10), Validators.minLength(10)]),
    email: new FormControl('', [Validators.required , Validators.email]),
    password: new FormControl('', [Validators.required , Validators.minLength(8)])
  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      address: '',
      phone: '',
      email: '',
      password: ''
    });
  }
  populateForm(company: Company) {
    this.form.setValue(company);
  }
  getAllCompanies(): any {
    return this.http.get(this.BASE_URL);
  }
  getCompany(id) {
    return this.http.get(this.BASE_URL + '/' + id);
  }
  saveCompany(company) {
    return this.http.post(this.BASE_URL , company);
  }
  editCompany(id , company) {
    return this.http.put(this.BASE_URL + '/' + id , company);
  }
  deleteCompany(id) {
    return this.http.delete(this.BASE_URL + '/' + id);
  }
}

export class Company {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  password: string;
}
