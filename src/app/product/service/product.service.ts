import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { IProduct } from '../product.interface'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${this.API_URL}/product`)
    //.pipe(map((data:any) => data.products); //Para tomar un atributo de una respuesta json
  }

  getProductById(produdtId: number): Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${this.API_URL}/product/${produdtId}`);
  }

  createProduct(createProduct: IProduct): Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${this.API_URL}/product`, createProduct);
  } 

  updateProduct(productId: number, updateProduct: IProduct): Observable<IProduct>{
    return this.httpClient.put<IProduct>(`${this.API_URL}/product/${productId}`, updateProduct);
  } 

  deleteProduct(productId: number): Observable<IProduct>{
    return this.httpClient.delete<IProduct>(`${this.API_URL}/product/${productId}`);
  } 
}
