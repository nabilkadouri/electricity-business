import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isLogged()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
