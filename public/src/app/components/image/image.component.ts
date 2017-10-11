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
  @Input("src") src: string;

  public safeSrc: any;
  public safeStyle: any;
  private activeUrl: string;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(this.style);

    if(this.src) {
      this.sanitizeAndSetImage(this.src);
    } else {
      this.sanitizeAndSetImage(this.default);
    }
  }

  onError() {
    if(this.src == this.activeUrl) {
      this.sanitizeAndSetImage(this.default);
    }
  }

  sanitizeAndSetImage(src: string) {
    this.activeUrl = src;
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
}
