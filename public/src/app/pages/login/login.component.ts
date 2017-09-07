import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../services/request.service";
import {User, UserFactory} from "../../models/user.model";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User({});
  public username: string;
  public password: string;

  constructor(private userFactory: UserFactory, private request: RequestService,
              private router: Router, private session: SessionService) { }

  ngOnInit() { }

  public login(): void {
    this.userFactory.login(this.username, this.password).then((token) => {
      this.loginSuccess(token);
    }).catch((err) => {
      console.error(err);
    });
  }

  public create(): void {
    this.userFactory.create(this.username, this.password).then((token) => {
      this.loginSuccess(token);
    }).catch((err) => {
      console.error(err);
    });
  }

  public searchUser(event: any): void {
    this.userFactory.search(this.username).then((user) => {
      this.user = user;
    }).catch((err) => {
      console.error(err);
    });
  }

  private loginSuccess(token: string) {
    this.request.setToken(token);
    this.session.set('user', this.user);
    this.router.navigateByUrl('/dashboard/nas');
  }

}
