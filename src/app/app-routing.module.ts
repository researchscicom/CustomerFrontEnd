import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './product-list/product-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {CompanyListComponent} from './company/company-list/company-list.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home', component: HomeComponent},
  {path : 'customer', component : CustomerListComponent},
  {path : 'product', component : ProductListComponent},
  {path : 'employee' , component : EmployeeListComponent},
  {path : 'company' , component : CompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
