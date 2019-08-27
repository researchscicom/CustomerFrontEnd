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
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NotificationService} from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    MyNavComponent,
    ConfirmComponent
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
    MatSelectModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [CustomerComponent, ProductComponent, ConfirmComponent]
})
export class AppModule { }
