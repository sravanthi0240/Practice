import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralServiceService } from '../shared/general-service.service';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name:['', [Validators.required, Validators.pattern(/[\S]/g)]],
      mobile:['',  [Validators.required, Validators.pattern("^\\+91[6-9]\\d{9}$")]],
      email:['',[ Validators.required, Validators.email]],
      gender:['', Validators.required],
      dob:['', Validators.required],
      age:[''],
    })
  }

  onDobChange() {
    const dobValue = this.userForm.get('dob')?.value;
    if (dobValue) {
      const today = new Date();
      const dob = new Date(dobValue);
      let age = today.getFullYear() - dob.getFullYear();
      this.userForm.patchValue({ age: age });
    }

    // if(dobValue){
    //   const convertAge = new Date(dobValue);
    //   const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    //   this = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    // }
  }

  onSubmit(){
    if(this.userForm.valid){
      this.userService.addUser(this.userForm.getRawValue()).subscribe(res =>{
        console.log('user added', res);
        
      })
    }
    if(this.userForm.valid){
      this.userService.getUsers().subscribe(res =>{
        console.log('get user', res);
        
      })
  }
}
}





































 // const monthDiff = today.getMonth() - dob.getMonth();
      // if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      //   age--;
      // }