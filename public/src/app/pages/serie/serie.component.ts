import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Serie, SerieFactory } from '../../models/serie.model';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  public serieEditorModalRef: BsModalRef;
  public series: Serie[] = [];

  constructor(private serieFactory: SerieFactory, private modalService: BsModalService) { }

  ngOnInit() {
    this.serieFactory.findAll().then((series) => {
      this.series = series;
    }).catch((err) => {
      console.log(err);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.serieEditorModalRef = this.modalService.show(template);
  }

}
