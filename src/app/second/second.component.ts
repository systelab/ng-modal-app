import { Component } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from '../library/modal';

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
  public parameters: SecondComponentParameters;

  constructor(public dialog: DialogRef<SecondComponentParameters>) {
    this.parameters = dialog.context;
  }

  public static getParameters(): SecondComponentParameters {
    return new SecondComponentParameters();
  }

  public doClose() {
    this.dialog.close('Hello from second component');
  }
}
