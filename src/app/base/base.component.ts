import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent{

  SavedData: any = JSON.parse(<string>sessionStorage.getItem('storeData'))
  loginData: any = JSON.parse(<string>sessionStorage.getItem('login'))

  constructor() { }

}
