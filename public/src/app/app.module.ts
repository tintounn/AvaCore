import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AlertModule, CollapseModule, BsDropdownModule, SortableModule, 
          BsDatepickerModule, ModalModule, TooltipModule } from 'ngx-bootstrap';


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
import { SerieCardItemComponent } from './components/serie-card-item/serie-card-item.component';
import { SerieViewerComponent } from './components/serie-viewer/serie-viewer.component';
import { SeasonViewerComponent } from './components/season-viewer/season-viewer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


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
    SerieComponent,
    SerieCardItemComponent,
    SerieViewerComponent,
    SeasonViewerComponent,
    SearchBarComponent
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
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [RequestService, SessionService, UserFactory, SerieFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
