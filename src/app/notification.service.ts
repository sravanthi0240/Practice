import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notificationSubject = new BehaviorSubject<String>('Hello EveryOne');

  constructor() { }
  sendNotification(data){
    this.notificationSubject.next(data);
  }
}
