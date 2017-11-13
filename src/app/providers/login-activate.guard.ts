import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService} from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginActivateGuard implements CanActivate {
  constructor (public authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>|Promise<boolean>|boolean{
    return this.authService.isLoggedIn();
  }
}
