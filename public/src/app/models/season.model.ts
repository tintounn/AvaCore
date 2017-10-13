import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Rx';

import {Folder} from "./nas.model";
import {RequestService} from "../services/request.service";

export class Season extends Folder {

  constructor(data: any = {}) {
    super(data);
    this.number = data.summary;
    this.date = data.image;
  }

  public number: number;
  public date: string;
}

@Injectable()
export class SeasonFactory {
  constructor(private request: RequestService) {}

  public delete(serieId: number, id: number): Promise<any> {
    return this.request.delete('/series/' + serieId + '/seasons/' + id);
  }

  public create(serieId: number, season: Season): Promise<Season> {
    return this.request.post('/series/' + serieId + '/seasons', season).then((response) => new Season(response.json().serie));
  }

  public find(serieId: number, id: number): Promise<Season> {
    return this.request.get('/series/' + serieId + '/seasons/' + id).then((response) => new Season(response.json().serie));
  }

  public findAll(serieId: number): Promise<Season[]> {
    return this.request.get('/series/' + serieId + '/seasons').then(response => response.json().series.map((elt) => { return new Season(elt); }));
  }
}
