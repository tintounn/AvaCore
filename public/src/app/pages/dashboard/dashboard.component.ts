import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public isCollapsed: boolean = true;

  constructor(public session: SessionService) { }

  ngOnInit() {
  }

}
