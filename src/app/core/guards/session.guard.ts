// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { Observable } from 'rxjs';


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( private cookieService: CookieService, private router:Router)
     {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('SessionGuard ejecutado');
      // return false
      return this.checkCookieSession(); 
   }
   
  checkCookieSession():boolean{
    try {

      const token: boolean = this.cookieService.check('token')
      console.log("🎸🎸🎸🎸🎸🎸",token);
      
        if (!token) {
          this.router.navigate(['/', 'auth'])
        }
      return token

    } catch (e) {
      console.log('Algo sucedio ?? 🔴', e);
      return false
    }

  }

}



// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SessionGuard  {

//   constructor(
//     private cookieService: CookieService,
//     private router: Router) {

//   }

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.checkCookieSession();
//   }

//   checkCookieSession(): boolean {
//     try {

//       const token: boolean = this.cookieService.check('token')
//       if (!token) {
//         this.router.navigate(['/', 'auth'])
//       }
//       return token

//     } catch (e) {
//       console.log('Algo sucedio ?? 🔴', e);
//       return false
//     }

//   }

// }