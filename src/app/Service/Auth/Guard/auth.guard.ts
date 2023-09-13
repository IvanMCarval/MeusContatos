import { Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const usuarioAutenticado = this.authService.isAuthenticated()
    if (!usuarioAutenticado) {
      this.router.navigate(['/login'])
    }
    return usuarioAutenticado
  }
}
