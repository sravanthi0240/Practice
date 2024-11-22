import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-numbers',
  templateUrl: './even-numbers.component.html',
  styleUrls: ['./even-numbers.component.css']
})
export class EvenNumbersComponent implements OnInit {

  // array: number[] = [1,2,3,4,5,6,7,8,9]
  // even: any[]

  arr = [
    { "name": "Apple", "price": 1.2 },
    { "name": "Banana", "price": 0.5 },
    { "name": "Orange", "price": 0.8 },
    { "name": "Grapes", "price": 2.5 },
    { "name": "Watermelon", "price": 3.0 },
    { "name": "Pineapple", "price": 4.0 },
    { "name": "Strawberry", "price": 2.8 },
    { "name": "Blueberry", "price": 3.5 },
    { "name": "Mango", "price": 1.5 },
    { "name": "Peach", "price": 2.0 },
    { "name": "Kiwi", "price": 1.7 },
    { "name": "Papaya", "price": 2.2 },
    { "name": "Cherry", "price": 3.3 },
    { "name": "Plum", "price": 1.9 },
    { "name": "Pear", "price": 1.4 },
    { "name": "Coconut", "price": 5.0 },
    { "name": "Avocado", "price": 1.8 },
    { "name": "Pomegranate", "price": 3.7 },
    { "name": "Lemon", "price": 0.6 },
    { "name": "Lime", "price": 0.7 }
]

sortedArray: any;
grandTotal: any;


  constructor() {
    let newArray: any[] = []
    
    for(let i = 0; i < this.arr.length;i++){
      const element:any = this.arr[i]
      element.id = i
      element.quantity
      element.totalPrice = 0;
      element.total = Math.round(element.price * element.id)
      element.reverseName = element.name.split('').reverse().join('')
      // console.log(element);
      newArray.push(element)
    }
    this.sortedArray = newArray.sort((a,b) =>b.total - a.total);
    console.log(this.sortedArray);
    
   }

  ngOnInit(): void {
    // this.even = this.array.filter(e => e % 2 === 0);
    // console.log('res', this.even);
    
  }

  total(product:any){
   product.totalPrice = product.quantity * product.price;
   this.sortedArray.map((f) =>{
    if(f.id==product){
      f.totalPrice= product.quantity * product.price
    }
   })
   this.grandTotal = this.sortedArray.map((f)=>f.totalPrice).reduce((i,v) => i+v)
   console.log(this.grandTotal);
   
  }
}
