import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Serie, SerieFactory} from "../../models/serie.model";

@Component({
  selector: 'app-serie-editor',
  templateUrl: './serie-editor.component.html',
  styleUrls: ['./serie-editor.component.css']
})
export class SerieEditorComponent implements OnInit {

  @Input("serie") serie: Serie = new Serie();
  @Output("saved") savedEvent: EventEmitter<Serie> = new EventEmitter<Serie>();

  constructor(private serieFactory: SerieFactory) { }

  ngOnInit() {
    if(!this.serie) {
      this.reset();
    }
  }

  save() {
    let promise: Promise<Serie>;

    if(!this.serie.id) {
      promise = this.serieFactory.create(this.serie);
    } else {
      //Update
    }

    promise.then((serie) => {
      this.reset();
      this.savedEvent.emit(serie);
    }).catch((err) => {
      console.log(err);
    });
  }

  reset() {
    this.serie = new Serie();
  }

  update(serie: Serie) {
    this.serie = serie;
  }
}
