import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {NotificationService} from '../../services/notification.service';
import {MatDialogRef} from '@angular/material';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(private service: CompanyService,
              private productService: ProductService ,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<CompanyComponent>
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
        this.service.editCompany(this.service.form.get('id').value, this.service.form.value).subscribe();
        this.notificationService.success('Company Update Successfully!');
      } else {
        this.service.saveCompany(this.service.form.value).subscribe();
        this.notificationService.success('New Company added Successfully!');
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
