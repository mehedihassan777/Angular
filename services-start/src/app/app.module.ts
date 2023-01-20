import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountService } from './account.service';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';
import { CountService } from './count.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveComponent,
    InactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LoggingService, AccountService,CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
