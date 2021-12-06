import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPackage } from '../package.interface';


@Injectable({
  providedIn: 'root'
})
export class PackageService {

  API_URL= environment.apiURL;

  constructor(private readonly httpClient: HttpClient) {}

  getPackages():Observable<IPackage[]>{
    return this.httpClient.get<IPackage[]>(`${this.API_URL}/package`);
  }

  getPackagesByProduct(productId: number):Observable<IPackage[]>{
    return this.httpClient.get<IPackage[]>(`${this.API_URL}/package/by-product/${productId}`);
  }
}
