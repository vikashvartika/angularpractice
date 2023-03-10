import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    | boolean | UrlTree {

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      console.log('Not authorized')
      return false;
    }

  }



  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree > | Promise<boolean | UrlTree> | 
  //   boolean | UrlTree {

  // }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot):boolean {
  //     console.log('CanActivate called');
  //   let isLoggedIn = this.authService.isAuthenticated();
  //   if (isLoggedIn){
  //     return true
  //   } else {
  //     this.router.navigate(['/contact']);
  //   }
  // }

}
