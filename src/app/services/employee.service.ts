import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  BASE_URL = 'http://localhost:8082/api/employee';
  form: FormGroup = new FormGroup({
      id : new FormControl(null),
      fullname: new FormControl('' , Validators.required),
      nic: new FormControl('' , [Validators.required , Validators.pattern('[0-9]*') ,
        Validators.maxLength(10) , Validators.minLength(10)]),
      address: new FormControl('' , Validators.required),
      mobile: new FormControl('' , [Validators.required , Validators.pattern('[0-9]*'),
        Validators.maxLength(10) , Validators.minLength(10)]),
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('' , [Validators.required , Validators.minLength(8)]),
      companyId: new FormControl('' , [Validators.required , Validators.pattern('[0-9]*')])
    });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      fullname: '',
      nic: '',
      address: '',
      mobile: '',
      email: '',
      password: '',
      companyId: ''
    });
  }
  populateForm(employee: Employee) {
    this.form.setValue(employee);
  }

  getAllEmployees(): any {
    return this.http.get(this.BASE_URL);
  }

  getEmployee(id) {
    return this.http.get(this.BASE_URL + '/' + id);
  }
  saveEmployee(employee) {
    return this.http.post(this.BASE_URL , employee);
  }
  updateEmployee(id , employee) {
    return this.http.put(this.BASE_URL + '/' + id , employee);
  }
  deleteEmployee(id ) {
    return this.http.delete(this.BASE_URL + '/' + id );
  }
}

export class Employee {
  id: string ;
  fullname: string;
  nic: string;
  address: string;
  mobile: string;
  email: string;
  password: string;
  companyId: string;
}
