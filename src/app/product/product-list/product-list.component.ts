import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.interface';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: IProduct[] = [];

  constructor(private readonly productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => this.productList = res,
      err => console.log(err)
      
    );
  }

}
