import { Component, Inject } from '@angular/core';
import { ModalComponent, SystelabModalContext } from '../library/modal';
import { SYS_DIALOG_DATA } from '../library/dialog.service';
import { SystelabOverlayRef } from '../library/systelab-overlay-ref';

export class SecondComponentParameters extends SystelabModalContext {
  public parameterOne: string;
  public width = 400;
  public height = 350;
}

@Component({
  selector:    'second-modal',
  templateUrl: './second.component.html',
  styleUrls:   ['./second.component.scss']
})
export class SecondComponent implements ModalComponent<SecondComponentParameters> {

  public title = 'Second Modal';

  constructor(public dialog: SystelabOverlayRef, @Inject(SYS_DIALOG_DATA) public parameters: SecondComponentParameters) {
    console.log(this.parameters);
  }

  public static getParameters(): SecondComponentParameters {
    return new SecondComponentParameters();
  }

  public doClose() {
    this.dialog.close('Hello from second component');
  }
}
