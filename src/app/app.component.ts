import { Component, ComponentRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { SampleComponent } from './sample/sample.component';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent {
  title = 'modal-app';

  constructor(public overlay: Overlay) {

  }

  public doSomething() {
    const overlayRef = this.overlay.create({
      height:           '400px',
      width:            '600px',
      hasBackdrop:      true,
      positionStrategy: this.overlay.position()
                          .global()
                          .centerHorizontally()
                          .centerVertically(),
      scrollStrategy:   this.overlay.scrollStrategies.block()
    });
    const userProfilePortal = new ComponentPortal(SampleComponent);
    const compRef: ComponentRef<SampleComponent> = overlayRef.attach(userProfilePortal);
    compRef.instance.closeEmitter.subscribe(() => {
      overlayRef.dispose();
    });
  }
}
