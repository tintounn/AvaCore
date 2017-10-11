import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Serie, SerieFactory } from '../../models/serie.model';
import { SerieEditorComponent } from "../../components/serie-editor/serie-editor.component";
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  @ViewChild("serieEditor") serieEditor: SerieEditorComponent;
  @ViewChild("serieEditorModal") serieEditorModal: ModalDirective;

  @ViewChild("serieViewerModal") serieViewerModal: ModalDirective;

  public series: Serie[] = [];

  constructor(private serieFactory: SerieFactory) { }

  ngOnInit() {
    this.findAllSeries();
  }

  findAllSeries(search: string = "") {
    this.serieFactory.findAll(search).then((series) => {
      this.series = series;
    }).catch((err) => {
      console.log(err);
    });
  }

  openSerie(index: number) {
    this.serieFactory.find(this.series[index].id).then((serie) => {
      console.log(serie);
    }).catch((err) => {
      console.log(err);
    });
  }

  saveSerie() {
    this.serieEditor.save();
  }

  updateSerie(index: number) {
    this.serieEditor.update(this.series[index]);
    this.serieEditorModal.show();
  }

  deleteSerie(index: number) {

  }

  serieSaved(serie: Serie) {
    this.series.push(serie);
    this.serieEditorModal.hide();
  }

  searchFired(value: string) {
    this.findAllSeries(value);
  }
}
