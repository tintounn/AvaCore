import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {
  MdButtonModule, MdCardModule, MdInputModule, MdListModule, MdSidenavModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {RequestService} from './services/request.service';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {UserFactory} from "./models/user.model";
import { NasComponent } from './pages/nas/nas.component';
import {SessionService} from "./services/session.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdListModule,
    MdTabsModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule
  ],
  providers: [RequestService, SessionService, UserFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
