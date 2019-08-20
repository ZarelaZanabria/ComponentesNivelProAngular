import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './componentes/progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './componentes/display/display.component';
import { TimerComponent } from './componentes/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    DisplayComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
