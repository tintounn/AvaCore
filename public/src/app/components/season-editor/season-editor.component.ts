import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Season, SeasonFactory} from '../../models/season.model';

@Component({
  selector: 'app-season-editor',
  templateUrl: './season-editor.component.html',
  styleUrls: ['./season-editor.component.css']
})
export class SeasonEditorComponent implements OnInit {

  @Input('serieId') serieId: number;
  @Output('saved') savedEvent: EventEmitter<Season> = new EventEmitter<Season>();
  @Input('season') season: Season = new Season();

  constructor(private seasonFactory: SeasonFactory) { }

  ngOnInit() { }

  save() { }
}
