import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Rx';

import {Folder} from "./nas.model";
import {RequestService} from "../services/request.service";


export class Serie extends Folder {

  constructor(data: any = {}) {
    super(data);
    this.summary = data.summary;
    this.image = data.image;
    this.date = data.date;
    this.seasons = data.seasons || [];
  }

  public summary: string;
  public date: string;
  public image: string;
  public seasons: any[];
}

@Injectable()
export class SerieFactory {
  constructor(private request: RequestService) {}

  public delete(id: number): Promise<any> {
    return this.request.delete('/series/' + id);
  }

  public create(user: Serie): Promise<Serie> {
    return this.request.post('/series', user).then((response) => new Serie(response.json().serie));
  }

  public find(id: number): Promise<Serie> {
    return this.request.get('/series/' + id).then((response) => new Serie(response.json().serie));
  }

  public findAll(search: string): Promise<Serie[]> {
    return this.request.get('/series?name=' + search).then(response => response.json().series.map((elt) => { return new Serie(elt); }));
  }
}
