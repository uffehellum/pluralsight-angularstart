import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { isNumber } from 'util';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product id')
      this._router.navigate(['/products'])
      return false
    }
    return true
  }

}
