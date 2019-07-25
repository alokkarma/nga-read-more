import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgaReadMoreModule } from 'nga-read-more';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgaReadMoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
