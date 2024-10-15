import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexLegend, ApexNonAxisChartSeries, ApexResponsive } from 'ng-apexcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent{

  public chartOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    responsive: ApexResponsive[];
    legend: ApexLegend;
  };

  constructor() { 
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'pie',
        height: 350
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      }
    };
  }

  

}
