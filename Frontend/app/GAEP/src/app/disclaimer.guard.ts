import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DisclaimerGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const disclaimerAgreed = localStorage.getItem('disclaimerAgreed');
    var hasAgreed = true;
    if(disclaimerAgreed == null || disclaimerAgreed == "" || disclaimerAgreed == "0"){
      hasAgreed = false;
    }
    if (!hasAgreed) {
      this.router.navigate(['/']);
    }
    return hasAgreed;
  }
}
