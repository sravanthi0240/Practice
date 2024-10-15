import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralServiceService } from '../shared/general-service.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private generalServiceService: GeneralServiceService, public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginname: ['', Validators.required],
      password:['', Validators.required],
      // captcha:null,
      // captchaId:null

    })
  }
  onSubmit(){
    // debugger
    if(this.loginForm.valid){
      const loginData = this.loginForm.getRawValue();
      loginData.captcha = null, loginData.captchaId = null;
      loginData.type = "w";
      this.generalServiceService.post(environment.login,loginData).subscribe((res) =>{
        console.log('login',res);
        
        sessionStorage.setItem('login', JSON.stringify(res.data));
        this.router.navigate(['/dashboard'])
      })
    }
  }

}
