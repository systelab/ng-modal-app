import { Component, EventEmitter, Inject } from '@angular/core';
import { ModalComponent, SystelabModalContext } from '../library/modal';
import { DialogService, SYS_DIALOG_DATA, SYS_DIALOG_REF } from '../library/dialog.service';
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

  public closeEmitter = new EventEmitter();

  public parameters: FirstComponentParameters;

  constructor(@Inject(SYS_DIALOG_REF) public dialog: any, @Inject(SYS_DIALOG_DATA) public data: any, protected dialogService: DialogService) {
    this.parameters = data;
    console.log(this.parameters);
  }

  public static getParameters(): FirstComponentParameters {
    return new FirstComponentParameters();
  }

  public doClose() {
    this.dialog.dispose();
    this.closeEmitter.emit();
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
