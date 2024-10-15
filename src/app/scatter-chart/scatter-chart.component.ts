import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';



@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent {

  public chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
  };

  constructor() { 
    this.chartOptions = {
      series: [{
        name: 'Sample A',
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [25.4, 3],
          [19, 2],
          [10.9, 1]
        ]
      }, {
        name: 'Sample B',
        data: [
          [36.4, 5.4],
          [31.7, 2],
          [35.4, 3],
          [29, 2],
          [20.9, 1]
        ]
      }],
      chart: {
        type: 'scatter',
        height: 350
      },
      title: {
        text: 'Scatter Chart Example'
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function(val) {
            return parseFloat(val).toFixed(1);
          }
        }
      }
    };
  }

}
