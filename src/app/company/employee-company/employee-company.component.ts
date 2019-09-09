import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CustomerService} from '../../services/customer.service';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-company',
  templateUrl: './employee-company.component.html',
  styleUrls: ['./employee-company.component.scss']
})
export class EmployeeCompanyComponent implements OnInit {

  company: any;
  constructor(public dialogRef: MatDialogRef<EmployeeCompanyComponent>,
              public service: EmployeeService ) { }
  ngOnInit( ) {
    this.company = this.service.getCompanyData();
  }

  onClose() {
    this.dialogRef.close();
  }

}
