import { Directive, inject, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AuthenticationStore } from '@vsp/public/core/stores/authentication-store.service';
import { AuthenticatedStatus } from '@vsp/core';

@Directive({
  selector: '[pjoIfAuthenticated]',
  standalone: true
})
export class VspIfAuthenticatedDirective implements OnInit, OnDestroy {
  private readonly _destroy$: Subject<any> = new Subject<any>();
  private readonly _templateRef: TemplateRef<any> = inject(TemplateRef<any>);
  private readonly _viewContainer: ViewContainerRef = inject(ViewContainerRef);
  private readonly _authenticationStore: AuthenticationStore = inject(AuthenticationStore);

  @Input()
  public pjoIfAuthenticated: boolean = true;

  ngOnInit(): void {
    this._authenticationStore.authenticatedStatus$
      .pipe(takeUntil(this._destroy$))
      .subscribe((status: AuthenticatedStatus | null) => {
          if ((status === AuthenticatedStatus.AUTHENTICATED && this.pjoIfAuthenticated)
              || (status !== AuthenticatedStatus.AUTHENTICATED && !this.pjoIfAuthenticated)
          ) {
            this._viewContainer.createEmbeddedView(this._templateRef);
          } else {
            this._viewContainer.clear();
          }
        });
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();    
  }
}
