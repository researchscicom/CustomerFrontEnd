import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './product-list/product-list.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home', component: HomeComponent},
  {path : 'customer', component : CustomerListComponent},
  {path : 'product', component : ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
