import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private data: any[] = [];
  constructor() { }

  sendData(newData: any){
    this.data.push(newData);
  }

  getData(){
    return this.data
  }
}
