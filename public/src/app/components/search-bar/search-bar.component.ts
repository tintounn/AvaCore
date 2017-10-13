import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input("data") data: any[] = [];
  @Input("style") style: string = "";
  @Input("class") class: string = "form-control";
  @Input("sub-data") subData: string; 
  @Input("placeholder") placeholder: string;
  @Output("fired") firedEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output("selected") selectedEvent: EventEmitter<any> = new EventEmitter<any>();
  
  public value: string;
  private timeout: any;
  private timeoutValue: number = 250;
  private safeStyle: SafeStyle;

  constructor(private sanitize: DomSanitizer) { }

  ngOnInit() { 
    this.safeStyle = this.sanitize.bypassSecurityTrustStyle(this.style);
  }

  onKeyPress() {
    if(this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.firedEvent.emit(this.value);
    }, this.timeoutValue);
  }

  onSelected(value: any) {
    this.selectedEvent.emit(value.item);
  }
}
