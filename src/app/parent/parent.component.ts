import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  senderForm: FormGroup;
  dataToSend: any[] = [];
  editItem: any = null;

  constructor(private fb: FormBuilder) {
    this.senderForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.senderForm.valid) {
      if(this.editItem !== null){
        this.dataToSend[this.editItem] =this.senderForm.value
        this.editItem = null
      } else{
        this.dataToSend.push(this.senderForm.value);
        sessionStorage.setItem('storeData', JSON.stringify(this.dataToSend))
      }
      // this.dataToSend.push(this.senderForm.value);
      
      this.senderForm.reset(); 
    }
  }

  editData(index){
    this.editItem = index
    this.senderForm.patchValue(this.dataToSend[index])
  }
}


