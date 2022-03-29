import { AppService } from '../services/app-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class UsernameGuard implements CanActivate {
  constructor(private router: Router, private AppService: AppService) {}

  canActivate(): boolean {

    if (!this.AppService.userName) {
      this.router.navigate([''])
      return false;
    }

    return true;
  }
}
