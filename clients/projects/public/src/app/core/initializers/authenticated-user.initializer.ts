import { AuthenticatedUser } from '@vsp/core';
import { take } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationStore } from '../stores/authentication-store.service';

export function authenticatedUserInitializer(
    authenticationStore: AuthenticationStore, 
    authenticationSerivce: AuthenticationService) {
  
  const user: AuthenticatedUser | null = authenticationSerivce.getCachedAuthenticatedUser();

  return () => new Promise<boolean>(resolve => {
    if (user) {
      authenticationStore.setAuthenticatedUser(user);
    } else {
      authenticationStore.setAuthenticatedUser(null);
    }
    authenticationStore.authenticatedUser$
      .pipe(take(1))
      .subscribe(user => resolve(true));
  });
};
