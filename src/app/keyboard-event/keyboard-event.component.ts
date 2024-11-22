import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard-event',
  templateUrl: './keyboard-event.component.html',
  styleUrls: ['./keyboard-event.component.css']
})
export class KeyboardEventComponent implements OnInit {

  users:any[] =[
    {UserName:'Jack'},
    {UserName:'Jack12'},
    {UserName:'Jack_nit'},
    {UserName:'Jack_hyd'},
  ];
  UserError:String='';
  isInvalid:boolean=false;
  isPwdWarnVisible=false;
  constructor() { }

  verifyUser(e:any){
    for(let user of this.users){
      if(user.UserName == e.target.value){
        this.UserError = 'User Name Taken- Try Another';
        this.isInvalid = true;
        break;
      } else{
        this.UserError = "User Name Available";
        this.isInvalid = false;
      }
    }
  }

  verifyPassword(e:any){
    if(e.keyCode >= 65 && e.keyCode <= 90){
      this.isPwdWarnVisible = false
    }
  }
  ngOnInit(): void {
  }

}
