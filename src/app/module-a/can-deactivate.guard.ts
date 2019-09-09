import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<any> {

  canDeactivate(
    component: any,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('can deactivate started');
    return false;
  }
}
