import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  },{
    path: 'package/list',
    component: ProductFormComponent
  },
  {
    path: 'quotes',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
