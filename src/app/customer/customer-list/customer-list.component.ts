import { Component, OnInit } from "@angular/core";
import { ICustomer } from "../customer.interface";
import { CustomerService } from "../service/customer.service";

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{

    customerList: ICustomer[] = [];

    constructor(private readonly customerService: CustomerService){}

    ngOnInit(){
        this.getCustomers();
    }

    getCustomers(){
        this.customerService.getCustomers().subscribe(
            res => this.customerList = res,
            err => console.log(err)
        );
    }
}