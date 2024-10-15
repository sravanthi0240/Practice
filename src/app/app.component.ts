import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  

 

  constructor() {
    const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
console.log('screen width', screenWidth);
console.log('screen height', screenHeight);


  }
}
