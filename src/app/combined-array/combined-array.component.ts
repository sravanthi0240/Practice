import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combined-array',
  templateUrl: './combined-array.component.html',
  styleUrls: ['./combined-array.component.css']
})
export class CombinedArrayComponent implements OnInit {

  array1 = [
    {id:1, name: 'Jhon', age: 30},
    {id:2, name: 'Jack', age: 20},
    {id:3, name: 'Mick', age: 25},
    {id:4, name: 'Nick', age: 32},
  ];
  array2 = [
    {id:1, DOB:'1995-05-01'},
    {id:2, DOB:'2005-09-21'},
    {id:3, DOB:'1999-11-18'},
    {id:4, DOB:'2012-7-23'},
  ]
  combinedArray: any[];
 
  constructor() { }

  ngOnInit(): void {
    
    this.combinedArray = new Array(this.array1.length);

    for (let i = 0; i < this.array1.length; i++) {
      const a1 = this.array1[i];
      let a2; 
      for (let j = 0; j < this.array2.length; j++) {
        if (this.array2[j].id === a1.id) {
          a2 = this.array2[j];
        }
      }
      this.combinedArray[i] = {...a1, ...a2}; 
    }
    
    console.log(this.combinedArray);
  }

}

  // ngOnInit(): void {
  //   this.combinedArray = [];
  //    let DOB = []
  //   this.combinedArray = this.array1.map((a1)=>{
  //     const a2 = this.array2.find((a)=> a.id == a1.id)
  //     return{...a1, ...a2};
  //   })
  //   console.log(this.combinedArray);
  // }

  // ngOnInit(): void {
  //   this.combinedArray = this.array1.map(a1 => {
  //     const a2 = this.array2.find(a => a.id === a1.id);
  //     return {
  //       id: a1.id,
  //       name: a1.name,
  //       age: a1.age,
  //       DOB: a2 ? a2.DOB : null 
  //     };
  //   });
  //   console.log(this.combinedArray);
    
  // }

