import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TaskRelatedModule} from './task-related/task-related.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    TaskRelatedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
