import { Component, Inject } from '@angular/core';
import { ModalComponent, SystelabModalContext } from '../library/modal';
import { DialogService, SYS_DIALOG_DATA } from '../library/dialog.service';
import { SecondComponent, SecondComponentParameters } from '../second/second.component';
import { SystelabOverlayRef } from '../library/systelab-overlay-ref';

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

  constructor(public dialog: SystelabOverlayRef, @Inject(SYS_DIALOG_DATA) public parameters: FirstComponentParameters, protected dialogService: DialogService) {
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
