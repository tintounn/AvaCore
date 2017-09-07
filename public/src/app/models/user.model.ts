import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Rx';
import {RequestService} from "../services/request.service";

export class User {

  constructor(data: any) {
    if(data.id) this.id = data.id;
    this.username = data.username;
    this.image = data.image;
  }

  public id: number;
  public username: string;
  public image: string;
}

@Injectable()
export class UserFactory {
  constructor(private request: RequestService) {}

  public login(username: string, password: string): Promise<string> {
    return this.request.post('/users', {username: username, password: password}).then((response) => response.json().token);
  }

  public create(username: string, password: string): Promise<string> {
    return this.request.post('/users/create', {username: username, password: password}).then((response) => response.json().token);
  }

  public search(username: string): Promise<User> {
    return this.request.get('/users/search/' + username).then(response => new User(response.json().user));
  }
}
