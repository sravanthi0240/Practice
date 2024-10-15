import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelFormComponent } from '../model-form/model-form.component';

@Component({
  selector: 'app-model-table',
  templateUrl: './model-table.component.html',
  styleUrls: ['./model-table.component.css']
})
export class ModelTableComponent implements OnInit {
  contactList: any[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  removeItem(index:number){
    this.contactList.splice(index,1)
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModelFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactList.push(result); 
      }
    });
  }
}
