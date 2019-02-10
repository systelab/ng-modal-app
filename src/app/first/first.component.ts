import { Component } from '@angular/core';
import { DialogRef, DialogService, ModalComponent, SystelabModalContext } from '../library/modal';
import { SecondComponent, SecondComponentParameters } from '../second/second.component';

export class FirstComponentParameters extends SystelabModalContext {
  public parameterOne: string;
  public width = 900;
  public height = 450;
}

@Component({
  selector:    'first-modal',
  templateUrl: './first.component.html',
  styleUrls:   ['./first.component.scss']
})
export class FirstComponent implements ModalComponent<FirstComponentParameters> {

  public title = 'First Modal';

  public parameters: FirstComponentParameters;

  constructor(public dialog: DialogRef<FirstComponentParameters>, protected dialogService: DialogService) {
    this.parameters = dialog.context;
  }

  public static getParameters(): FirstComponentParameters {
    return new FirstComponentParameters();
  }

  public doClose() {
    this.dialog.close('Hello from first component');
  }

  public doAnother() {
    const parameters: SecondComponentParameters = SecondComponent.getParameters();
    parameters.parameterOne = '1';

    this.dialogService.showDialog(SecondComponent, parameters)
      .subscribe(
        (result) => {
          console.log(result);
        }
      );
  }
}
