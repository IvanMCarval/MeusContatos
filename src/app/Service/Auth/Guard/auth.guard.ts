import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService()
  const router = new Router()

  if (authService.isAuthenticated()) {
    return true
  } else {
    if (state.url !== '/login') {
      router.navigate(['/login']); // Redirecione para a página de login
    }
    return false
  }
};
