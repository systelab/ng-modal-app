import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

export class DialogRef<T> {

  private static readonly ESCAPE_KEY = 'Escape';

  private subject: Subject<any> = new Subject<any>();

  constructor(private overlayRef: OverlayRef, public context?: T) {
    overlayRef.backdropClick()
      .subscribe(
        () => this.close());

    overlayRef.keydownEvents()
      .subscribe((k) => {
        if (k.code === DialogRef.ESCAPE_KEY) {
          this.close();
        }
      });
  }

  public close(value?: any): void {
    this.overlayRef.dispose();
    this.subject.next(value);
  }

  public getResult(): Observable<any> {
    return this.subject.asObservable();
  }
}
