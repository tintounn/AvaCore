import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {MdButtonModule, MdCardModule, MdInputModule, MdListModule, MdSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {RequestService} from './services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdListModule,
    MdSidenavModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
