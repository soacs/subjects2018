import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/application/app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { MulticastedComponent } from './components/multicasted/multicasted.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    MulticastedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
