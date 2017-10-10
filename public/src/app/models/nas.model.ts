import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Rx';
import {RequestService} from "../services/request.service";

export class Folder {

  constructor(data) {
    if(data.id) this.id = data.id;
    this.name = data.name;
    this.path = data.path;
    this.size = data.size;
  }

  public id: number;
  public name: string;
  public path: string;
  public size: number;
}

export class File {
  
  constructor(data) {
    if(data.id) this.id = data.id;
    this.name = data.name;
    this.path = data.path;
    this.size = data.size;
    this.mime = data.mime;
  }
  
  public id: number;
  public name: string;
  public path: string;
  public size: number;
  public mime: string;
}
