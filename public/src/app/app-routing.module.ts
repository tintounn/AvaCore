import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {NasComponent} from "./pages/nas/nas.component";
import {SerieComponent} from "./pages/serie/serie.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'nas', component: NasComponent },
    { path: 'series', component: SerieComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
