import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isOpened = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.isOpened = !this.isOpened;
  }

}
