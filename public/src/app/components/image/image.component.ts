import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input("default") default: string;
  @Input("class") class: string;
  @Input("style") style: any;

  public safeSrc: any;
  public safeStyle: any;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(this.style);
    this.sanitizeAndSetImage(this.default);
  }

  onError() {
    this.sanitizeAndSetImage(this.default);
  }

  sanitizeAndSetImage(src: string) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
}
