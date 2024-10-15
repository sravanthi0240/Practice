import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentMessage: String;

  constructor(private notificationS: NotificationService) { }

  ngOnInit(): void {
    this.notificationS.notificationSubject.subscribe(d =>{
      this.currentMessage = d;
    })
  }
  sendMessage(data){
    this.notificationS.sendNotification(data.value);
  }

}
