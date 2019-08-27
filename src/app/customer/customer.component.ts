import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {NotificationService} from '../services/notification.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private service: CustomerService,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<CustomerComponent>
  ) {}

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.get('id').value != null) {
        this.service.updateCustomer(this.service.form.get('id').value, this.service.form.value).subscribe();
        this.notificationService.success('Customer Update Successfully!');
      } else {
        this.service.saveCustomer(this.service.form.value).subscribe();
        this.notificationService.success('New Customer added Successfully!');
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
