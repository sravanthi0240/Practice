import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexXAxis, ApexTitleSubtitle, ApexStroke, ApexDataLabels } from 'ng-apexcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  public chartOptions: {
    series: any;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sample",
          data: [10, 20, 15, 30, 40, 10, 30, 50, 10, 5, 10, 40]
        }
      ],
      chart: {
        type: "line",
        height: 350
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "june", "July", "august", "september", "October", "November", "December"]
      },
      title: {
        text: "Sample Line Chart"
      },
      stroke: {
        curve: "smooth"
      },
      dataLabels: {
        enabled: false
      }
    };
   }

}
