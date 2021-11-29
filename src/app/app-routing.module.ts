import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { PackageFormComponent } from './package/package-form/package-form.component';
import { PackageListComponent } from './package/package-list/package-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './shared/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'product/list',
    component: ProductListComponent
  },{
    path: 'product/create',
    component: ProductFormComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'product/packages/:id',
    component: PackageListComponent
  },
  {
    path: 'package/list',
    component: PackageListComponent
  },
  {
    path: 'package/:id',
    component: PackageFormComponent
  },
  {
    path: 'quotes',
    component: ProductFormComponent
  },
  {
    path: 'customer/list',
    component: CustomerListComponent
  },
  {
    path: 'customer/create',
    component: CustomerFormComponent
  },
  {
    path: 'customer/edit/:id',
    component: CustomerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
