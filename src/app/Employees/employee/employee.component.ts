import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {NotificationService} from '../../services/notification.service';
import {MatDialogRef} from '@angular/material';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
              private productService: ProductService ,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<EmployeeComponent>
  ) {}
  products: Array<any>;

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.get('id').value != null) {
        this.service.updateEmployee(this.service.form.get('id').value, this.service.form.value).subscribe();
        this.notificationService.success('Employee Update Successfully!');
      } else {
        this.service.saveEmployee(this.service.form.value).subscribe();
        this.notificationService.success('New Employee added Successfully!');
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
