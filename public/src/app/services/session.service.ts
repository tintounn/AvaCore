import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private data: any = {};

  constructor() { }

  public set(key: string, data: any) {
    this.data[key] = data;
  }

  public get(key: string): any {
    return this.data[key];
  }
}
