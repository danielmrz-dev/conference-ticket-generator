import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';

export const ticketPageProtectorGuard: CanActivateFn = (route, state) => {
  const userInfoService = inject(UserInfoService)
  const router = inject(Router)

  if (!userInfoService.isTicketDataFilled) {
    alert("You need to fill the form in order to get your ticket!")
    router.navigate(['/'])
    return false;
  } else {
    return true;
  }
};
