import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from "@angular/router";

import {User, UserFactory} from "../../models/user.model";

import {RequestService} from "../../services/request.service";
import {SessionService} from "../../services/session.service";

import { ImageComponent } from '../../components/image/image.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User({});
  @ViewChild("profilPicture") profilPicture: ImageComponent;

  constructor(private userFactory: UserFactory, private request: RequestService,
              private router: Router, private session: SessionService) { }

  ngOnInit() { }

  public login(): void {
    this.userFactory.login(this.user).then((res) => {
      this.loginSuccess(res.user, res.token);
    }).catch((err) => {
      console.error(err);
    });
  }

  public create(): void {
    this.userFactory.create(this.user).then((res) => {
      this.loginSuccess(res.user, res.token);
    }).catch((err) => {
      console.error(err);
    });
  }

  public searchUser(event: any): void {
    this.userFactory.search(this.user.username).then((user) => {
      if(user.image) {
        this.profilPicture.sanitizeAndSetImage(user.image);
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  private loginSuccess(user: User, token: string) {
    this.request.setToken(token);
    this.session.set('user', user);
    this.router.navigateByUrl('/dashboard/nas');
  }

  private loginError() {
    //Msg d'erreur
  }
}
