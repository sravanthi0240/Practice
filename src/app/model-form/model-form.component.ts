import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class  ModelFormComponent extends BaseComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ModelFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    super();
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: this.loginData.name,
      // name: ['', Validators.required],
      // mobile: ['', Validators.required],
      mobile: this.loginData.mobileNo
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.dialogRef.close(this.contactForm.value); 
    } else {
      console.log('Form is invalid');
    }
  }

  close(){
   this.dialogRef.close();
  }
}
