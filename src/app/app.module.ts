import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations:    [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports:         [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
  ],
  providers:       [],
  bootstrap:       [AppComponent]
})
export class AppModule {
}
