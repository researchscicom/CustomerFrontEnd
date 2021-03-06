import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
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
import { CustomerProductComponent } from './customer-product/customer-product.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CompanyComponent } from './company/company/company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { EmployeeCompanyComponent } from './company/employee-company/employee-company.component';
import {NgOpenCVModule, OpenCVOptions} from 'ng-open-cv';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './home/camera/camera.component';

// set the location of the OpenCV files
const openCVConfig: OpenCVOptions = {
  scriptUrl: `assets/opencv/opencv.js`,
  wasmBinaryFile: 'wasm/opencv_js.wasm',
  usingWasm: true
};

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
    EmployeeListComponent,
    CompanyComponent,
    CompanyListComponent,
    EmployeeCompanyComponent,
    CameraComponent
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
    NgxSpinnerModule,
    WebcamModule,
    NgOpenCVModule.forRoot(openCVConfig),
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [CustomerComponent, ProductComponent, ConfirmComponent, CustomerProductComponent, EmployeeComponent,
  CompanyComponent, EmployeeCompanyComponent]
})
export class AppModule { }
