import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { IPackage } from '../package.interface';
import { PackageService } from '../service/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: IPackage[] = [];

  constructor( private readonly packageService: PackageService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit():void {
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.packageService.getPackagesByProduct(params['id']).subscribe(
        res => {
          this.packages = res;
        }      
      );
    }
  }

  getPackagesByProduct(){

  }

}
