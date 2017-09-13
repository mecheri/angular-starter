import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    /**
     * Creates an instance of ExceptionService.
     *
     * @param {AuthService} authService
     */
    constructor(private router: Router,
        private authService: AuthService) { }

    /**
     * Indicates if a route can be activated
     *
     * @returns {boolean}
     *
     * @memberOf AuthGuardService
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(["/login"]);
            return false;
        }
        return true;
    }
}