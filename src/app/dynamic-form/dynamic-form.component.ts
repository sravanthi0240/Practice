import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup
  constructor(private fb: FormBuilder) { 
    
  }
  get items(): FormArray {
    return this.dynamicForm.get('items') as FormArray;
  }

  add(){
    const itemGroup = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern("^\\+91[6-9]\\d{9}$")]],
      email: ['', [Validators.required, Validators.email]],

    });
    this.items.push(itemGroup);
  }

  ngOnInit() {

    this.dynamicForm= this.fb.group({
      items: this.fb.array([]),
    
    })
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  onSubmit(): void {
    if(this.dynamicForm.invalid){
      this.dynamicForm.markAllAsTouched();
    }
    console.log(this.dynamicForm.value);
  }
}
