import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  username = '';
  clickButton = false;

  constructor(){
  }

  wipeUsername(){
    this.username = '';
  }

  


}


