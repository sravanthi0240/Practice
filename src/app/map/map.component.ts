import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  dataByKey: any;
  
  constructor(private dataService: DataService) { 
   
    // .subscribe((res) =>{
    //   console.log('ry',res);
      
    // })
    
  }
   
  ngOnInit(){
    const payload = 'summary';
    this.dataService.getDataByKeyName(payload).subscribe(data =>{
      this.dataByKey = data
      console.log('dataByKey', this.dataByKey);
      
    })
  }

}
