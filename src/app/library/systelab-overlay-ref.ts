import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

export class SystelabOverlayRef {

  private subject: Subject<any> = new Subject<any>();

  constructor(private overlayRef: OverlayRef) {
  }

  public close(value?: any): void {
    this.overlayRef.dispose();
    this.subject.next(value);
  }

  public getResult(): Observable<any> {
    return this.subject.asObservable();
  }

}
