import { Component, OnInit, Input } from '@angular/core';

import { Serie } from "../../models/serie.model";

@Component({
  selector: 'app-serie-card-item',
  templateUrl: './serie-card-item.component.html',
  styleUrls: ['./serie-card-item.component.css']
})
export class SerieCardItemComponent implements OnInit {

  @Input("serie") serie: Serie;
 
  constructor() { }

  ngOnInit() {
  }

}
