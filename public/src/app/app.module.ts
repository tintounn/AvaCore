import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AlertModule, CollapseModule, BsDropdownModule, SortableModule, 
          BsDatepickerModule, BsModalService, ModalModule } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NasComponent } from './pages/nas/nas.component';

import { UserFactory } from "./models/user.model";
import { SerieFactory } from "./models/serie.model";

import { SessionService } from "./services/session.service";
import { RequestService } from './services/request.service';
import { ImageComponent } from './components/image/image.component';
import { DeviceCardItemComponent } from './components/device-card-item/device-card-item.component';
import { SerieEditorComponent } from './components/serie-editor/serie-editor.component';
import { SeasonEditorComponent } from './components/season-editor/season-editor.component';
import { EpisodeEditorComponent } from './components/episode-editor/episode-editor.component';
import { SerieComponent } from './pages/serie/serie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NasComponent,
    ImageComponent,
    DeviceCardItemComponent,
    SerieEditorComponent,
    SeasonEditorComponent,
    EpisodeEditorComponent,
    SerieComponent
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
    SortableModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [RequestService, BsModalService, SessionService, UserFactory, SerieFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
