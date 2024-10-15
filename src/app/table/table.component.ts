import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { NumberInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  items: any[];
  
  currentPage: number = 1;
totalItems: number = 6;
pageSize: number = 2;

  constructor(private dataService: ModelService) { }

  getData(){
    this.dataService.getData().subscribe(res =>{
      this.items = res.data;
      
      console.log('res', res);
      
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  onPageChange(page){
    this.currentPage =page;
    this.getData();
  }

}


