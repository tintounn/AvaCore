import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Serie, SerieFactory } from '../../models/serie.model';
import { SerieEditorComponent } from "../../components/serie-editor/serie-editor.component";
import { SerieViewerComponent } from "../../components/serie-viewer/serie-viewer.component";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  @ViewChild("serieEditor") serieEditor: SerieEditorComponent;
  @ViewChild("serieViewer") serieViewer: SerieViewerComponent;
  @ViewChild("serieEditorModal") serieEditorModal: ModalDirective;
  @ViewChild("serieViewerModal") serieViewerModal: ModalDirective;

  public filteredSeries: Serie[] = [];
  private series: Serie[] = [];
  private searchValue: string;

  constructor(private serieFactory: SerieFactory) { }

  ngOnInit() {
    this.findAllSeries();
  }

  findAllSeries(search: string = "") {
    this.serieFactory.findAll(search).then((series) => {
      this.series = series;
      this.filterSeries();
    }).catch((err) => {
      console.log(err);
    });
  }

  openSerie(index: number) {
    this.serieFactory.find(this.filteredSeries[index].id).then((serie) => {
      this.serieViewer.setSerie(serie);
      this.serieViewerModal.show();
    }).catch((err) => {
      console.log(err);
    });
  }

  saveSerie() {
    this.serieEditor.save();
  }
  
  serieSaved(serie: Serie) {
    this.series.push(serie);
    this.filterSeries();
    this.serieEditorModal.hide();
  }

  searchFired(value: string) {
    this.searchValue = value;
    this.filterSeries();
  }

  private filterSeries() {
    this.filteredSeries = [];
    
    if(!this.searchValue) {
      this.filteredSeries = this.series;
    } else {
      for(let serie of this.series) {
        if(serie.name.toLowerCase().indexOf(this.searchValue.toLocaleLowerCase()) > -1) {
          this.filteredSeries.push(serie);
        }
      }
    }
  }
}
