import { Injectable, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { SystelabModalContext } from './modal-context';
import { DialogRef } from './dialog-ref';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public overlay: Overlay, public injector: Injector) {
  }

  public showDialog(component: Type<any>, dialogParameters?: SystelabModalContext): Observable<any> {
    const overlayRef = this.overlay.create({
      height:           dialogParameters.height + 'px',
      width:            dialogParameters.width + 'px',
      hasBackdrop:      true,
      positionStrategy: this.overlay.position()
                          .global()
                          .centerHorizontally()
                          .centerVertically(),
      scrollStrategy:   this.overlay.scrollStrategies.block()
    });
    const dialogRef = new DialogRef(overlayRef, dialogParameters);
    const userProfilePortal = new ComponentPortal(component, null, this.createInjector(dialogRef));
    overlayRef.attach(userProfilePortal);
    return dialogRef.getResult();
  }

  private createInjector(overlayRef: DialogRef<SystelabModalContext>): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(DialogRef, overlayRef);
    return new PortalInjector(this.injector, injectorTokens);
  }
}
