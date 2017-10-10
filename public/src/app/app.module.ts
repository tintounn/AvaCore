import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NasComponent } from './pages/nas/nas.component';

import { UserFactory } from "./models/user.model";

import { SessionService } from "./services/session.service";
import { RequestService } from './services/request.service';
import { ImageComponent } from './components/image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NasComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [RequestService, SessionService, UserFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
