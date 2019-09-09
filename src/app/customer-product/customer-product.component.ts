import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.scss']
})
export class CustomerProductComponent implements OnInit {

  product: any;
  constructor(public dialogRef: MatDialogRef<CustomerProductComponent>,
              public service: CustomerService ) { }
  ngOnInit( ) {
    this.product = this.service.getProData();
  }

  onClose() {
    this.dialogRef.close();
  }
}
