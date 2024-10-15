import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() receivedData: any[] = [];
  @Output() edit = new EventEmitter<any>();

  deleteItem(index: number) {
    this.receivedData.splice(index, 1);
  }
  editItem(index: number){
    // let editData= this.receivedData;
    this.edit.emit(index)
  }
}


