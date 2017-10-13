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

  public testData: any[] = [
    {name: "The walking dead", summary: "This is a summary", image: "one big URL", date: "10/15/2017"},
    {name: "Games of throne", summary: "This is a summary", image: "one big URL", date: "10/15/2017"},
    {name: "The big bang theory", summary: "This is a summary", image: "one big URL", date: "10/15/2017"},
    {name: "Interstellar", summary: "This is a summary", image: "one big URL", date: "10/15/2017"},
    {name: "Oblivion", summary: "This is a summary", image: "one big URL", date: "10/15/2017"},
    {name: "Stargate", summary: "This is a summary", image: "one big URL", date: "10/15/2017"},
    {name: "Star wars", summary: "This is a summary", image: "one big URL", date: "10/15/2017"},
    {name: "Star trek", summary: "This is a summary", image: "one big URL", date: "10/15/2017"}
  ]

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

  onSerieSelected(serie: any) {
    this.serie.name = serie.name;
    this.serie.summary = serie.summary;
    this.serie.image = serie.image;
    this.serie.date = serie.date;
  }
}
