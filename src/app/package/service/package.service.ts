import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPackage } from '../package.interface';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  API_URL = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient) {}

  getPackages():Observable<IPackage[]>{
    return this.httpClient.get<IPackage[]>(`${this.API_URL}/package`);
  }

  getPackagesByProduct(productId: number):Observable<IPackage[]>{
    return this.httpClient.get<IPackage[]>(`${this.API_URL}/package/by-product/${productId}`);
  }
}
