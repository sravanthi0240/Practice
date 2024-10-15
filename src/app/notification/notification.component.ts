import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notificationMessage: String;

  constructor(private notificationS: NotificationService) { }

  ngOnInit(): void {
    this.notificationS.notificationSubject.subscribe(d => {
      this.notificationMessage = d;
    })
  }

}
