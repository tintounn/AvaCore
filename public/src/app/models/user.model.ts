import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Rx';
import {RequestService} from "../services/request.service";

export class User {

  constructor(data) {
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

  public login(user: User): Promise<any> {
    return this.request.post('/users', user).then((response) => response.json());
  }

  public create(user: User): Promise<any> {
    return this.request.post('/users/create', user).then((response) => response.json());
  }

  public search(username: string): Promise<User> {
    return this.request.get('/users/search/' + username).then(response => new User(response.json().user));
  }
}
