import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'customer', component : CustomerComponent},
  {path : 'customerlist', component : CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
