import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AlertModule, CollapseModule, BsDropdownModule, SortableModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NasComponent } from './pages/nas/nas.component';

import { UserFactory } from "./models/user.model";

import { SessionService } from "./services/session.service";
import { RequestService } from './services/request.service';
import { ImageComponent } from './components/image/image.component';
import { DeviceCardItemComponent } from './components/device-card-item/device-card-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NasComponent,
    ImageComponent,
    DeviceCardItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    SortableModule.forRoot()
  ],
  providers: [RequestService, SessionService, UserFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
