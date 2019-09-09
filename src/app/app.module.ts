import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './Customers/customer/customer.component';
import { CustomerListComponent } from './Customers/customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './Products/product/product.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmComponent } from './services/confirm/confirm.component';
import {
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatOptionModule,
  MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSnackBarModule, MatStepperModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NotificationService} from './services/notification.service';
import { CustomerProductComponent } from './Customers/customer-product/customer-product.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { EmployeeListComponent } from './Employees/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    MyNavComponent,
    ConfirmComponent,
    CustomerProductComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    DragDropModule,
    MatStepperModule,
    NgxSpinnerModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [CustomerComponent, ProductComponent, ConfirmComponent, CustomerProductComponent, EmployeeComponent]
})
export class AppModule { }
