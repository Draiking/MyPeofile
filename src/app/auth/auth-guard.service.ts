import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }


    /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     }
 */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // check if user is logged in
        if (this.authService.trueLogin()) {
            return true;
        } else {
            this.router.navigate(['/main']);
        }
        return false;
    }
}
