import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-array',
  templateUrl: './age-array.component.html',
  styleUrls: ['./age-array.component.css']
})
export class AgeArrayComponent implements OnInit {

  array:any = [
    {name:'Jhon', DOB:'2001-11-30'},
    {name:'Jack', DOB:'1997-03-09'},
    {name:'Brick', DOB:'2000-05-6'},
    {name:'Milky', DOB:'1992-01-01'},
  ]

  agebelow: boolean = false

  constructor() { }


  ngOnInit(): void {
    this.sortByAge();
  }

  sortByAge(): void {
    this.array.map((f:any) =>{
      f.age = this.calculateAge(f.DOB)
    })
    this.array.sort((a,b)=>{
      return a.age - b.age
    })
    console.log(this.array);
  }

  calculateAge(DOB: any) {
      const today = new Date();
      const dob = new Date(DOB);
      let age = today.getFullYear() - dob.getFullYear();
      let month = today.getMonth() - dob.getMonth()
      let days = today.getDate() - dob.getDate()
      if(month<0){
        age--
        month+=12
      }
      if(days<0){
        month--
        days+=new Date(today.getFullYear(), today.getMonth(), 0).getDate()
      }
      console.log(age,month,days);
      
    return age;

  }

 
}

