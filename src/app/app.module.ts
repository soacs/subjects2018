import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/application/app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { MulticastedComponent } from './components/multicasted/multicasted.component';
import { BehaviorsComponent } from './components/behaviors/behaviors.component';
import { ReplayComponent } from './components/replay/replay.component';
import { AsyncComponent } from './components/async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    MulticastedComponent,
    BehaviorsComponent,
    ReplayComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
