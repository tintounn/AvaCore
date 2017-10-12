import { Component, OnInit, Input } from '@angular/core';

import { Serie } from '../../models/serie.model';

@Component({
  selector: 'app-serie-viewer',
  templateUrl: './serie-viewer.component.html',
  styleUrls: ['./serie-viewer.component.css']
})
export class SerieViewerComponent implements OnInit {

  @Input("serie") serie: Serie = new Serie();

  constructor() { }

  ngOnInit() { }

  setSerie(serie: Serie) {
    this.serie = serie;
  }
}
