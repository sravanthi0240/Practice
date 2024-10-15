import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, NgApexchartsModule, ApexGrid, ApexYAxis,
  ApexDataLabels, ApexPlotOptions,
  ApexLegend, ApexNonAxisChartSeries,
  ApexResponsive, ApexStroke,
  ApexStates, ApexTheme,
  ApexFill, ApexTooltip
} from "ng-apexcharts";
import { log } from 'console';
import { json } from 'stream/consumers';
import { DataService } from '../data.service';
//import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ApexLegend, ApexTitleSubtitle, ApexXAxis} from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   labels?: string[];
//   responsive?: ApexResponsive[];
//   xaxis?: ApexXAxis;
//   title?: ApexTitleSubtitle;
//   legend?: ApexLegend;
// };
export type ChartOptionsPie = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid,
  colors: string[];
};
@Component({
  selector: 'app-json-chart',
  templateUrl: './json-chart.component.html',
  styleUrls: ['./json-chart.component.css']
})
export class JsonChartComponent implements OnInit {

  // @ViewChild("chart") chart: ChartComponent | undefined;
  // @ViewChild('titleText') titleTextElement: any;
  
  public HWAGraph: Partial<ChartOptionsPie> = {};
  public HWMGraph: Partial<ChartOptionsPie> = {};
  

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((d) => {
      // console.log('DATA:-', JSON.stringify(d.data.noofhwmgender_pie))

      let hwaSeries = d.data.noofhwagender_pie.map(item => item.value);
      let hwaLabels = d.data.noofhwagender_pie.map(item => item.name)

      this.HWAGraph = {
        series: hwaSeries,
        chart: {
          type: 'pie',
          height: 350
        },
        labels: hwaLabels, 
        title: {
          text: 'Number of HWA by Gender',
          align: 'center'
        }
      };

      let hwmSeries = d.data.noofhwmgender_pie.map(item => item.value);
      let hwmLabels = d.data.noofhwmgender_pie.map(item => item.name)


      this.HWMGraph = {
        series: hwmSeries,
        chart: {
          type: 'pie',
          height: 350
        },
        labels: hwmLabels,
        title: {
          text: 'Number of HWM by Gender',
          align: 'center'
        }
      };
    });
  }
}
