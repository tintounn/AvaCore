import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output("fired") firedEvent: EventEmitter<string> = new EventEmitter<string>();
  public value: string;
  private timeout: any;

  constructor() { }

  ngOnInit() { }

  onKeyPress() {
    if(this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.firedEvent.emit(this.value);
    }, 250);
  }
}
