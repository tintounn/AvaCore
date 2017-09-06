import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    var token: string = localStorage.getItem("ava-token");

    if(token) {
      //Requete qui check si le token est toujours valide
    } else {
      this.router.navigateByUrl('/login');
    }

  }

}
