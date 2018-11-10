import { Component, EventEmitter } from '@angular/core';

@Component({
  selector:    'sample-modal',
  templateUrl: './sample.component.html',
  styleUrls:   ['./sample.component.scss']
})
export class SampleComponent {

  public closeEmitter = new EventEmitter();

  constructor() {
  }

  public doClose() {
    this.closeEmitter.emit();
  }
}
