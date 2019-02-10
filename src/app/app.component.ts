import { Component } from '@angular/core';
import { DialogService } from './library/modal';
import { FirstComponent, FirstComponentParameters } from './first/first.component';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'modal-app';

  constructor(protected dialogService: DialogService) {
  }

  public doSomething() {
    const parameters: FirstComponentParameters = FirstComponent.getParameters();
    parameters.parameterOne = '1';

    this.dialogService.showDialog(FirstComponent, parameters)
      .subscribe(
        (result) => {
          console.log(result);
        }
      );
  }
}
