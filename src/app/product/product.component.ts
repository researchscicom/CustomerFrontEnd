import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {NotificationService} from '../services/notification.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductService,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<ProductComponent>
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
        this.service.updateProduct(this.service.form.get('id').value, this.service.form.value).subscribe();
        this.notificationService.success('Product Update Successfully!');
      } else {
        this.service.saveProduct(this.service.form.value).subscribe();
        this.notificationService.success('New Product added Successfully!');
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
