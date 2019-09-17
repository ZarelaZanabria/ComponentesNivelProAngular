import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './componentes/progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './componentes/display/display.component';
import { TimerComponent } from './componentes/timer/timer.component';
import { AlertViewComponent } from './componentes/alert-view/alert-view.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { TabComponent } from './componentes/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    DisplayComponent,
    TimerComponent,
    AlertViewComponent,
    TabsComponent,
    TabComponent
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
