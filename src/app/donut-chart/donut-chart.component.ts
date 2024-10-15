import { Component, OnInit } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend } from 'ng-apexcharts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent {
  public chartOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
  };

  constructor() {
    this.chartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut',
        height: 350
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      dataLabels: {
        enabled: true
      },
      legend: {
        position: 'bottom'
      }
    };
   }

 
}
