import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICustomer } from "../customer.interface";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class CustomerService{
    API_URL= environment.apiURL;

    constructor(private readonly httpClient: HttpClient) { }

    getCustomers():Observable<ICustomer[]>{
        return this.httpClient.get<ICustomer[]>(`${this.API_URL}/customer`)
    }

    getCustomerById(customerId: number): Observable<ICustomer>{
        return this.httpClient.get<ICustomer>(`${this.API_URL}/customer/${customerId}`);
    }

    createCustomer(createCustomer: ICustomer): Observable<ICustomer>{
        return this.httpClient.post<ICustomer>(`${this.API_URL}/cstomer`, createCustomer);
    }

    updateCustomer(customerId: number, updateCustomer: ICustomer): Observable<ICustomer>{
        return this.httpClient.put<ICustomer>(`${this.API_URL}/customer/${customerId}`, updateCustomer);
    }

    deleteCustomer(customerId: number): Observable<ICustomer>{
        return this.httpClient.delete<ICustomer>(`${this.API_URL}/customer/${customerId}`);
    }
}