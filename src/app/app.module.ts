import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { WarningComponent } from './components/alerts/warning/warning.component';
import { SuccessComponent } from './components/alerts/success/success.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { Individual1Component } from './individuals/individual1/individual1.component';
import { Individual2Component } from './individuals/individual2/individual2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    SpinnerComponent,
    Individual1Component,
    IndividualsComponent,
    Individual2Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
